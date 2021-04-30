import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/userActions";
import MiniLoader from "./MiniLoader"
import axios from "../store/axiosWraper";
import '../styles/Start.css';


function Register() {
    const [images, setImages] = useState();
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

    return (

        <div id="register">
            <form id="register-form">
                <label htmlFor="name" className="label">
                    Email :
          <input type="email" ref={emailRef} name="email" placeholder="Email" />
                </label>
                <label htmlFor="name" className="label">
                    Name :
          <input type="text" ref={nameRef} name="name" placeholder="Name" />
                </label>
                <label htmlFor="password" className="label">
                    Password :
          <input
                        type="password"
                        name="password"
                        ref={passwordRef}
                        placeholder="password"
                    />
                </label>
                <button onClick={singIn}> Sign In </button>
            </form>
            <div id="inputs"></div>

            <div id="avatar-selection">

                {images?.map((image, i) => {
                    return (
                        < img key={i} onClick={chooseAvatar} className="avatar" src={image} onLoadStart={() => <MiniLoader />} />
                    )
                })}
            </div>
        </div>

    );

    async function getAllImages() {
        const images = [];
        const imageCount = await axios.get("/avatar/count");
        console.log("bla");
        for (let i = 1; i < imageCount; i++) {
            images.push(`/avatar/avatar${i}`)
        }
        console.log(images);
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
        // const { email, gamesPlayed, highScore, totalScore } = userStats
        console.log(newUser);
        dispatch(setUser({ id, name, avatarUrl, email: emailInput, gamesPlayed: 0, highScore: 0, totalScore: 0 }));


    }


    function chooseAvatar(e) {
        e.preventDefault();
        const allAvatars = e.target.parentNode.children
        console.log(allAvatars.length);
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