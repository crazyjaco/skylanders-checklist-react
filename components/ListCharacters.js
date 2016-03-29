import React, { Component, PropTypes } from 'react'
import ListCharacterRow from './ListCharacterRow'


export default class ListCharacters extends React.Component {
	constructor(props) {
		super(props)
		this.state = {path: props.path, characters: []}
		jQuery.getJSON('../data/characters.json', function( data ){
			this.setState({characters: data.characters})
			console.log('characters: ', this.state);
		}.bind(this))
	}

	// Sample setter. Probably won't be used in this context.
	// setCharacters(newCharacterList) {
	// 	this.setState({characters: newCharacterList})
	// }

	render() {
		const characters = this.state.characters
		const stat_names = [
			'power',
			'armor',
			'agility',
			'luck',
			'total'
		];
		const games = [
			{
				id: 0,
				name: "Skylanders: Spyro's Adventure",
				logo: "../images/ssa-logo-large.png"
			},		
			{
				id: 0,
				name: "Skylanders: Spyro's Adventure",
				logo: "../images/ssa-logo-large.png"
			},
			{
				id: 1,
				name: "Skylanders: Giants",
				logo: "../images/giants.png"
			},
			{
				id: 2,
				name: "Skylanders: Swap Force",
				logo: "../images/swap-force-logo-large.png"
			},
			{
				id: 3,
				name: "Skylanders: Trap Team",
				logo: "../images/tt-logo.png"
			},
			{
				id: 4,
				name: "Skylanders: Superchargers",
				logo: "../images/superchargers-logo-large.png"
			}			
		];

		const getCharacters = characters.map((character, index) => {
			//console.log('getCharacters: ', character, index)
			return <ListCharacterRow character={character} game={games[character.game]} />
		})

		return(
			<div className="tpl-list">			
				<ul id="character-listing" className="characterList container-fluid" key="masterList">
					{getCharacters}				
				</ul>
			</div>
		)
	}
}