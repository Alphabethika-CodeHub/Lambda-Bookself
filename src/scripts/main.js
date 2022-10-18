import { fetchGoogleApi } from "./common/helpers/fetch_api.js";

console.log("Google API Fetch: ", await fetchGoogleApi);

const formButton = document.getElementById("save_button");
const mainContent = document.getElementById("main_content");
const newParagraph = document.createElement("p");
newParagraph.innerText = "Test JS Plain!"
mainContent.innerHTML = newParagraph;

formButton.addEventListener('click', function() {
    alert("Clicked");
})


const form = document.querySelectorAll("input");
console.log("DOM Input: ", form);