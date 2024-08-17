window.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.querySelector("body").appendChild(canvas);

  const ctx = canvas.getContext("2d");

  // Function to load an image
  function loadImage(src) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = src;
    });
  }

  class Cloud {
    constructor(img, x, y, speed) {
      this.img = img;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.active = true;
    }

    update() {
      this.x -= this.speed;
      if (this.x + this.img.width < 0) {
        this.active = false;
      }
    }

    draw() {
      ctx.drawImage(this.img, this.x, this.y);
    }
  }

  function generateCloud(img, generateAtRight) {
    const x = generateAtRight ? canvas.width : Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speed = 0.05 + Math.random() * 0.2;
    return new Cloud(img, x, y, speed);
  }

  async function drawClouds() {
    const cloudCount = Math.min(canvas.width / 150, 5);
    const cloudImages = [];
    const clouds = [];

    // Load cloud images
    for (let i = 1; i <= cloudCount; i++) {
      const img = await loadImage(`./images/clouds/cloud-${i}.png`);
      cloudImages.push(img);
    }

    // Create cloud objects
    for (let img of cloudImages) {
      clouds.push(generateCloud(img, false));
    }

    // Animation loop
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      clouds.forEach((cloud, index) => {
        cloud.update();
        if (cloud.active) {
          cloud.draw();
        } else {
          // Remove inactive cloud and generate a new one
          const img =
            cloudImages[Math.floor(Math.random() * cloudImages.length)];
          clouds[index] = generateCloud(img, true);
        }
      });
      requestAnimationFrame(animate);
    }

    animate();
  }

  drawClouds();
});
