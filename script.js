const colors = ["green", "red", "rgba(133,122,200)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    // get random number between 0 and 2
    const random_number = getRandomNumber();
    console.log(getRandomNumber)
    document.body.style.backgroundColor = colors[random_number];
    color.textContent = colors[random_number];
});

function getRandomNumber(){
    return Math.floor(Math.random()*3);
}