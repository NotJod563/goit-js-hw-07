const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", (event) => {
    const inputValue = event.target.value.trim();
    nameOutputRef.textContent = inputValue ? inputValue : "Anonymous";
});