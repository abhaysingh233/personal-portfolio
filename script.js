var typed = new Typed("#element", {
        strings: [
          "Web Developer",
          "Data Analyst",
          "Web Designer",
          "Advance Excel",
        ],
        typeSpeed: 50,
      });
      // JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const skillFills = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.style.width = target.getAttribute("data-width");
                observer.unobserve(target); // animate only once
            }
        });
    }, { threshold: 0.3 });

    skillFills.forEach(skill => {
        observer.observe(skill);
    });
});
