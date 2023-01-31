import getData, { postData } from "./utils/api.js";
import populateUI from "./utils/populateUI.js";

const refreshBtn = document.querySelector(".reset-button");
const scoresContainer = document.querySelector(".scores-list");
const form = document.querySelector(".form");

const actions = () => {
  refreshBtn.addEventListener("click", async () => {
    const { result } = await getData();

    populateUI(result, scoresContainer);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const score = e.target.score.value;

    if (!name.trim() || !score) return;

    postData({
      user: name,
      score: +score,
    });

    // Empty inputs
    e.target.name.value = "";
    e.target.score.value = "";
  });
};

export default actions;
