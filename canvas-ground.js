window.addEventListener("DOMContentLoaded", function () {
  const GROUNDHEIGHT = 100;

  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.querySelector("body").appendChild(canvas);

  const ctx = canvas.getContext("2d");

  function drawGround() {
    ctx.beginPath();
    ctx.moveTo(0, canvas.height - GROUNDHEIGHT);
    ctx.lineTo(canvas.width, canvas.height - GROUNDHEIGHT);
    ctx.stroke();
  }

  // Function to load an image
  function loadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  }

  async function drawGrassSprites(spriteCount) {
    // Array to store loaded grass sprite images
    const grassImages = [];

    // Load grass sprite images
    for (let i = 1; i <= 9; i++) {
      const img = await loadImage(`./images/grass/grass-${i}.png`);
      grassImages.push(img);
    }

    // Draw grass sprites at random positions
    for (let i = 0; i < spriteCount; i++) {
      const img = grassImages[Math.floor(Math.random() * grassImages.length)];
      const size = 32 + Math.floor(Math.random() * 16); // Random height between 32 and 48
      const x = Math.random() * canvas.width;
      const y = canvas.height - Math.random() * GROUNDHEIGHT - size;

      ctx.drawImage(img, x, y, size, size);
    }
  }

  drawGround();
  drawGrassSprites(canvas.width / 250);
});
