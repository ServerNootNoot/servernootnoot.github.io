const particlesContainer = document.getElementById('bg-particles');
const particleCount = isMobile() ? 25 : 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = `${Math.random() * 20 + 5}px`;
  particle.style.height = particle.style.width;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particlesContainer.appendChild(particle);
}

// Animate particles
function animateParticles() {
  gsap.to('.particle', {
    y: '+=100',
    duration: 5,
    ease: 'none',
    stagger: {
      each: 0.1,
      repeat: -1,
      yoyo: true
    },
    onComplete: function() {
      this.targets()[0].style.top = '-10%';
    }
  });
}

animateParticles();

const copyIpButton = document.getElementById('copyIpButton');
copyIpButton.addEventListener('click', () => {
  navigator.clipboard.writeText('us.nightshade.lol').then(() => {
    copyIpButton.textContent = 'Copied!';
    setTimeout(() => {
      copyIpButton.textContent = 'Copy IP';
    }, 2000);
  });
});

const animationDelay = isMobile() ? 0.3 : 0.5;

gsap.from('h1', { opacity: 0, y: -50, duration: 1, ease: 'back.out(1.7)' });
gsap.from('p', { opacity: 0, y: 50, duration: 1, delay: animationDelay, ease: 'back.out(1.7)' });
gsap.from('.cta-button', { opacity: 0, scale: 0.5, duration: 1, delay: animationDelay * 2, ease: 'elastic.out(1, 0.5)' });
gsap.from('.nav-bar', { opacity: 0, y: -50, duration: 1, ease: 'power2.out' });

if (isMobile()) {
  const navBar = document.querySelector('.nav-bar');
  const navLinks = document.querySelector('.nav-links');
  const playButton = document.getElementById('playButton');

  navBar.appendChild(playButton);


  navLinks.style.justifyContent = 'center';
}
