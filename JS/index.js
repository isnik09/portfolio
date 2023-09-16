(function () {
  let customCursor = document.querySelector(".cursor");

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    customCursor.style.left = x + "px";
    customCursor.style.top = y + "px";
  };

  window.addEventListener("mousemove", editCursor);

  let effects = Array.from(document.querySelectorAll(".effect"));
  console.log(effects);

  effects.forEach((effect) => {
    effect.addEventListener("mouseover", () => {
      customCursor.classList.add("grow");
    });
    effect.addEventListener("mouseleave", () => {
      customCursor.classList.remove("grow");
    });
  });
})();
