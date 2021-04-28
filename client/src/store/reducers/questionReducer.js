

const initialState = {
    id: null,
    text: null,
    options: [],
    correctAnswer: null,
};

const questionReducer = (state = initialState, action) => {
    if (action.type === "TICK") return state
    let newState = { ...state };

    switch (action.type) {
        case "SET_NEXT_QUESTION":
            newState.text = action.question.text;
            newState.options = action.question.options;
            newState.id = action.question.id;
            break;

        case "SET_ANSWER":
            newState.correctAnswer = action.answer;
            break;

        case "LOADING_ANSWER":
            newState.correctAnswer = "LOADING";
            break;
        default:
            newState = state;
            break;
    }
    return newState;
};

export default questionReducer;
