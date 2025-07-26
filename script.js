anime({
  targets: '#sunflower',
  scale: [
    { value: 1, duration: 800 },
    { value: 1.05, duration: 800 }
  ],
  easing: 'easeInOutSine',
  direction: 'alternate',
  loop: true
});

new Date().getHours();
if (hour < 6 || hour >= 18) {
  document.body.style.background = "linear-gradient(to top, #0b0c2a, #1e1e40)";
   document.getElementById('footer').style.color = 'white';
} else {
  document.body.style.background = "linear-gradient(to top, #c2f0ff, #87ceeb)";
  document.getElementById('footer').style.color = 'black';
}
