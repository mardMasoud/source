const btnElms = document.querySelectorAll(".btn");
btnElms.forEach(function (btnElm) {
btnElm.addEventListener("click", function (e) {
    document.documentElement.style.setProperty(
      "--theme-color",
      e.target.dataset.color
    );
  });
});
