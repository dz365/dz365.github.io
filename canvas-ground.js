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

  async function drawGrassSprites() {
    // Array to store loaded grass sprite images
    const grassImages = [];

    // Load grass sprite images
    for (let i = 1; i <= 3; i++) {
      const img = await loadImage(`./images/grass/grass-${i}.png`);
      grassImages.push(img);
    }

    // Draw grass sprites every ~250px apart
    for (let i = 0; i < canvas.width; i += 250) {
      const img = grassImages[Math.floor(Math.random() * grassImages.length)];
      const scale = 1.5 + Math.random();
      const x = i + Math.random() * 200;
      const y =
        canvas.height - Math.random() * GROUNDHEIGHT - img.height / scale + 16;

      ctx.drawImage(img, x, y, img.width / scale, img.height / scale);
    }
  }

  drawGround();
  drawGrassSprites();
});
