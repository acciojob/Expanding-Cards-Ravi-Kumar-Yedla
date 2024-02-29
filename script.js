//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const panels = document.querySelectorAll('.panel');
  const text = document.querySelectorAll('.img-text');

  panels.forEach(panel => {
    panel.addEventListener('click', function () {
      // Remove the 'active' class from all panels
      panels.forEach(panel => {
        panel.classList.remove('active');
      });

      // Add the 'active' class to the clicked panel
      this.classList.add('active');

      // Update the text content of the corresponding img-text element
      const panelId = this.id.split('-')[1];
      text.forEach(txt => {
        txt.style.display = 'none';
        if (txt.id === `text-${panelId}`) {
          txt.style.display = 'block';
        }
      });
    });
  });

  // Expand the first panel by default
  panels[0].click();
});
