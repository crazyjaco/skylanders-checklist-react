import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import ListPage from './components/ListPage'
import './scss/style.scss'

render(
	<Router history={hashHistory}>
		<Route path="/" component={ListPage}/>
	</Router>,	
	document.getElementById('app')
)