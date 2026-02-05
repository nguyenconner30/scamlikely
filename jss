// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");

  // ----------------------------
  // Initialize the first screen
  // ----------------------------
  function initScreen() {
    content.innerHTML = `
      <h1>Will you be my Valentine?</h1>
      <div class="btn-wrapper">
        <button id="yesBtn" class="yes">Yes❣️</button>
        <button id="noBtn" class="no">No</button>
      </div>
    `;

    // Query buttons AFTER they exist
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const wrapper = document.querySelector(".btn-wrapper");

    // ----------------------------
    // Yes button click
    // ----------------------------
    yesBtn.addEventListener("click", showYesScreen);

    // ----------------------------
    // No button click
    // ----------------------------
    noBtn.addEventListener("click", showNoScreen);

    // ----------------------------
    // No button movement
    // ----------------------------
    let btnX = noBtn.offsetLeft;
    let btnY = 10;

    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const cursorX = e.clientX - rect.left;
      const cursorY = e.clientY - rect.top;

      const btnWidth = noBtn.offsetWidth;
      const btnHeight = noBtn.offsetHeight;

      const dx = cursorX - (btnX + btnWidth / 2);
      const dy = cursorY - (btnY + btnHeight / 2);
      const distance = Math.hypot(dx, dy);

      const repelDistance = 250;

      if (distance < repelDistance) {
        const angle = Math.atan2(dy, dx);
        const repelX = -Math.cos(angle) * (repelDistance - distance);
        const repelY = -Math.sin(angle) * (repelDistance - distance);

        btnX += repelX * 0.3;
        btnY += repelY * 0.3;

        btnX = Math.max(0, Math.min(btnX, wrapper.offsetWidth - btnWidth));
        btnY = Math.max(0, Math.min(btnY, wrapper.offsetHeight - btnHeight));

        noBtn.style.left = `${btnX}px`;
        noBtn.style.top = `${btnY}px`;
      }
    });
  }

  // ----------------------------
  // Show No screen
  // ----------------------------
  function showNoScreen() {
    content.innerHTML = `
      <div class="final-screen">
        <h1>Bruh...weally?</h1>
        <div class="no-gif-stack">
          <iframe src="https://tenor.com/embed/2895875627188301222"></iframe>
          <p class="final-text okay-den">OKAY DEN...</p>
          <iframe src="https://tenor.com/embed/5606205"></iframe>
          <div class="no-text-button">
            <p class="change-mind">change your mind? ;)</p>
            <button class="yes-again">Yes❣️</button>
          </div>
        </div>
      </div>
    `;

    // Attach listener to dynamically created Yes button
    const yesAgain = document.querySelector(".yes-again");
    yesAgain.addEventListener("click", showYesScreen);
  }

  // ----------------------------
  // Show Yes screen
  // ----------------------------
  function showYesScreen() {
    content.innerHTML = `
      <div class="final-screen">
        <h1 class="yay-title">❣️YAYAYAYAY❣️</h1>
        <div class="final-content">
          <img src="https://i.imgur.com/VWq3Cnc.gif" class="final-gif" alt="kiss gif">
          <p class="final-text">I knew you'd click yes😏<br>Happy Valentine’s Day,<br> my love❣️</p>
          <div class="date-images">
            <img src="https://i.imgur.com/fc7DE9n.png">
            <img src="https://i.imgur.com/KYc3TJt.png">
          </div>
          <p class="final-text">Dinner First,<br>Dessert Last ;)</p>
        </div>
      </div>
    `;

    // Start continuous heart confetti
    startHeartConfetti();
  }

  // ----------------------------
  // Continuous heart confetti
  // ----------------------------
  function startHeartConfetti() {
    setInterval(() => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.setProperty('--rand', Math.random());
      heart.style.animationDuration = `${2 + Math.random() * 3}s`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 5000);
    }, 200);
  }

  // ----------------------------
  // Initialize the first screen
  // ----------------------------
  initScreen();

});
