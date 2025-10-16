document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Fast Consultant Modern Site Loaded Successfully!");

  // Smooth fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.3 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fade => appearOnScroll.observe(fade));
});
