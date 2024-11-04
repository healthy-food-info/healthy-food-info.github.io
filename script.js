window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', (document.documentElement.scrollTop / 400) > 0.99 ? 0.99 : (document.documentElement.scrollTop / 400));
  }, false);
document.querySelector(".headbox img").addEventListener("click", () => {
    document.querySelector("#top").scrollIntoView({ behavior: "smooth" });
})