const user = false

const userReducer = (state = user, action) => {
    if (action.type === "SET_USER") return action.user ? { ...action.user } : false
    return state;

}
export default userReducer