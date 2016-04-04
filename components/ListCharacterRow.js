import React, { Component, PropTypes } from 'react'


export default class ListCharacterRow extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { character, game } = this.props
		const charFullName = character.nameHonorific ? character.nameHonorific + ' ' + character.nameBase : character.nameBase
		const charElement = character.element
		const charID = character.id
		return(
			<li className="character-row row" key={ charID }>
				<a href={'#/characters/' + charID } className="character-container">
					<span className="col-xs-3 list-item-element" ng-click="selectListItem($index); $event.stopPropagation()">
						<div className={ charElement + '-icon'}></div>
					</span>
					<span className="game-logo col-xs-2"><img src={ game.logo } /></span>
					<span className="id col-xs-4">{ charFullName }</span>
					<div className="toy-image-thumb col-xs-3"><img src={ '../images/toys/' + charID + '.png' } /></div>
				</a>
			</li>

				// <li ng-repeat="skylander in skylandersRaw.characters | filter:{ id: search }" class="row" ng-click="navigateTo({{skylander.id}}, $index); $event.stopPropagation()">
				// 	<div class="character-container">
				// 		<span class="col-xs-3 list-item-element" ng-click="selectListItem($index); $event.stopPropagation()">
				// 			<div class="{{ skylander.element }}-icon"></div>
				// 		</span>
				// 		<a href="#/characters/{{ skylander.id }}">
				// 			<span class="game-logo col-xs-2"><img ng-src="{{ games[skylander.game].logo }}"></span>
				// 			<span class="id col-xs-4">{{skylander.nameHonorific + ' ' + skylander.nameBase }}</span>
				// 			<!-- <span class="toy-image"><img src="http://skylanders.com/content/dam/atvi/skylanders/base/characters-v2/toy/{{ skylander.id }}.png"></span> -->
				// 			<div class="toy-image-thumb col-xs-3"><img ng-src="images/toys/{{ skylander.id }}.png"></span>
				// 			<!--<span class="tag-line">{{skylander.tagline}}</span>-->
				// 		</a>
				// 	</div>
				// </li>			
		)
	}
}