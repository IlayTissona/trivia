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

export const setPlayer = (player) => {
  return {
    type: "SET_PLAYER",
    player,
  };
};

export const setFinalPlayerStats = (playerStats) => {
  return {
    type: "SET_FINAL_PLAYER_STATS",
    playerStats,
  };
};
