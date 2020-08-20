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

  function linkChange(linkSelector, dropSelector) {
    document.querySelector(linkSelector).addEventListener(
      "mouseover",
      (event) => {
        if (
          dropSelector !== null &&
          dropSelector !== undefined &&
          dropSelector !== ""
        ) {
          const navDrop = document.querySelector(dropSelector);
          navDrop.style.display = "flex";
        }
        document.querySelector(linkSelector + " > span").style.color = gTBlue;
      },
      false
    );

    document.querySelector(linkSelector).addEventListener(
      "mouseout",
      (event) => {
        if (
          dropSelector !== null &&
          dropSelector !== undefined &&
          dropSelector !== ""
        ) {
          const navDrop = document.querySelector(dropSelector);
          navDrop.style.display = "none";
        }
        if (window.scrollY >= 500) {
          document.querySelector(
            linkSelector + " > span"
          ).style.color = gTLightBlack;
        } else {
          document.querySelector(
            linkSelector + " > span"
          ).style.color = gTWhite;
        }
      },
      false
    );
  }

  function dropChange(dropSelector) {
    document.querySelector(dropSelector).addEventListener(
      "mouseover",
      (event) => {
        const navDrop = document.querySelector(dropSelector);
        navDrop.style.display = "flex";
      },
      false
    );

    document.querySelector(dropSelector).addEventListener(
      "mouseout",
      (event) => {
        const navDrop = document.querySelector(dropSelector);
        navDrop.style.display = "none";
      },
      false
    );
  }

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

  function divDisplayChange(divShowSelector, divNoneSelector) {
    const showClass = document
      .querySelector(divShowSelector)
      .getAttribute("class");
    const noneClass = document
      .querySelector(divNoneSelector)
      .getAttribute("class");
    const newShowClass = showClass.replace("div-none", "div-show");
    const newNoneClass = noneClass.replace("div-show", "div-none");
    document.querySelector(divShowSelector).setAttribute("class", newShowClass);
    document.querySelector(divNoneSelector).setAttribute("class", newNoneClass);
  }

  function imgDisplayGroupShow(groupSelector) {
    const showGroup = document.querySelectorAll(groupSelector);
    for (let element of showGroup) {
      const showClass = element.getAttribute("class");
      const newShowClass = showClass.replace("img-none", "img-show");
      element.setAttribute("class", newShowClass);
    }
  }

  function imgDisplayGroupNone(groupSelector) {
    const noneGroup = document.querySelectorAll(groupSelector);
    for (let element of noneGroup) {
      const noneClass = element.getAttribute("class");
      const newNoneClass = noneClass.replace("img-show", "img-none");
      element.setAttribute("class", newNoneClass);
    }
  }

  function topNavChange() {
    const navBar = document.querySelector("#navigation");
    const navBarSpan = document.querySelectorAll("#nav-links > li > a > span");
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

  function sideNavChange() {
    const sideNavBar = document.querySelector("#side-navigation");
    const sideTopLine = document.querySelector("#side-nav-top-line");
    const sideMainLinkCon = document.querySelectorAll(
      ".side-main-link-container"
    );
    const sideMainLink = document.querySelectorAll(
      ".side-main-link-container span"
    );
    const sideDropLinkCon = document.querySelectorAll(".side-nav-drop > li");
    const sideDropLink = document.querySelectorAll(".side-nav-drop > li span");
    if (window.scrollY >= 500) {
      imageDisplayChange(
        "#side-nav-icon-close > img:nth-child(2)",
        "#side-nav-icon-close > img:nth-child(1)"
      );
      imageDisplayChange(
        "#side-logo-container > img:nth-child(2)",
        "#side-logo-container > img:nth-child(1)"
      );
      imgDisplayGroupShow(".side-link-open > img:nth-child(2)");
      imgDisplayGroupNone(".side-link-open > img:nth-child(1)");
      imgDisplayGroupShow(".side-link-close > img:nth-child(2)");
      imgDisplayGroupNone(".side-link-close > img:nth-child(1)");
      sideNavBar.style.backgroundImage = "none";
      sideNavBar.style.backgroundColor = "#ffffff";
      sideNavBar.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.5)";
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
    } else {
      imageDisplayChange(
        "#side-nav-icon-close > img:nth-child(1)",
        "#side-nav-icon-close > img:nth-child(2)"
      );
      imageDisplayChange(
        "#side-logo-container > img:nth-child(1)",
        "#side-logo-container > img:nth-child(2)"
      );
      imgDisplayGroupShow(".side-link-open > img:nth-child(1)");
      imgDisplayGroupNone(".side-link-open > img:nth-child(2)");
      imgDisplayGroupShow(".side-link-close > img:nth-child(1)");
      imgDisplayGroupNone(".side-link-close > img:nth-child(2)");
      sideNavBar.style.backgroundImage =
        "linear-gradient(142deg,#0a1b2b 2%,#0b2142 45%,#0c2552 64%,#0d2d6f 76%,#0e3693 83%)";
      sideNavBar.style.backgroundColor = "transparent";
      sideNavBar.style.boxShadow = "none";
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
    }
  }

  window.addEventListener(
    "scroll",
    (event) => {
      topNavChange();
      sideNavChange();
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
  linkChange("#nav-links-home");

  // nav-links-solution
  linkChange("#nav-links-solution", "#nav-links-solution-drop");
  dropChange("#nav-links-solution-drop");

  // nav-links-jobs
  linkChange("#nav-links-jobs");

  // nav-links-business
  linkChange("#nav-links-business", "#nav-links-business-drop");
  dropChange("#nav-links-business-drop");

  // nav-links-education
  linkChange("#nav-links-education");

  // nav-links-news
  linkChange("#nav-links-news", "#nav-links-news-drop");
  dropChange("#nav-links-news-drop");

  // nav-links-about-us
  linkChange("#nav-links-about-us", "#nav-links-about-us-drop");
  dropChange("#nav-links-about-us-drop");

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

      navBanner.style.display = "none";
      navBar.style.display = "flex";
      sideNavBar.style.display = "none";

      for (let element of sideNavDrop) {
        element.style.display = "none";
      }
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
        divDisplayChange(
          "#side-solution-button > div:nth-child(1)",
          "#side-solution-button > div:nth-child(2)"
        );
      } else {
        $("#side-nav-links-solution-drop").css("display", "flex");
        sideSolutionShow = true;
        divDisplayChange(
          "#side-solution-button > div:nth-child(2)",
          "#side-solution-button > div:nth-child(1)"
        );
        $("#side-nav-links-business-drop").css("display", "none");
        sideBusinessShow = false;
        divDisplayChange(
          "#side-business-button > div:nth-child(1)",
          "#side-business-button > div:nth-child(2)"
        );
        $("#side-nav-links-news-drop").css("display", "none");
        sideNewsShow = false;
        divDisplayChange(
          "#side-news-button > div:nth-child(1)",
          "#side-news-button > div:nth-child(2)"
        );
        $("#side-nav-links-about-us-drop").css("display", "none");
        sideAboutShow = false;
        divDisplayChange(
          "#side-about-us-button > div:nth-child(1)",
          "#side-about-us-button > div:nth-child(2)"
        );
      }
    },
  });

  // side business
  $("#side-business-button").bind({
    click: (event) => {
      if (sideBusinessShow) {
        $("#side-nav-links-business-drop").css("display", "none");
        sideBusinessShow = false;
        divDisplayChange(
          "#side-business-button > div:nth-child(1)",
          "#side-business-button > div:nth-child(2)"
        );
      } else {
        $("#side-nav-links-solution-drop").css("display", "none");
        sideSolutionShow = false;
        divDisplayChange(
          "#side-solution-button > div:nth-child(1)",
          "#side-solution-button > div:nth-child(2)"
        );
        $("#side-nav-links-business-drop").css("display", "flex");
        sideBusinessShow = true;
        divDisplayChange(
          "#side-business-button > div:nth-child(2)",
          "#side-business-button > div:nth-child(1)"
        );
        $("#side-nav-links-news-drop").css("display", "none");
        sideNewsShow = false;
        divDisplayChange(
          "#side-news-button > div:nth-child(1)",
          "#side-news-button > div:nth-child(2)"
        );
        $("#side-nav-links-about-us-drop").css("display", "none");
        sideAboutShow = false;
        divDisplayChange(
          "#side-about-us-button > div:nth-child(1)",
          "#side-about-us-button > div:nth-child(2)"
        );
      }
    },
  });

  // side news
  $("#side-news-button").bind({
    click: (event) => {
      if (sideNewsShow) {
        $("#side-nav-links-news-drop").css("display", "none");
        sideNewsShow = false;
        divDisplayChange(
          "#side-news-button > div:nth-child(1)",
          "#side-news-button > div:nth-child(2)"
        );
      } else {
        $("#side-nav-links-solution-drop").css("display", "none");
        sideSolutionShow = false;
        divDisplayChange(
          "#side-solution-button > div:nth-child(1)",
          "#side-solution-button > div:nth-child(2)"
        );
        $("#side-nav-links-business-drop").css("display", "none");
        sideBusinessShow = false;
        divDisplayChange(
          "#side-business-button > div:nth-child(1)",
          "#side-business-button > div:nth-child(2)"
        );
        $("#side-nav-links-news-drop").css("display", "flex");
        sideNewsShow = true;
        divDisplayChange(
          "#side-news-button > div:nth-child(2)",
          "#side-news-button > div:nth-child(1)"
        );
        $("#side-nav-links-about-us-drop").css("display", "none");
        sideAboutShow = false;
        divDisplayChange(
          "#side-about-us-button > div:nth-child(1)",
          "#side-about-us-button > div:nth-child(2)"
        );
      }
    },
  });

  // side about us
  $("#side-about-us-button").bind({
    click: (event) => {
      if (sideAboutShow) {
        $("#side-nav-links-about-us-drop").css("display", "none");
        sideAboutShow = false;
        divDisplayChange(
          "#side-about-us-button > div:nth-child(1)",
          "#side-about-us-button > div:nth-child(2)"
        );
      } else {
        $("#side-nav-links-solution-drop").css("display", "none");
        sideSolutionShow = false;
        divDisplayChange(
          "#side-solution-button > div:nth-child(1)",
          "#side-solution-button > div:nth-child(2)"
        );
        $("#side-nav-links-business-drop").css("display", "none");
        sideBusinessShow = false;
        divDisplayChange(
          "#side-business-button > div:nth-child(1)",
          "#side-business-button > div:nth-child(2)"
        );
        $("#side-nav-links-news-drop").css("display", "none");
        sideNewsShow = false;
        divDisplayChange(
          "#side-news-button > div:nth-child(1)",
          "#side-news-button > div:nth-child(2)"
        );
        $("#side-nav-links-about-us-drop").css("display", "flex");
        sideAboutShow = true;
        divDisplayChange(
          "#side-about-us-button > div:nth-child(2)",
          "#side-about-us-button > div:nth-child(1)"
        );
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
