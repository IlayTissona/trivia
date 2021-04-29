import React, { useRef, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPlayer } from "../store/actions/playerActions";
import LeaderBoard from './LeaderBoard';
import axios from "axios";
import '../styles/Start.css';

function Start() {
  const inputRef = useRef();
  const avatarRef = useRef()
  const dispatch = useDispatch();
  const player = useSelector(state => state.player)
  // const imageRef = useRef(false)
  const [images, setImages] = useState()
  useEffect(() => {
    if (!images) {
      getAllImages()
        .catch(console.log)
    }
  }, [])

  const start = (e) => {
    e.preventDefault();
    const userName = inputRef.current.value;
    if (!userName) return;
    axios.post("/new_session", { userName, avatar: 4 }).then(({ data: player }) => {
      dispatch(setPlayer({ ...player }));
    })
      .catch((err) => console.log("error in new_session in Start Component: ", err));
  };


  return (
    (player.id === null) ? (
      <div className="start">
        <h1 id="landing-page-title">Welcome To Trivia Game</h1>
        <form id="start-form">
          <label htmlFor="name" className="label">
            Name :
          <input type="text" name="name" ref={inputRef} placeholder="Name" />
          </label>
          <label htmlFor="password" className="label">
            Password :
          <input
              type="password"
              name="password"
              ref={inputRef}
              placeholder="password"
            />
          </label>


          <button onClick={start}> Start </button>
        </form>
        <div id="avatar-selection">

          {images?.map((image, i) => {
            return (
              < img key={i} onClick={chooseAvatar} className="avatar" src={image} alt={`avatar${i + 1}`} />
            )
          })}
        </div>
        <LeaderBoard />
      </div>

    ) : (
      <Redirect to={`/game`} />
    )
  );
  async function getAllImages() {
    const images = [];
    const { data: imageCount } = await axios.get("/api/avatar/count");
    console.log("bla");
    for (let i = 1; i < imageCount; i++) {
      images.push(`/api/avatar/avatar${i}`)
    }
    console.log(images);
    setImages(images)
  }

  function chooseAvatar(e) {
    e.preventDefault();
    const allAvatars = e.target.parentNode.children
    // const allAvatarsArray = Array.from(allAvatars);
    // for (i of allAvatarsArray) {
    //   // console.log(avatar.classList);
    // }


  }

}

export default Start;
