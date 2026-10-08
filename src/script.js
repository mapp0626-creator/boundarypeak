const video = document.querySelector('video.hero-photo');
const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);

function applyMotionPreference() {
  if (!video) return;

  if (reducedMotion.matches) {
    video.autoplay = false;
    video.pause();
  } else {
    video.autoplay = true;
    video.play().catch(() => {});
  }
}

applyMotionPreference();
reducedMotion.addEventListener('change', applyMotionPreference);

document.querySelector('#year').textContent =
  new Date().getFullYear();