(() => {
  "use strict";
  let phoneShow = false;
  let messageShow = false;
  let showNavBanner = false;

  window.addEventListener(
    "scroll",
    (event) => {
      const navBar = document.querySelector("#navigation");
      const navBarSpan = document.querySelectorAll("#nav-links span");
      const navLogo = document.querySelector("#main-page");
      const navWechat = document.querySelector("#wechat > img");
      const navLinkedIn = document.querySelector("#linkedin > img");
      if (window.scrollY >= 500) {
        navLogo.src = "./images/logo/subpage.svg";
        navWechat.src = "./images/icon/weixin.svg";
        navLinkedIn.src = "./images/icon/LINKEDIN.svg";
        navBar.style.backgroundColor = "#ffffff";
        navBar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.5)";
        for (let navLink of navBarSpan) {
          navLink.style.color = "#505050";
        }
      } else {
        navLogo.src = "./images/logo/mainpage.svg";
        navWechat.src = "./images/icon/微信icon.svg";
        navLinkedIn.src = "./images/icon/领英icon.svg";
        navBar.style.backgroundColor = "transparent";
        navBar.style.boxShadow = "none";
        for (let navLink of navBarSpan) {
          navLink.style.color = "#ffffff";
        }
      }
    },
    false
  );

  document.querySelector("#nav-icon-open").addEventListener(
    "click",
    (event) => {
      const navBanner = document.querySelector("#nav-banner");
      const navBar = document.querySelector("#navigation");
      const navWrap = document.querySelector("#navigation-wrap");
      const navLogoCon = document.querySelector("#main-page-container");
      const navLinks = document.querySelector("#nav-links");
      const navAddition = document.querySelector("#nav-addition");
      const navIconOpen = document.querySelector("#nav-icon-open");
      const navBarSpan = document.querySelectorAll("#nav-links span");
      const navLogo = document.querySelector("#main-page");
      const navWechat = document.querySelector("#wechat > img");
      const navLinkedIn = document.querySelector("#linkedin > img");

      if (showNavBanner) {
        navBanner.style.display = "none";
        showNavBanner = false;
      } else {
        navBanner.style.display = "block";
        showNavBanner = true;
      }

      navBar.style.width = "300px";
      navBar.style.height = "100%";
      navBar.style.backgroundColor = "#ffffff";
      navBar.style.right = "0px";

      navWrap.style.flexDirection = "column";
      navWrap.style.height = "100%";

      navLogoCon.style.flexBasis = "10%";

      navAddition.style.display = "flex";
      navAddition.style.flexBasis = "10%";

      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.flexBasis = "50%";
      navLinks.style.justifyContent = "space-around";
      navLinks.style.alignItems = "start";

      navIconOpen.style.display = "none";

      navLogo.src = "./images/logo/subpage.svg";

      navWechat.src = "./images/icon/weixin.svg";

      navLinkedIn.src = "./images/icon/LINKEDIN.svg";

      for (let navLink of navBarSpan) {
        navLink.style.color = "#505050";
      }
    },
    false
  );

  document
    .querySelector("#nav-banner")
    .addEventListener("click", (event) => {}, false);

  document.querySelector("#message-board-phone").addEventListener(
    "click",
    (event) => {
      if (phoneShow) {
        document.querySelector(".contact").style.display = "none";
        phoneShow = false;
      } else {
        document.querySelector(".contact").style.display = "block";
        phoneShow = true;
      }
    },
    false
  );

  document.querySelector("#message-board-message").addEventListener(
    "click",
    (event) => {
      if (messageShow) {
        document.querySelector(".message").style.display = "none";
        messageShow = false;
      } else {
        document.querySelector(".message").style.display = "block";
        messageShow = true;
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
