import React from 'react';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const RECEIVE_FETCH_DATA = 'RECEIVE_FETCH_DATA';
const receiveFetchData = (result) => ({type:RECEIVE_FETCH_DATA, response:result});
const fetchApiData = (dispatch) => {
  // url部分は変えてね。
  return fetch('https://api.cightning.com/', {credentials: 'include'})
　　　　  .then(response => {
      if (response.status < 400) {
        return response.json().then((json)=>dispatch(receiveFetchData(json)));
      } else {
        console.log(response);
      }
    })
}
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

    const {dispatch} = this.props;

    fetchApiData(dispatch);

    /*
    this.setState({hogehoge:'yeah!'});
    */

  }

  /*　その他、componentの処理やfunction*/

  render(){

    const {　fetchData } = this.props;
    //const { hogehoge } = this.state;

    return <div>
            <div>{JSON.stringify(fetchData)}</div>
            <p>aaa</p>
           </div>

  }
}

const mapStateToProps = state => {

  const fetchData = state.fetchData || {};

  return { fetchData };

}

const TotalApp = connect(mapStateToProps)(App);

const reducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FETCH_DATA:
      return Object.assign({}, state, { fetchData: action.response });
    default:
      return state;
  }

}

const store = createStore( reducer );

export default class example extends React.Component {
  render() {
    return <Provider store={store}><TotalApp {...this.props} /></Provider>
  }
}
