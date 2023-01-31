const displayMessage = (options) => {
  const { message, status, parentEl } = options;

  const markup = `<h3 class="message ${
    status === "success" ? "success" : "error"
  }">${message}</h3>`;

  parentEl.insertAdjacentHTML("afterbegin", markup);
  setTimeout(() => {
    document.querySelector("message")?.remove();
  }, 2000);
};

export default displayMessage;
