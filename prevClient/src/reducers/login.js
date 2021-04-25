import axios from 'axios'

const login = (state = 0, action){
    if (action !== 'login') {
        return;
    }
    try {
        const { data: playerStats } = await axios.post('/api/game/new_session', { userName: playerName, avatar: 1 })
        console.log(playerStats);
        setShouldStart(true)
    }
    catch (err) { console.log(err) }

}