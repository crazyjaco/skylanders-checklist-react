import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import ListCharacters from './components/ListCharacters'
import './scss/style.scss'

render(
	<div className="body">
		<Header />
		<ListCharacters path="data/characters.json" />
	</div>,	document.getElementById('character-list')
)