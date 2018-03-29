import React from 'react';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const RECEIVE_FETCH_DATA = 'RECEIVE_FETCH_DATA';
const fetchData = (result) => ({type:RECEIVE_FETCH_DATA, response:result});

class App extends React.Component {

  constructor(props) {

    super(props);

  }
  componentWillMount() {

    console.log(this.props.actions)

    this.props.actions.fetchData();

  }

  render(){

    const {　fetchData } = this.props;

    return <div>
            <div>{JSON.stringify(fetchData)}</div>
            <p>aaa</p>
           </div>

  }
}

const mapStateToProps = state => ({ fetchData:state.fetchData })

class ActionDispatcher {

  constructor(dispatch) {
    this.dispatch=dispatch;
  }

  fetchData() {

    return fetch('http://localhost:3000/example/a', {credentials: 'same-origin'})
      .then(response => {
        if (response.status < 400) {
          return response.json().then((json)=>this.dispatch(fetchData(json)));
        } else {
          console.log(response);
        }
      })

  }
}

const mapDispatchToProps =(dispatch) => ({actions: new ActionDispatcher(dispatch)})

const TotalApp = connect(mapStateToProps, mapDispatchToProps)(App);

const reducer = (state = {fetchData :{}}, action) => {
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
