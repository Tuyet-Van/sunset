function backToTop() {
  let toTop = document.querySelector(".backtop");
  window.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;
    function percentBorder() {
      let percentval = Math.floor(
        (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
      );
      toTop.style.background = `conic-gradient(#B68C2D ${percentval}%, rgba(255, 255, 255,0) ${percentval}%)`;
    }
    let slide = document.querySelector(".slider");
    if (document.contains(slide) == true) {
      let heightSlider = slide.offsetHeight;
      percentBorder();
      if (scrollY >= heightSlider) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }
    }
    let pageheader = document.querySelector(".pageheader");
    if (document.contains(pageheader) == true) {
      let heightPageheader = pageheader.offsetHeight;
      percentBorder();
      if (scrollY >= heightPageheader) {
        toTop.classList.add("active");
      } else {
        toTop.classList.remove("active");
      }
    }
  });
  toTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//-------------------------------------------------------------------------------------------
// Scroll change background header
function changeBGHeaderOnScroll() {
  let header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    let scrollY = window.pageYOffset;
    if (scrollY >= header.offsetHeight) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
}

//-------------------------------------------------------------------------------------------
//subMenu
function subMenu() {
  let subMenu = document.querySelector(".submenu");
  let hassubmenu = document.querySelector(".hassubmenu > a");
  let arrowdown = document.querySelector(".hassubmenu .arrowdown");
  function checkSubmenu() {
    let hasActive = subMenu.classList.contains("active");
    if (hasActive == true) {
      arrowdown.classList.add("active");
    } else {
      arrowdown.classList.remove("active");
    }
  }
  hassubmenu.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    subMenu.classList.toggle("active");
    checkSubmenu();
    if (window.innerWidth <= 1246) {
      if (subMenu.style.maxHeight) {
        subMenu.style.maxHeight = null;
      } else {
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  document.addEventListener("click", function () {
    subMenu.classList.remove("active");
    checkSubmenu();
    if (window.innerWidth <= 1246) {
      subMenu.style.maxHeight = null;
    }
  });
}

//-------------------------------------------------------------------------------------------
function nav() {
  let menu = document.querySelector(".menu"),
    btnmenus = document.querySelectorAll(".btnmenu"),
    overlay = document.querySelector(".overlay"),
    nav = document.querySelector("nav");
  function hideNav() {
    overlay.classList.remove("active");
    nav.classList.remove("active");
    btnmenus.forEach(function (value) {
      value.classList.replace("--on", "--off");
    });
    document.body.style.overflow = "initial";
  }
  function showNav() {
    overlay.classList.add("active");
    nav.classList.add("active");
    btnmenus.forEach(function (value) {
      value.classList.replace("--off", "--on");
    });
    document.body.style.overflow = "hidden";
  }
  btnmenus.forEach(function (value) {
    value.addEventListener("click", function () {
      let hasClassOff = value.classList.contains("--off");
      if (hasClassOff == true) {
        showNav();
      } else {
        hideNav();
      }
    });
  });
  overlay.addEventListener("click", function () {
    hideNav();
  });
  window.addEventListener("resize", function () {
    let wWindow = window.innerWidth;
    if (wWindow > 1202) {
      hideNav();
    }
  });
  function moveDiv() {
    let btnorder = document.querySelector(".right .btn-order"),
      right = document.querySelector(".right");
    let menuList = document.querySelector(".menu__list");
    if (window.innerWidth <= 575) {
      menuList.appendChild(btnorder);
    } else {
      right.appendChild(btnorder);
    }
    window.addEventListener("resize", function () {
      if (window.innerWidth <= 575) {
        menuList.appendChild(btnorder);
      } else {
        right.appendChild(btnorder);
      }
    });
  }
  moveDiv();
}

//-------------------------------------------------------------------------------------------
//Slider Hero
function handleSliderHero() {
  var slider = document.querySelector(".slider__img");
  if (document.contains(slider) == true) {
    var flktySlider = new Flickity(slider, {
      cellAlign: "left",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: 6000,
      pauseAutoPlayOnHover: false,
      fade: true,
      imagesLoaded: true,
    });
    let btnPrev = document.querySelector(".btncontrol.--prev");
    let btnNext = document.querySelector(".btncontrol.--next");
    btnPrev.addEventListener("click", function () {
      flktySlider.previous(true);
    });
    btnNext.addEventListener("click", function () {
      flktySlider.next(true);
    });
  }
}

//-------------------------------------------------------------------------------------------

//News slider
function handleSliderNews() {
  var newsslider = document.querySelector(".news__list");
  if (document.contains(newsslider) == true) {
    o = {
      cellAlign: "left",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: 3000,
      pauseAutoPlayOnHover: false,
      imagesLoaded: true,
    };
    var flkty = new Flickity(newsslider, o);
    window.addEventListener("resize", function () {
      flkty.destroy();
      flkty = new Flickity(newsslider, o);
    });
  }
}

//-------------------------------------------------------------------------------------------

//logo list
function handleLogoList() {
  var logolist = document.querySelector(".sclogo__list");
  if (document.contains(logolist) == true) {
    k = {
      cellAlign: "center",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: 3000,
      pauseAutoPlayOnHover: false,
      imagesLoaded: true,
      lazyLoad: 3,
    };
    var flktyLogo = new Flickity(logolist, k);
    window.addEventListener("resize", function () {
      flktyLogo.destroy();
      flktyLogo = new Flickity(logolist, k);
    });
  }
}

//-------------------------------------------------------------------------------------------

//Testimonial
function handTestimonial() {
  var teslist = document.querySelector(".tes__content");
  if (document.contains(teslist) == true) {
    i = {
      cellAlign: "left",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: false,
      pauseAutoPlayOnHover: false,
      imagesLoaded: true,
    };
    var flktyTes = new Flickity(teslist, i);
    let tesPrev = document.querySelector(".btn-tes.--prev");
    let tesNext = document.querySelector(".btn-tes.--next");
    tesPrev.addEventListener("click", function () {
      flktyTes.previous(true);
    });
    tesNext.addEventListener("click", function () {
      flktyTes.next(true);
    });
    window.addEventListener("resize", function () {
      flktyTes.destroy();
      flktyTes = new Flickity(teslist, i);
    });
  }
}

//-------------------------------------------------------------------------------------------
function countNumber() {
  let countexist = document.querySelector(".count-item");
  if (document.contains(countexist) == true) {
    function countUp() {
      let number = document.querySelectorAll(".count-item .number");
      number.forEach(function (value) {
        let start = 0;
        let end = parseInt(value.innerHTML);
        value.innerHTML = start;
        let counter = setInterval(function () {
          let increment = end / 200;
          start = Math.ceil(start + increment);
          value.innerHTML = start;
          if (start >= end) {
            clearInterval(counter);
            value.innerHTML = end;
          }
        }, 10);
      });
    }
    let a = 0;
    window.addEventListener("scroll", function (e) {
      let heightHeader = document.querySelector("header").offsetHeight,
        positionScroll = window.pageYOffset;
      let els = document.querySelector(".count-item"),
        parent = document.querySelector(".parent"),
        topEls = els.offsetTop + parent.offsetTop,
        bottomEls = topEls + els.offsetHeight - heightHeader;
      let positionViewTop = bottomEls - this.window.innerHeight;
      if (
        positionScroll > positionViewTop &&
        positionScroll < bottomEls &&
        a == 0
      ) {
        a = 1;
        countUp();
      }
    });
  }
}

//-------------------------------------------------------------------------------------------
//Animate when scroll to element
function animateScroll() {
  let priceItems = document.querySelectorAll(
      ".pricelist .pricelist__opt .pricelist__opt-item"
    ),
    priceOptions = document.querySelector(".pricelist .pricelist__opt"),
    priceList = document.querySelector(".pricelist"),
    priceLogo = document.querySelector(
      ".pricelist .pricelist__opt .pricelist__opt-item .pricelogo"
    );
  if (document.contains(priceList) == true) {
    window.addEventListener("scroll", function () {
      let heightHeader = document.querySelector("header").offsetHeight,
        positionScroll = window.pageYOffset;
      let topPriceOptions = priceOptions.offsetTop + priceList.offsetTop,
        bottomPriceOptions = topPriceOptions + priceOptions.offsetHeight;
      let positionTop = topPriceOptions - window.innerHeight;
      if (
        positionScroll > positionTop &&
        positionScroll < bottomPriceOptions - heightHeader
      ) {
        priceItems.forEach(function (value) {
          value.classList.add("active");
        });
        priceLogo.classList.add("active");
      }
    });
  }
}

//-------------------------------------------------------------------------------------------

//Modal Video
function handleModalVideo() {
  let modalVideo = document.querySelector(".popupvideo");
  if (document.contains(modalVideo) == true) {
    let btnvideo = document.querySelector(".video__btn"),
      iframeModalVideo = document.querySelector(
        ".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"
      ),
      btnClose = document.querySelector(
        ".popupvideo .popupvideo__inner .popupvideo__inner-iframe .iconclose"
      );
    btnvideo.addEventListener("click", function () {
      modalVideo.classList.add("active");
      let dataID = iframeModalVideo.getAttribute("data-src");
      iframeModalVideo.setAttribute(
        "src",
        "https://www.youtube.com/embed/" + dataID + "?autoplay=1"
      );
    });
    function closeModal() {
      modalVideo.classList.remove("active");
    }
    btnClose.addEventListener("click", function () {
      closeModal();
      iframeModalVideo.setAttribute("src", "");
    });
    modalVideo.addEventListener("click", function () {
      closeModal();
      iframeModalVideo.setAttribute("src", "");
    });
  }
}

//-------------------------------------------------------------------------------------------
//Set default input type Date
function setDefaultInputDate() {
  let myday = document.getElementById("day");
  if (document.contains(myday) == true) {
    myday.value = formatDate();
    function padTo2Digits(num) {
      return num.toString().padStart(2, "0");
    }
    function formatDate(date = new Date()) {
      return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join("-");
    }
  }
}

//-------------------------------------------------------------------------------------------
function handleSliderGal() {
  let prgallery = document.querySelector(".prgallery .prgallery__list");
  if (document.contains(prgallery) == true) {
    var flktyPr = new Flickity(prgallery, {
      // options
      cellAlign: "center",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: 3000,
      pauseAutoPlayOnHover: false,
      imagesLoaded: true,
      on: {
        select: function (index) {
          let dot = document.querySelector(".prgallery .prgallery__dot ");
          let dotselect = document.querySelector(
            ".prgallery .prgallery__dot  .prgallery__dot-select"
          );
          let slides = document.querySelectorAll(
            ".prgallery .prgallery__list  .prgallery__list-item"
          );
          dotselect.style.width = dot.offsetWidth / slides.length + "px";
          dotselect.style.transform =
            "translate( " + index * dotselect.offsetWidth + "px, -50%)";
        },
      },
    });
    window.addEventListener("resize", function () {
      flktyPr.destroy();
      flktyPr = new Flickity(prgallery, {
        cellAlign: "center",
        contain: true,
        draggable: ">1",
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false,
        autoPlay: 3000,
        pauseAutoPlayOnHover: false,
        imagesLoaded: true,
        on: {
          select: function (index) {
            let dot = document.querySelector(".prgallery .prgallery__dot ");
            let dotselect = document.querySelector(
              ".prgallery .prgallery__dot  .prgallery__dot-select"
            );
            let slides = document.querySelectorAll(
              ".prgallery .prgallery__list  .prgallery__list-item"
            );
            dotselect.style.width = dot.offsetWidth / slides.length + "px";
            dotselect.style.transform =
              "translate( " + index * dotselect.offsetWidth + "px, -50%)";
          },
        },
      });
    });
  }
}

//-------------------------------------------------------------------------------------------
//TABS LIB
function handleTabLib() {
  let lib = document.querySelector(".lib");
  if (document.contains(lib) == true) {
    let tabs = document.querySelectorAll(".lib .lib__tabs .lib__tabs-item"),
      listLib = document.querySelectorAll(".lib .lib__wrap .lib__list");
    tabs.forEach(function (value) {
      value.addEventListener("click", function () {
        tabs.forEach(function (value) {
          value.classList.remove("active");
        });
        this.classList.add("active");
        listLib.forEach(function (listlib) {
          listlib.classList.remove("active");
        });
        let id = this.dataset.tab;
        document.querySelector(".lib__list-" + id).classList.add("active");
      });
    });
  }
}

//-------------------------------------------------------------------------------------------
//load Google Map
function loadGoogleMap() {
  let iframeGoogleMap = document.querySelector(".map iframe");
  if (document.contains(iframeGoogleMap) == true) {
    let dataIDMap = iframeGoogleMap.getAttribute("data-src");
    iframeGoogleMap.setAttribute("src", dataIDMap);
  }
}

//-------------------------------------------------------------------------------------------
//Make the hovered element go darker, but all the other elements go lighter
function hoverLight() {
  let galleryItem = document.querySelectorAll(
    ".gallery .gallery__list .gallery__list-item"
  );
  if (typeof galleryItem != "undefined" && galleryItem != null) {
    galleryItem.forEach(function (el) {
      el.addEventListener("mouseover", function () {
        galleryItem.forEach(function (item) {
          if (item != el) {
            item.classList.add("darken");
          }
        });
      });
      el.addEventListener("mouseout", function () {
        galleryItem.forEach(function (item) {
          item.classList.remove("darken");
        });
      });
    });
  }
}

//-------------------------------------------------------------------------------------------
function slideEventDetail() {
  var sliderImg = document.querySelector(
    ".articlecontent .slideimg .slideimg__list"
  );
  if (document.contains(sliderImg) == true) {
    var flktySlider = new Flickity(sliderImg, {
      cellAlign: "left",
      contain: true,
      draggable: ">1",
      prevNextButtons: false,
      wrapAround: true,
      pageDots: false,
      autoPlay: 6000,
      pauseAutoPlayOnHover: false,
    });
  }
  let controlPrev = document.querySelector(
    ".articlecontent .slideimg .slideimg__controls .control.--prev"
  );
  let controlNext = document.querySelector(
    ".articlecontent .slideimg .slideimg__controls .control.--next"
  );
  if (
    document.contains(controlPrev) == true &&
    document.contains(controlNext) == true
  ) {
    controlPrev.addEventListener("click", function () {
      flktySlider.previous(true);
    });
    controlNext.addEventListener("click", function () {
      flktySlider.next(true);
    });
  }
}

//-------------------------------------------------------------------------------------------
function fancybox() {
  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "modern",
    },
  });
}

//-------------------------------------------------------------------------------------------
//Loading
function loading() {
  let load = document.querySelector(".loader-mask");
  let loadedCnt = 0;
  let progressBar = document.querySelector(".loader__progress span");
  let progressNumber = document.querySelector(".loader__number span");
  let allImg = document.querySelectorAll("img").length;
  let imgLoad = imagesLoaded("img");

  imgLoad.on("progress", function (instance, image) {
    loadedCnt++;
    let n = Math.floor((loadedCnt / allImg) * 100);
    progressNumber.innerHTML = n;
    progressBar.style.width = n + "%";
  });
  imgLoad.on("done", function () {
    load.classList.add("active");
  });
}
loading();

//-------------------------------------------------------------------------------------------
window.addEventListener("load", function () {
  $("[data-paroller-factor]").paroller();
  backToTop();
  changeBGHeaderOnScroll();
  subMenu();
  nav();
  handleSliderHero();
  handleSliderNews();
  handleLogoList();
  handTestimonial();
  countNumber();
  handleModalVideo();
  handleSliderGal();
  setDefaultInputDate();
  animateScroll();
  handleTabLib();
  loadGoogleMap();
  slideEventDetail();
  hoverLight();
  fancybox();
});
