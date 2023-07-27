const spans = document.querySelectorAll("span");
let active = spans[0];

const selctedColor = "hsl(216, 12%, 54%)";
const neutralColor = "hsl(210, 1%, 26%)";

active.style.backgroundColor = "hsl(216, 12%, 54%)";

const updateSpanColor = (span, color) => {
  span.style.backgroundColor = color;
};

updateSpanColor(active, selctedColor);

const selectActive = () => {
  spans.forEach((span) => {
    span.addEventListener("click", () => {
      updateSpanColor(active, neutralColor);

      active = span;
      updateSpanColor(active, selctedColor);
    });
  });
};

selectActive();
