const generateMarkup = (scoresArr) => {
  let scoresMarkup = "";
  scoresArr.forEach((score) => {
    scoresMarkup += `<li class="score-item">${score.user}: ${score.score}</li>`;
  });
  return scoresMarkup;
};

const populateUI = (scores, containerEle) => {
  const markup = generateMarkup(scores);

  containerEle.innerHTML = markup;
};

export default populateUI;
