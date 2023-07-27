const spans = document.querySelectorAll("span");
let active = null;

const selctedColor = "hsl(216, 12%, 54%)";
const neutralColor = "hsl(210, 1%, 26%)";

const updateSpanColor = (span, color) => {
  span.style.backgroundColor = color;
};

const selectActive = () => {
  spans.forEach((span, index) => {
    span.addEventListener("click", () => {
      if (active != index) {
        if (active != null) updateSpanColor(spans[active], neutralColor);
        updateSpanColor(span, selctedColor);
        active = index;
      } else {
        updateSpanColor(span, neutralColor);
        active = null;
      }
    });
  });
};

selectActive();
