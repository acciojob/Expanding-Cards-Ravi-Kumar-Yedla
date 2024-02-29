//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    panels.forEach(p => p.classList.remove('active'));
    panel.classList.add('active');
  });
});