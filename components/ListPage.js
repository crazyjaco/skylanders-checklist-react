import React, { Component, PropTypes } from 'react'
import Header from './Header'
import ListCharacters from './ListCharacters'

export default class ListPage extends React.Component {

	render() {
		return(
			<div className="body">
				<Header />
				<ListCharacters path="data/characters.json" />
			</div>
		)
	}
}
