(() => {
  "use strict";
  const gTWhite = "#ffffff";
  const gTDarkBlack = "#1d1d1f";
  const gTLightBlack = "#505050";
  const gTBlue = "#4272d7";
  let phoneShow = false;
  let messageShow = false;
  let sideSolutionShow = false;
  let sideBusinessShow = false;
  let sideNewsShow = false;
  let sideAboutShow = false;

  window.addEventListener(
    "scroll",
    (event) => {
      // top navigation
      const navBar = document.querySelector("#navigation");
      const navBarSpan = document.querySelectorAll(
        "#nav-links > li > a > span"
      );
      const navLogo = document.querySelector("#main-page");
      const navIcon = document.querySelector("#nav-icon-open > img");
      const navWechat = document.querySelector("#wechat > img");
      const navLinkedIn = document.querySelector("#linkedin > img");

      // side navigation
      const sideNavBar = document.querySelector("#side-navigation");
      const sideLogo = document.querySelector("#side-logo-container > img");
      const sideNavClose = document.querySelector("#side-nav-icon-close > img");
      const sideTopLine = document.querySelector("#side-nav-top-line");
      const sideMainLinkCon = document.querySelectorAll(
        ".side-main-link-container"
      );
      const sideMainLink = document.querySelectorAll(
        ".side-main-link-container span"
      );
      const sideDropLinkCon = document.querySelectorAll(".side-nav-drop > li");
      const sideDropLink = document.querySelectorAll(
        ".side-nav-drop > li span"
      );
      if (window.scrollY >= 500) {
        // top navigation
        navLogo.src = "./images/logo/subpage.svg";
        navIcon.src = "./images/icon/menu-black.svg";
        navWechat.src = "./images/icon/weixin.svg";
        navLinkedIn.src = "./images/icon/LINKEDIN.svg";
        navBar.style.backgroundColor = "#ffffff";
        navBar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.5)";
        for (let navLink of navBarSpan) {
          navLink.style.color = gTLightBlack;
        }

        // side navigation
        sideNavBar.style.backgroundImage = "none";
        sideNavBar.style.backgroundColor = "#ffffff";
        sideNavBar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.5)";
        sideLogo.src = "./images/logo/subpage.svg";
        sideNavClose.src = "./images/icon/关闭-black.svg";
        sideTopLine.style.borderTop = "#505050 solid 1px";
        for (let element of sideMainLinkCon) {
          element.style.borderBottom = "#505050 solid 1px";
        }
        for (let element of sideMainLink) {
          element.style.color = gTLightBlack;
        }
        for (let element of sideDropLinkCon) {
          element.style.borderBottom = "#505050 solid 1px";
        }
        for (let element of sideDropLink) {
          element.style.color = gTLightBlack;
        }
        if (sideSolutionShow) {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        }
        if (sideBusinessShow) {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        }
        if (sideNewsShow) {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        }
        if (sideAboutShow) {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        }
      } else {
        // top navigation
        navLogo.src = "./images/logo/mainpage.svg";
        navIcon.src = "./images/icon/menu-white.svg";
        navWechat.src = "./images/icon/微信icon.svg";
        navLinkedIn.src = "./images/icon/领英icon.svg";
        navBar.style.backgroundColor = "transparent";
        navBar.style.boxShadow = "none";
        for (let navLink of navBarSpan) {
          navLink.style.color = gTWhite;
        }

        // side navigation
        sideNavBar.style.backgroundImage =
          "linear-gradient(142deg,#0a1b2b 2%,#0b2142 45%,#0c2552 64%,#0d2d6f 76%,#0e3693 83%)";
        sideNavBar.style.backgroundColor = "transparent";
        sideNavBar.style.boxShadow = "none";
        sideLogo.src = "./images/logo/mainpage.svg";
        sideNavClose.src = "./images/icon/关闭-white.svg";
        sideTopLine.style.borderTop = "#ffffff solid 1px";
        for (let element of sideMainLinkCon) {
          element.style.borderBottom = "#ffffff solid 1px";
        }
        for (let element of sideMainLink) {
          element.style.color = gTWhite;
        }
        for (let element of sideDropLinkCon) {
          element.style.borderBottom = "#ffffff solid 1px";
        }
        for (let element of sideDropLink) {
          element.style.color = gTWhite;
        }
        if (sideSolutionShow) {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        } else {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
        if (sideBusinessShow) {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        } else {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
        if (sideNewsShow) {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        } else {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
        if (sideAboutShow) {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        } else {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
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
      document.querySelector("#nav-links-home > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-home").addEventListener(
    "mouseout",
    (event) => {
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
      document.querySelector("#nav-links-jobs > span").style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-jobs").addEventListener(
    "mouseout",
    (event) => {
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
      document.querySelector(
        "#nav-links-education > span"
      ).style.color = gTBlue;
    },
    false
  );

  document.querySelector("#nav-links-education").addEventListener(
    "mouseout",
    (event) => {
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
      const sideNavDrop = document.querySelectorAll(".side-nav-drop");
      const sideLinkButton = document.querySelectorAll(
        ".side-link-button > img"
      );

      navBanner.style.display = "none";
      navBar.style.display = "flex";
      sideNavBar.style.display = "none";

      for (let element of sideNavDrop) {
        element.style.display = "none";
      }
      for (let element of sideLinkButton) {
        if (window.scrollY >= 500) {
          element.src = "./images/icon/展开-black.svg";
        } else {
          element.src = "./images/icon/展开-white.svg";
        }
      }
      sideSolutionShow = false;
      sideBusinessShow = false;
      sideJobsShow = false;
      sideAboutShow = false;
    },
    false
  );

  // side navigation
  // side solution
  $("#side-solution-button").bind({
    click: (event) => {
      if (sideSolutionShow) {
        $("#side-nav-links-solution-drop").css("display", "none");
        sideSolutionShow = false;
        if (window.scrollY >= 500) {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        } else {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
      } else {
        $("#side-nav-links-solution-drop").css("display", "flex");
        sideSolutionShow = true;
        if (window.scrollY >= 500) {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-solution-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        }
      }
    },
  });

  // side business
  $("#side-business-button").bind({
    click: (event) => {
      if (sideBusinessShow) {
        $("#side-nav-links-business-drop").css("display", "none");
        sideBusinessShow = false;
        if (window.scrollY >= 500) {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        } else {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
      } else {
        $("#side-nav-links-business-drop").css("display", "flex");
        sideBusinessShow = true;
        if (window.scrollY >= 500) {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-business-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        }
      }
    },
  });

  // side news
  $("#side-news-button").bind({
    click: (event) => {
      if (sideNewsShow) {
        $("#side-nav-links-news-drop").css("display", "none");
        sideNewsShow = false;
        if (window.scrollY >= 500) {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        } else {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
      } else {
        $("#side-nav-links-news-drop").css("display", "flex");
        sideNewsShow = true;
        if (window.scrollY >= 500) {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-news-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        }
      }
    },
  });

  // side about us
  $("#side-about-us-button").bind({
    click: (event) => {
      if (sideAboutShow) {
        $("#side-nav-links-about-us-drop").css("display", "none");
        sideAboutShow = false;
        if (window.scrollY >= 500) {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/展开-black.svg"
          );
        } else {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/展开-white.svg"
          );
        }
      } else {
        $("#side-nav-links-about-us-drop").css("display", "flex");
        sideAboutShow = true;
        if (window.scrollY >= 500) {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/收起-black.svg"
          );
        } else {
          $("#side-about-us-button > img").attr(
            "src",
            "./images/icon/收起-white.svg"
          );
        }
      }
    },
  });

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
