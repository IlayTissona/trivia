export const setStrikes = (strikes) => {
  return {
    type: "SET_STRIKES",
    strikes,
  };
};

export const setScore = (score) => {
  return {
    type: "SET_SCORE",
    score,
  };
};
