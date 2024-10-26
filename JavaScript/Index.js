const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  document.querySelector(".noDisplay").style.width = "100%";
});

const hamburgerClose = document.getElementById("hamburgerClose");
hamburgerClose.addEventListener("click", () => {
  document.querySelector(".noDisplay").style.width = "0%";
});
//Intro name position effect

window.onload = function () {
  document.querySelector(".name").classList.add("show");
  document.querySelector(".nameFolloUpLine").classList.add("nShow");
};

// card fade in

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".card");
  const projectCard = document.querySelectorAll(".projectCard");

  //for skills card
  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      element.classList.add("card-fade-in-on-scroll");
    }
  });

  //for project card
  projectCard.forEach((element) => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      element.classList.add("projectCard-fade-in-on-scroll");
    }
  });
});

//blog link disabled in both header and hamburger

const blog = document.querySelectorAll(".disabledLink");
blog.forEach((ele) => {
  ele.addEventListener("click", () => {
    alert("This Link is currently disabled. Please visit after some days 😊");
  });
});

//project and skill background lazy loading

document.addEventListener("DOMContentLoaded", function () {
  const lazyBackgrounds = document.querySelectorAll(".lazy-background");

  function initLazyLoading() {
    if (window.innerWidth >= 768) {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bgElement = entry.target;
            const bgImage = bgElement.getAttribute("data-bg");
            bgElement.style.backgroundImage = `url(${bgImage})`;
            observer.unobserve(bgElement); // Stop observing once loaded
          }
        });
      });

      lazyBackgrounds.forEach((bg) => {
        observer.observe(bg);
      });
    } else {
      // Remove the background image if the width is less than 768px
      lazyBackgrounds.forEach((bg) => {
        bg.style.backgroundImage = ""; // Clears the background image
      });
    }
  }

  // Call the function initially
  initLazyLoading();

  // Re-run on window resize
  window.addEventListener("resize", initLazyLoading);
});
