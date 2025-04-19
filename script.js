
const owl = document.getElementById('owl');

let direction = 'right';
let currentSide = 'left';

function moveOwl() {
  const screenWidth = window.innerWidth;
  const newLeft = currentSide === 'left' ? screenWidth - 150 : 50;
  gsap.to("#owl", {
    duration: 2,
    x: newLeft,
    onComplete: () => {
      currentSide = currentSide === 'left' ? 'right' : 'left';
    }
  });
}

function blinkOwl() {
  owl.style.opacity = '0.6';
  setTimeout(() => {
    owl.style.opacity = '1';
  }, 200);
}

function followCursor(event) {
  const owlRect = owl.getBoundingClientRect();
  const centerX = owlRect.left + owlRect.width / 2;
  const angle = (event.clientX - centerX) / 100;
  owl.style.transform = `rotateY(${angle}deg)`;
}

window.addEventListener('scroll', () => {
  moveOwl();
});

window.addEventListener('mousemove', followCursor);

// Blink every 5 seconds
setInterval(blinkOwl, 5000);
