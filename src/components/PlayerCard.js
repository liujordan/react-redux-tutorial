import React, { Component } from 'react';
import {Provider, connect} from 'react-redux';
import { setColor } from '../js/actions/index';
import {BLUE, GREY, RAINBOW} from '../js/constants/index';
import './PlayerCard.css';

const mapStateToProps = (state, props) => {
  return {
    player: state.playersReducer.players.byId[props.id],
    usedColors: state.playersReducer.usedColors
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (id, color) => {
      dispatch(setColor(id, color))
    }
  }
}

class PlayerCard extends Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.player.color}} className="PlayerCard">
        <div>{this.props.player.name}</div>
        <select onChange={(e) => {this.props.setColor(this.props.id, e.target.value)}}>
          <option value={GREY}>Choose a color</option>
          {Object.entries(RAINBOW).map((thing) => {
            const key = thing[0]
            const val = thing[1]
            return <option value={val} disabled={(val in this.props.usedColors)}>{key}</option>
          })}
        </select>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerCard);