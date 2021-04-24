import axios from 'axios';

const login = async (username = false, avatar = 1) => {
    try {
        const { data: playerStats } = await axios.post('/api/game/new_session', { userName: username, avatar: 1 })


        return {
            type: 'login',
            payload: playerStats
        }
    }
    catch (err) { console.log(err) }
}