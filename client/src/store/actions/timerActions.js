
export const start = () => {
  return {
    type: "START",
  };
};

export const tick = () => {
  return {
    type: "TICK",
  };
};
export const timeUp = (wrongAnswer) => {
  return {
    type: "TIME_UP",
    wrongAnswer
  };
};

export const totalTimeDecrease = () => {
  return {
    type: "TOTAL_TIME_DECREASE",
  };
};



