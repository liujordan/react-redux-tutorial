import { SET_COLOR, GREY } from '../constants/index.js'
const initialState = {
  players: {
    byId: {
      1: {
        name: "Player 1",
        color: GREY
      },
      2: {
        name: "Player 2",
        color: GREY
      },
      3: {
        name: "Player 3",
        color: GREY
      },
      4: {
        name: "Player 4",
        color: GREY
      },
    },
    allIds: [1, 2, 3, 4],
  },
  usedColors: {}
};
function playersReducer(state = initialState, action) {
  if (action.type === SET_COLOR) {
    // make sure no one else has this color
    if (action.payload.color in state.usedColors) {
      return state;
    }

    // careful not to mutate
    let newPlayer = {...state.players.byId[action.payload.id]};
    let newUsedColors = {...state.usedColors};
    let newState = {...state, usedColors: newUsedColors};

    // update used colors
    delete newUsedColors[newPlayer.color]
    newUsedColors[action.payload.color] = action.payload.color;

    // update player color
    newState.players = {...state.players};
    newState.players.byId[action.payload.id] = newPlayer;
    newPlayer.color = action.payload.color;
    
    return newState
  }

  return state;
};

export default playersReducer;