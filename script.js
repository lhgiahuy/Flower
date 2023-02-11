
for (let i = 0; i < 10; i++) {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  document.querySelector(".container").appendChild(flower);
}
const flowerArray = document.getElementsByClassName(".flower");
console.log(flowerArray);
for (let j = 0; j < 10; j++) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  const flowerArray = document.getElementsByClassName(".flower");
  for (let i = 0; i < 10; i++) {
    flowerArray[i].appendChild(dot);
  }
}


