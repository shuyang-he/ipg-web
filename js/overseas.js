(() => {
  "use strict";

  document.querySelector("#close-business-section").addEventListener(
    "click",
    (event) => {
      document.querySelector("#business").style.display = "none";
    },
    false
  );
})();
