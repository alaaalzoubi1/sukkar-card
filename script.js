window.addEventListener("load", () => {
  setTimeout(() => {
    const loading = document.getElementById("loading");
    loading.classList.add("fade-shrink"); // start animation
    loading.addEventListener("animationend", () => {
      loading.style.display = "none";
      document.getElementById("card").classList.remove("hidden");
    });
  }, 3000); // 3 seconds loading
});
