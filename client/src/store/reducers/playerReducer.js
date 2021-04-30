const playerInitialState = {
  id: null,
  name: "",
  avatarUrl: null,
  score: 0,
  strikes: 0,
};

// = playerInitialState

const playerReducer = (state = null, action) => {
  if (action.type === "TICK") return state;
  let newState = { ...state };
  console.log("player reducer", action);
  switch (action.type) {
    case "SET_STRIKES":
      newState.strikes++;
      break;

    case "SET_SCORE":
      newState.score = action.score;
      break;
    case "SET_PLAYER":
      newState = { ...action.player };
      break;
    case "SET_FINAL_PLAYER_STATS":
      break;
    default:
      newState = state;
      break;
  }
  return newState;
};

export default playerReducer;
