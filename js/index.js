(() => {
  "use strict";
  const gTWhite = "#ffffff";
  const gTDarkBlack = "#1d1d1f";
  const gTLightBlack = "#505050";
  const gTBlue = "#4272d7";
  let phoneShow = false;
  let messageShow = false;

  window.addEventListener(
    "scroll",
    (event) => {
      const navBar = document.querySelector("#navigation");
      const navBarSpan = document.querySelectorAll(
        "#nav-links > li > a > span"
      );
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

  const topSwiper = new Swiper(".swiper-container", {
    direction: "horizontal",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // nav-links-home
  document.querySelector("#nav-links-home").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-home-drop");
      navDrop.style.display = "flex";
      document.querySelector("#nav-links-home > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-home").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-home-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-home > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector("#nav-links-home > span").style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-home-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-home-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-home-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-home-drop");
      navDrop.style.display = "none";
    },
    false
  );

  // nav-links-solution
  document.querySelector("#nav-links-solution").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-solution-drop");
      navDrop.style.display = "flex";
      document.querySelector("#nav-links-solution > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-solution").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-solution-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-solution > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector(
          "#nav-links-solution > span"
        ).style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-solution-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-solution-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-solution-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-solution-drop");
      navDrop.style.display = "none";
    },
    false
  );

  // nav-links-jobs
  document.querySelector("#nav-links-jobs").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-jobs-drop");
      navDrop.style.display = "flex";
      document.querySelector("#nav-links-jobs > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-jobs").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-jobs-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-jobs > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector("#nav-links-jobs > span").style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-jobs-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-jobs-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-jobs-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-jobs-drop");
      navDrop.style.display = "none";
    },
    false
  );

  // nav-links-business
  document.querySelector("#nav-links-business").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-business-drop");
      navDrop.style.display = "flex";
      document.querySelector("#nav-links-business > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-business").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-business-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-business > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector(
          "#nav-links-business > span"
        ).style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-business-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-business-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-business-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-business-drop");
      navDrop.style.display = "none";
    },
    false
  );

  // nav-links-education
  document.querySelector("#nav-links-education").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-education-drop");
      navDrop.style.display = "flex";
      document.querySelector(
        "#nav-links-education > span"
      ).style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-education").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-education-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-education > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector(
          "#nav-links-education > span"
        ).style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-education-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-education-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-education-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-education-drop");
      navDrop.style.display = "none";
    },
    false
  );

  // nav-links-news
  document.querySelector("#nav-links-news").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-news-drop");
      navDrop.style.display = "flex";
      document.querySelector("#nav-links-news > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-news").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-news-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-news > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector("#nav-links-news > span").style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-news-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-news-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-news-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-news-drop");
      navDrop.style.display = "none";
    },
    false
  );

  // nav-links-about-us
  document.querySelector("#nav-links-about-us").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-about-us-drop");
      navDrop.style.display = "flex";
      document.querySelector("#nav-links-about-us > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-about-us").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-about-us-drop");
      navDrop.style.display = "none";
      if (window.scrollY >= 500) {
        document.querySelector(
          "#nav-links-about-us > span"
        ).style.color = gTLightBlack;
      } else {
        document.querySelector(
          "#nav-links-about-us > span"
        ).style.color = gTWhite;
      }
    },
    false
  );

  document.querySelector("#nav-links-about-us-drop").addEventListener(
    "mouseover",
    (event) => {
      const navDrop = document.querySelector("#nav-links-about-us-drop");
      navDrop.style.display = "flex";
    },
    false
  );

  document.querySelector("#nav-links-about-us-drop").addEventListener(
    "mouseout",
    (event) => {
      const navDrop = document.querySelector("#nav-links-about-us-drop");
      navDrop.style.display = "none";
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
        document.querySelector("#contact").style.display = "none";
        phoneShow = false;
      } else {
        document.querySelector("#contact").style.display = "flex";
        phoneShow = true;
        document.querySelector("#message").style.display = "none";
        messageShow = false;
      }
    },
    false
  );

  document.querySelector("#message-board-message").addEventListener(
    "click",
    (event) => {
      if (messageShow) {
        document.querySelector("#message").style.display = "none";
        messageShow = false;
      } else {
        document.querySelector("#message").style.display = "flex";
        messageShow = true;
        document.querySelector("#contact").style.display = "none";
        phoneShow = false;
      }
    },
    false
  );

  document.querySelector("#close-search-section").addEventListener(
    "click",
    (event) => {
      document.querySelector("#search-section").style.display = "none";
    },
    false
  );

  $("#top-board-link").bind({
    mouseover: (event) => {
      $("#top-board-link > p").css("color", gTBlue);
    },
    mouseout: (event) => {
      $("#top-board-link > p").css("color", gTWhite);
    },
  });
})();
