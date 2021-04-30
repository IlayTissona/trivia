const user = false

const userReducer = (state = user, action) => {
    console.log(action.type, action.user)
    if (action.type === "SET_USER") return { ...action.user }
    return state;

}
export default userReducer