import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, BrowserRouter } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import './index.css';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie'

const history = createBrowserHistory();

ReactDOM.render(
  	<Router history={history}>
  		<div>
  			<Route path="/" component={MovieList} exact/>
  			<Route path="/movies/:id" component={Movie}/>
  		</div>
  	</Router>,
  document.getElementById('root')
);
