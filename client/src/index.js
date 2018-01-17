import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, BrowserRouter } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const history = createBrowserHistory();

ReactDOM.render(
  <div>
  	Application running add your routing
  	<BrowserRouter history={history}>
  		<Route path="/" component={MovieList}/>
  	</BrowserRouter>
  </div>,
  document.getElementById('root')
);
