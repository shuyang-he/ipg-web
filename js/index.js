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

  function imageDisplayChange(imgShowSelector, imgNoneSelector) {
    const showClass = document
      .querySelector(imgShowSelector)
      .getAttribute("class");
    const noneClass = document
      .querySelector(imgNoneSelector)
      .getAttribute("class");
    const newShowClass = showClass.replace("img-none", "img-show");
    const newNoneClass = noneClass.replace("img-show", "img-none");
    document.querySelector(imgShowSelector).setAttribute("class", newShowClass);
    document.querySelector(imgNoneSelector).setAttribute("class", newNoneClass);
  }

  function topNavChange() {
    const navBar = document.querySelector("#navigation");
    const navBarSpan = document.querySelectorAll("#nav-links > li > a");
    if (window.scrollY >= 500) {
      imageDisplayChange(
        "#main-page-container > img:nth-child(2)",
        "#main-page-container > img:nth-child(1)"
      );
      imageDisplayChange(
        "#nav-icon-open > img:nth-child(2)",
        "#nav-icon-open > img:nth-child(1)"
      );
      imageDisplayChange(
        "#wechat > img:nth-child(2)",
        "#wechat > img:nth-child(1)"
      );
      imageDisplayChange(
        "#linkedin > img:nth-child(2)",
        "#linkedin > img:nth-child(1)"
      );
      navBar.style.backgroundColor = "#ffffff";
      navBar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.5)";
      for (let navLink of navBarSpan) {
        navLink.style.color = gTLightBlack;
      }
    } else {
      imageDisplayChange(
        "#main-page-container > img:nth-child(1)",
        "#main-page-container > img:nth-child(2)"
      );
      imageDisplayChange(
        "#nav-icon-open > img:nth-child(1)",
        "#nav-icon-open > img:nth-child(2)"
      );
      imageDisplayChange(
        "#wechat > img:nth-child(1)",
        "#wechat > img:nth-child(2)"
      );
      imageDisplayChange(
        "#linkedin > img:nth-child(1)",
        "#linkedin > img:nth-child(2)"
      );
      navBar.style.backgroundColor = "transparent";
      navBar.style.boxShadow = "none";
      for (let navLink of navBarSpan) {
        navLink.style.color = gTWhite;
      }
    }
  }

  window.addEventListener(
    "scroll",
    (event) => {
      topNavChange();
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

  // top navigation drop
  $("#nav-links > li").hover(
    function () {
      $(this).find(".nav-drop").slideDown();
    },
    function () {
      $(this).find(".nav-drop").slideUp();
    }
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

  // side navigation first menu
  // $("#nav-icon-open").click(function () {
  //   $(this).find(".point").toggleClass("active");
  //   $(".xialaph").slideToggle();
  //   $(".phonemeng").toggleClass("active");
  // });

  // side navigation second menu
  $(".side-main-link-container").click(function () {
    $(this).siblings(".side-nav-drop").slideToggle();
    $(this).parent().siblings().find(".side-nav-drop").slideUp();
    $(this).toggleClass("active");
    $(this)
      .parent()
      .siblings()
      .find(".side-main-link-container")
      .removeClass("active");
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
})();
