document.addEventListener("DOMContentLoaded", function () {
  // Define animations and triggers for sections
  const homepage = document.querySelector(".homepage");
  const services = document.querySelector(".services");
  const portfolio = document.querySelector(".portfolio");
  const about = document.querySelector(".about");
  const contact = document.querySelector(".contact");

  // Define animations for cards
  const serviceCards = document.querySelectorAll(".service-card");
  const portfolioCards = document.querySelectorAll(".portfolio-card");

  // Initialize a GSAP timeline
  const tl = gsap.timeline();

  // Create animations for sections
  tl.from(homepage, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: homepage,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(services, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: services,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from("#services h2, #services p", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#services h2, #services p",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(portfolio, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: portfolio,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(about, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: about,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  tl.from(contact, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: contact,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  // Create animations for cards
  serviceCards.forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  portfolioCards.forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
