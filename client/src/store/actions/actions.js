export const newSession = (name) => {
  return {
    type: "NEW_SESSION",
    value: name,
  };
};

export const updateScore = (score) => {
  return {
    type: "UPDATE_SCORE",
    value: score,
  };
};

export const strikeUp = () => {
  return {
    type: "STRIKE_UP",
  };
};

export const totalTimeDecrease = () => {
  return {
    type: "TOTAL_TIME_DECREASE",
  };
};

export const question = () => {
  return {
    type: "TOTAL_TIME_DECREASE",
  };
};

export const ageUpAsync = (val) => {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      if (randomSuccess()) {
        dispatch(success());
        dispatch(ageUp(val));
      } else {
        dispatch(failure());
      }
    }, 5000);
  };
};

//----------------------------------HELPERS-------------------

const randomSuccess = () => {
  return Date.now() % 2 === 0;
};
