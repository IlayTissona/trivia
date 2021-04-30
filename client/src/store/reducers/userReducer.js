const user = false

const userReducer = (state = user, action) => {
    if (action.type === "SET_USER") return { ...action.user }
    return state;

}
export default userReducer