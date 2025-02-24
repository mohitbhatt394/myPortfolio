document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      );
    }
  
    function updateActiveLink() {
      sections.forEach((section, index) => {
        if (isInViewport(section)) {
          console.log(`Section ${index + 1} is in viewport`); // Debugging
          navLinks.forEach(link => link.classList.remove('active'));
          navLinks[index].classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Call on page load
  });


  gsap.from("#nav",{
    duration: 1,
    opacity: 0,
    y: "-100%"
    
  })

  gsap.from(["#page1-section1 h1", "#page1-section1 h3", "#page1-section1 p", "#page1-section1 button"], {
    duration: 0.8,
    opacity: 0,
    y: "100%",
    stagger: 0.4 
  });
