const items = document.querySelectorAll(".item");
const drums = document.querySelectorAll(".ball");
items.forEach((item, index) => {
  let angle = (index + 1) * 30;
  setInterval(function () {
    item.style.transform = `translateX(50%) rotate(${angle}deg)`;
    drums.forEach((drum) => {
      drum.style.transform = `rotate(${angle / 7}deg)`;
    });
    angle = angle + 10;
  }, 500);
});
