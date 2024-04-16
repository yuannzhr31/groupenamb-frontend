(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // International Tour carousel
  $(".InternationalTour-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: false,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // packages carousel
  $(".packages-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  //login
  document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const closeModal = document.getElementsByClassName("close")[0];
    const registerForm = document.getElementById("registerForm");

    function showRegisterForm() {
      document.getElementById("loginForm").style.display = "none";
      document.getElementById("registerForm").style.display = "block";
    }

    function handleRegister(event) {
      event.preventDefault();
      const fullname = document.getElementsByName("fullname")[0].value;
      const email = document.getElementsByName("email")[1].value;
      const password = document.getElementsByName("password")[1].value;
      const confirmPassword = document.getElementsByName("confirmPassword")[0].value;

      console.log("Fullname:", fullname);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);

      console.log("Pendaftaran berhasil!");

      document.getElementById("registerForm").style.display = "none";
      document.getElementById("loginForm").style.display = "block";
      registerForm.reset();
    }

    function handleLogin(event) {
      event.preventDefault();
      const email = document.getElementsByName("email")[0].value;
      const password = document.getElementsByName("password")[0].value;

      console.log("Email:", email);
      console.log("Password:", password);

      console.log("Anda telah berhasil masuk!");

      loginModal.style.display = "none";
      document.getElementById("loginForm").reset();
    }

    document.getElementById("registerBtn").addEventListener("click", showRegisterForm);
    registerForm.addEventListener("submit", handleRegister);

    document.getElementById("loginForm").addEventListener("submit", handleLogin);

    loginBtn.addEventListener("click", function () {
      loginModal.style.display = "block";
    });

    closeModal.addEventListener("click", function () {
      loginModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === loginModal) {
        loginModal.style.display = "none";
      }
    });

    $("#loginBtn").click(function () {
      $(".modal-content").fadeIn();
    });

    $(".close").click(function () {
      $(".modal-content").fadeOut();
    });
  });

  // Kategori
  $(".category-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Informasi carousel
  $(".info-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
