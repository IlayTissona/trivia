import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/userActions";
import MiniLoader from "./MiniLoader"
import axios from "../store/axiosWraper";
import '../styles/Register.css';


function Register() {
    const [login, setLogin] = useState(false);
    const [images, setImages] = useState();
    const [error, setError] = useState(false)
    const avatarRef = useRef(4)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
        if (!images) {
            getAllImages()
                .catch(console.log)
        }
    }, [])
    if (user) return <Redirect to={`/Profile/${nameRef.current}`} />
    if (login) return <Redirect to={`/`} />;

    return (
        <>
            <h1 id="landing-page-title">Welcome To Trivia Game</h1>
            <button className="redirect-button" onClick={(e) => {
                e.preventDefault();
                setLogin(true)
            }} >Login</button>
            < form >

                {error ? <div id="error" >{error}</div> : null}
                <label htmlFor="name" className="label">
                    <input type="email" ref={emailRef} name="email" placeholder="Email" />
                </label>
                <label htmlFor="name" className="label">
                    <input type="text" ref={nameRef} name="name" placeholder="Name" />
                </label>
                <label htmlFor="password" className="label">
                    <input
                        type="password"
                        name="password"
                        ref={passwordRef}
                        placeholder="password"
                    />
                </label>
                <div id="avatar-selection">

                    {images?.map((image, i) => {
                        return (
                            < img key={i} onClick={chooseAvatar} className="avatar" src={image} alt="" onLoadStart={() => <MiniLoader />} />
                        )
                    })}
                </div>
                <button onClick={singIn}>Sign Up</button>


            </form>
        </>


    );

    async function getAllImages() {
        const images = [];
        const imageCount = await axios.get("/avatar/count");
        for (let i = 1; i < imageCount; i++) {
            images.push(`/avatar/avatar${i}`)
        }
        setImages(images)
    }

    async function singIn(e) {
        e.preventDefault();
        const nameInput = nameRef.current.value
        const emailInput = emailRef.current.value
        const passwordInput = passwordRef.current.value
        if (!nameInput || !passwordInput || !emailInput) return;
        const newUser = await axios.post("user/register", { name: nameInput, email: emailInput, password: passwordInput, avatarId: avatarRef.current })
        const { id, name, avatarUrl } = newUser;
        if (newUser === "username or email already exists") return setError("username or email already exists")
        if (newUser === "password length must be 6 or longer") return setError("password length must be 6 or longer")
        dispatch(setUser({ id, name, avatarUrl, email: emailInput, gamesPlayed: 0, highScore: 0, totalScore: 0 }));


    }


    function chooseAvatar(e) {
        e.preventDefault();
        const allAvatars = e.target.parentNode.children
        for (let i = 0; i < allAvatars.length; i++) {
            if (allAvatars[i] === e.target) {
                avatarRef.current = i + 1;
                allAvatars[i].className = 'avatar chosen';
            }
            else {
                allAvatars[i].className = 'avatar';
            }
        }
    }
}
export default Register;