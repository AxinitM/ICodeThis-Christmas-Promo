(function () {
  const closeBtn = document.querySelector(".btn-close");
  const container = document.getElementById("container");
  const giftBtn = document.getElementById("gift-btn");

  if (closeBtn && container) {
    closeBtn.addEventListener("click", () => {
      container.classList.add("hidden");
    });
  }

  // if (giftBtn) {
  //   giftBtn.addEventListener("click", () => {
  //     startSnowfall();
  //   });
  // }

  // function startSnowfall() {
  //   function createSnowflake() {
  //     const snowflake = document.createElement("div");
  //     snowflake.classList.add("snowflake");

  //     // Size: 10% chance for 8px, 90% for 1-5px
  //     const isLarge = Math.random() < 0.1;
  //     const size = isLarge ? 8 : Math.random() * 4 + 1;
  //     snowflake.style.width = `${size}px`;
  //     snowflake.style.height = `${size}px`;

  //     // Random horizontal position
  //     snowflake.style.left = `${Math.random() * 100}vw`;
  //     snowflake.style.top = `-${size}px`;

  //     // Direction: 80% vertical, 10% left diagonal, 10% right diagonal
  //     let direction;
  //     const rand = Math.random();
  //     if (rand < 0.8) {
  //       direction = "fall-vertical";
  //     } else if (rand < 0.9) {
  //       direction = "fall-diagonal-left";
  //     } else {
  //       direction = "fall-diagonal-right";
  //     }

  //     // Random duration between 8s and 12s for faster fall
  //     const duration = Math.random() * 2 + 10;
  //     snowflake.style.animation = `${direction} ${duration}s linear`;

  //     // Remove snowflake after animation
  //     snowflake.addEventListener("animationend", () => {
  //       snowflake.remove();
  //     });

  //     document.body.appendChild(snowflake);
  //   }

  //   // Create snowflakes immediately and every 2ms
  //   createSnowflake(); // Instant start
  //   setInterval(createSnowflake, 2);
//   }
// 
}
)();