const spans = document.querySelectorAll("span");

console.log("span", spans[1]);

let active = spans[0];

active.style.backgroundColor = "hsl(216, 12%, 54%)";

const selectActive = () => {
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      active.style.backgroundColor = "hsl(210, 1%, 26%)";
      active = span;
      active.style.backgroundColor = "hsl(216, 12%, 54%)";
    });
  });
};

selectActive();
