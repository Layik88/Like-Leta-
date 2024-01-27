function typeText(element, text, speed) {
    let i = 0;
    const interval = setInterval(function () {
      element.textContent += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(interval);
      }
    }, speed);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.querySelector("#Home .the-animation .animated-text");

    if (targetElement) {
      const texts = ["Design it", "Make it Interactive", "Make it Responsive"];
      let textIndex = 0;

      function startTyping() {
        targetElement.textContent = "";
        typeText(targetElement, texts[textIndex], 100);
        textIndex = (textIndex + 1) % texts.length;
      }

      startTyping(); // Initial call
      setInterval(startTyping, 3000); // Repeat every 3 seconds
    } else {
      console.error("Target element not found.");
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const portfolioTitle = document.getElementById('portfolioTitle');
    const portfolioImages = document.querySelectorAll('.portfolioImage');

    let currentImageIndex = 0;

    setInterval(() => {
      portfolioImages[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
      portfolioImages[currentImageIndex].classList.add('active');
    }, 3000); // Change the duration as needed (in milliseconds)
  });