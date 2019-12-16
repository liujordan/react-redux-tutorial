import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlayerCard from './PlayerCard'
import './PlayerList.css'
const mapStateToProps = state => {
  return {
    players: state.playersReducer.players,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

class PlayerList extends Component {
  render() {
    return (
    <div className="PlayerList"> 
      {this.props.players.allIds.map((id) => (
        <PlayerCard className="card" id={id} player={this.props.players.byId[id]}></PlayerCard>
      ))}
    </div>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);