(() => {
  "use strict";

  // function getElementTop(element) {
  //   var actualTop = element.offsetTop;
  //   var current = element.offsetParent;

  //   while (current !== null) {
  //     actualTop += current.offsetTop;
  //     current = current.offsetParent;
  //   }

  //   return actualTop;
  // }

  window.addEventListener(
    "scroll",
    (event) => {
      const root = document.querySelector("#root");
      const naviBar = document.querySelector(".navigation");
      const naviBarSpan = document.querySelectorAll(".nav-links span");
      console.log(document.body.scrollTop);
      if (document.body.scrollTop >= 300) {
        naviBar.style.backgroundColor = "#ffffff";
        naviBar.style.boxShadow = "0 2px 4px 0 var(--black-50)";
        for (let navLink of naviBarSpan) {
          naviLink.style.color = "#505050";
        }
      } else {
        naviBar.style.backgroundColor = "none";
        for (let navLink of naviBarSpan) {
          navLink.style.color = "#ffffff";
        }
      }
    },
    false
  );

  document.querySelector(".close-search-section").addEventListener(
    "click",
    (event) => {
      document.querySelector(".search-section").style.display = "none";
    },
    false
  );
})();
