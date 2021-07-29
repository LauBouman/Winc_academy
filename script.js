const getBody = document.quearySelector("body");
const getToggle = document.quearySelector("aside");
const getButton = document.quearySelector(".btn-toggle-nav");

//Toggle menu 

const moveToggle = () => {
    getToggle.classList.remove("hidden");
    getToggle.classList.add("visible");
}
getButton.addEventListener("click", moveToggle);


//Background color 

const getRedButton = document.quearySelector(".red-background");
const getOrangeButton = document.quearySelector(".orange-background");
const getYellowButton = document.quearySelector(".yellow-background");
const getGreenButton = document.quearySelector(".green-background");
const getBlueButton = document.quearySelector(".blue-background");
const getPurpleButton = document.quearySelector(".purple-background");


const makeBackgroundRed = () => {
    getBody.classList.add("red-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("yellow-backbround");
    getBody.classList.remove("green-background");
    getBody.classList.remove("blue-background");
    getBody.classList.remove("purple-background");
    getToggle.classList.remove("visible");
    getToggle.classList.add("hidden");
    alert("Im turning red!")
}
getRedButton.addEventListener("click", makeBackgroundRed);

const makeBackgroundOrange = () => {
    getBody.classList.add("orange-background");
    getBody.classList.remove("red-background");
    getBody.classList.remove("yellow-backbround");
    getBody.classList.remove("green-background");
    getBody.classList.remove("blue-background");
    getBody.classList.remove("purple-background");
    getToggle.classList.remove("visible");
    getToggle.classList.add("hidden");
    alert("Im turning orange!")
}
getOrangeButton.addEventListener("click", makeBackgroundOrange);

const makeBackgroundYellow = () => {
    getBody.classList.add("yellow-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("red-backbround");
    getBody.classList.remove("green-background");
    getBody.classList.remove("blue-background");
    getBody.classList.remove("purple-background");
    getToggle.classList.remove("visible");
    getToggle.classList.add("hidden");
    alert("Im turning yellow!")
}
getYellowButton.addEventListener("click", makeBackgroundYellow);

const makeBackgroundGreen = () => {
    getBody.classList.add("green-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("yellow-backbround");
    getBody.classList.remove("red-background");
    getBody.classList.remove("blue-background");
    getBody.classList.remove("purple-background");
    getToggle.classList.remove("visible");
    getToggle.classList.add("hidden");
    alert("Im turning green!")
}
getGreenButton.addEventListener("click", makeBackgroundGreen);

const makeBackgroundBlue = () => {
    getBody.classList.add("blue-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("yellow-backbround");
    getBody.classList.remove("green-background");
    getBody.classList.remove("red-background");
    getBody.classList.remove("purple-background");
    getToggle.classList.remove("visible");
    getToggle.classList.add("hidden");
    alert("Im turning blue!")
}
getBlueButton.addEventListener("click", makeBackgroundBlue);

const makeBackgroundPurple = () => {
    getBody.classList.add("purple-background");
    getBody.classList.remove("orange-background");
    getBody.classList.remove("yellow-backbround");
    getBody.classList.remove("green-background");
    getBody.classList.remove("blue-background");
    getBody.classList.remove("red-background");
    getToggle.classList.remove("visible");
    getToggle.classList.add("hidden");
    alert("Im turning purple!")
}
getPurpleButton.addEventListener("click", makeBackgroundPurple);


