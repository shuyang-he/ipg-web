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
      const navIcon = document.querySelector("#nav-icon img");
      const navWechat = document.querySelector("#wechat > img");
      const navLinkedIn = document.querySelector("#linkedin > img");
      if (window.scrollY >= 500) {
        navLogo.src = "./images/logo/subpage.svg";
        navIcon.src = "./images/icon/open-menu-black.svg";
        navWechat.src = "./images/icon/weixin.svg";
        navLinkedIn.src = "./images/icon/LINKEDIN.svg";
        navBar.style.backgroundColor = "#ffffff";
        navBar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.5)";
        for (let navLink of navBarSpan) {
          navLink.style.color = "#505050";
        }
      } else {
        navLogo.src = "./images/logo/mainpage.svg";
        navIcon.src = "./images/icon/open-menu-white.svg";
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
      const sideNavBar = document.querySelector("#side-navigation");

      navBanner.style.display = "block";
      navBar.style.display = "none";
      sideNavBar.style.display = "flex";
    },
    false
  );

  document.querySelector("#side-nav-icon-close").addEventListener(
    "click",
    (event) => {
      const navBanner = document.querySelector("#nav-banner");
      const navBar = document.querySelector("#navigation");
      const sideNavBar = document.querySelector("#side-navigation");

      navBanner.style.display = "none";
      navBar.style.display = "flex";
      sideNavBar.style.display = "none";
    },
    false
  );

  document.querySelector("#nav-banner").addEventListener(
    "click",
    (event) => {
      const navBanner = document.querySelector("#nav-banner");
      const navBar = document.querySelector("#navigation");
      const sideNavBar = document.querySelector("#side-navigation");

      navBanner.style.display = "none";
      navBar.style.display = "flex";
      sideNavBar.style.display = "none";
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
