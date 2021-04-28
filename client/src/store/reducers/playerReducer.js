const playerInitialState = {
    id: null,
    name: "",
    avatarUrl: null,
    score: 0,
    strikes: 0
}

const playerReducer = (state = playerInitialState, action) => {
    let newState = { ...state };
    switch (action.type) {

        case "SET_STRIKES":
            newState.strikes++;
            break;

        case "SET_SCORE":
            newState.score += action.score
            break;
        case "SET_PLAYER":
            newState = { ...action.player }
            break;
        case "SET_FINAL_PLAYER_STATS":

            break;
        default:
            break;
    }
    return newState;
}

export default playerReducer