window.onload = function () {
  let password = document.getElementById("password");
  const placeholder = "Hello World!";
  let count = 0;

  function typeText() {
    password.value = placeholder.slice(0, count);
    count++;

    if (count <= placeholder.length) {
      setTimeout(typeText, 150); // Typing speed
    }
  }

  setTimeout(typeText, 750); // Start typing after delay
};
