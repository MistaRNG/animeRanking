const coverText = document.querySelector(".cover-text");
const sections = [...document.querySelectorAll("section")];
const navElements = [...document.querySelectorAll(".nav-element")];
const navbar = document.querySelector(".navbar");
const scrollRoot = document.querySelector(".scroller");

let prevYPos = 0;
let direction = "up";

function updateActive(activeNavEl) {
  navElements.forEach((navEl) => {
    if (activeNavEl == navEl) {
      activeNavEl.classList.add("active");
    } else {
      navEl.classList.remove("active");
    }
  });
}

const getTargetSection = (entry) => {
  const index = sections.findIndex((section) => section == entry.target);
  if (index >= sections.length - 1) {
    return entry.target;
  } else {
    return sections[index + 1];
  }
};

const shouldUpdate = (entry) => {
  if (direction === "down" && !entry.isIntersecting) {
    return true;
  }
  if (direction === "up" && entry.isIntersecting) {
    return true;
  }
  return false;
};

const setEntryActive = (entry) => {
  const index = sections.findIndex((section) => section == entry);
  updateActive(navElements[index]);
};

const navActiveCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (scrollRoot.scrollTop > prevYPos) {
      direction = "down";
    } else {
      direction = "up";
    }

    prevYPos = scrollRoot.scrollTop;
    const target =
      direction === "down" ? getTargetSection(entry) : entry.target;
    if (shouldUpdate(entry)) {
      setEntryActive(target);
    }
  });
};

const navColorCallback = (entries, observer) => {
  const entry = entries[0];
  const { intersectionRatio, isIntersecting } = entry;

  navbar.classList.toggle("nav-colored", !entry.isIntersecting);
  navbar.classList.toggle("nav-transparent", entry.isIntersecting);
};

const colorIO = new IntersectionObserver(navColorCallback, {
  rootMargin: "-80px 0px 0px 0px",
  threshold: 1,
});
const acitveIO = new IntersectionObserver(navActiveCallback, {
  root: scrollRoot,
  rootMargin: `-${navbar.offsetHeight}px`,
});

function observeSections() {
  sections.forEach((section) => {
    acitveIO.observe(section);
  });
}

colorIO.observe(coverText);
observeSections();

const imageIDs = [
  "bg3Img",
  "csgoImgMobile",
  "csgoImgDesktop",
  "swbfImgMobile",
  "swbfImgDesktop",
  "ac2ImgMobile",
  "ac2ImgDesktop",
  "me2ImgMobile",
  "me2ImgDesktop",
  "ds2ImgMobile",
  "ds2ImgDesktop",
  "erImgMobile",
  "erImgDesktop",
  "bf3Img",
  "mw2Img",
  "floImg",
  "ff7rImg",
  "ds3Img",
];
const cardImages = [];
imageIDs.forEach((imgID) => {
  cardImages.push(document.getElementById(imgID));
});
const column1 = [...document.querySelectorAll(".col1")];

const cards = [...document.querySelectorAll(".card")];

function setMaxHeight() {
  cards.forEach((card) => {
    const column = card.querySelector(".col1");
    const images = card.querySelectorAll(".card-image");

    if (column) {
      images.forEach((image) => {
        image.style.maxHeight = `${column.offsetHeight}px`;
      });
    }
  });
}

setMaxHeight();

const reviewPane = document.getElementById("tab-pane-review");
const paneContainer = document.querySelector(".pane-container");

function changePaneClasses() {
  if (window.innerWidth < 1200) {
    reviewPane.classList.remove("position-relative");
    paneContainer.classList.remove("position-absolute");
    paneContainer.classList.remove("top-50");
    paneContainer.classList.remove("start-50");
    paneContainer.classList.remove("translate-middle");
  } else {
    reviewPane.classList.add("position-relative");
    paneContainer.classList.add("position-absolute");
    paneContainer.classList.add("top-50");
    paneContainer.classList.add("start-50");
    paneContainer.classList.add("translate-middle");
  }
  console.log(reviewPane.classList, paneContainer.classList);
}

window.onresize = changePaneClasses;
changePaneClasses();

