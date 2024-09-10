const messages = [
    "Welcome, my name is Luis.",
    "Let me tell you about me.",
    "I enjoy building projects with code.",
    "I'm passionate about solving real-world problems.",
    "That's just a little about me. Thanks for visiting!"
  ];
  
  let index = 0;
  const welcomeElement = document.getElementById("welcome");
  const welcomeContainer = document.getElementById("welcome-container");
  const additionalContent = document.getElementById("additional-content");
  
  function changeMessage() {
    // Apply slide-up effect to current message
    welcomeElement.classList.add('slide-up');
  
    // Change text after slide-up is done (0.5s delay to match transition)
    setTimeout(() => {
      index = (index + 1) % messages.length;
  
      if (index === 0) {
        showPage();
      } else {
        welcomeElement.innerText = messages[index];
        // Reset to initial state before next animation
        welcomeElement.classList.remove('slide-up');
        welcomeElement.style.opacity = 1;
      }
    }, 500); // Match this delay with the slide-up transition time
  }
  
  function showPage() {
    // Apply slide-up effect to the welcome container
    welcomeContainer.classList.add('slide-up');
  
    // Delay to let the slide-up animation finish
    setTimeout(() => {
      // Hide the welcome container
      welcomeContainer.style.display = 'none';
  
      // Show additional content with fade-in effect and slide-up
      additionalContent.classList.add('show-content');
      
      // Allow body to scroll after animation
      document.body.classList.add('scrolled');
    }, 500); // Match this delay with the slide-up transition time
  }
  
  // Add event listener to the body
  document.body.addEventListener('click', changeMessage);
  