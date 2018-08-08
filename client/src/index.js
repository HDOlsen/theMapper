import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './Styles.css';
import App from './App';
import History from './components/History';
import Country from './components/Country';
import MapClass from './components/MapClass';
import Post from './components/Post';
import reducer from './store/reducers/post';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


// create enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

ReactDOM.render(
  <BrowserRouter>
  <Provider store = {store}>
    <App>
      <Switch>
        <Route exact path= '/' component={Country}/>
        <Route path= '/country' component={Post}/>
        <Route path= '/map' component={MapClass}/>
        <Route path = '/history' component = {History}/>
      </Switch>
    </App>
  </Provider>
  </BrowserRouter>

, document.getElementById('root'));
registerServiceWorker();
