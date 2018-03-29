import React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react'

const fetchApiData = () => {
　　　　// url部分は変えてね。
　　　　return　fetch('http://localhost:3000/example/a', {credentials: 'same-origin'})
　　　　　　　　　　　　　　　　　　　　　.then(response => {
　　　　　　　　　　　　　　　　　　　　　　　　　if (response.status < 400) {
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　return response.json().then((json)=>{appState.fetchData=json});
　　　　　　　　　　　　　　　　　　　　　　　　　} else {
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　console.log(response);
　　　　　　　　　　　　　　　　　　　　　　　　　}
　　　　　　　　　　　　　　　　　　　　　　})
}

@observer
class App extends React.Component {
　　　　constructor(props) {
　　　　　　　　super(props);
　　　　　　　　/*
　　　　　　　　this.state = {
　　　　　　　　　　　　hogehoge:'',
　　　　　　　　}
　　　　　　　　*/
　　　　}
　　　　componentWillMount() {
　　　　　　　　fetchApiData();
　　　　　　　　/*
　　　　　　　　this.setState({hogehoge:'yeah!'});
　　　　　　　　*/
　　　　}

　　　　/*　その他、componentの処理やfunction*/

　　　　render(){

　　　　　　　　const {　data } = this.props;
　　　　　　　　//const { hogehoge } = this.state;

　　　　　　　　return <div>{JSON.stringify(data.fetchData)}</div>;

　　　　}
}

class AppState {
　　　　@observable fetchData;
　　　　constructor() {
　　　　　　　　this.fetchData={};
　　　　}
}

const appState = new AppState();

export default class example extends React.Component {
　　　　render() {
　　　　　　　　return <App data={appState} />
　　　　}
}
