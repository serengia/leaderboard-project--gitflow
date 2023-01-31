import "./style.css";
import actions from "./actions.js";
import getData from "./utils/api.js";
import populateUI from "./utils/populateUI.js";

const scoresContainer = document.querySelector(".scores-list");

actions();

// Populate ui on page load

const updateUIonPageLoad = async () => {
  const { result } = await getData();
  populateUI(result, scoresContainer);
};

updateUIonPageLoad();
