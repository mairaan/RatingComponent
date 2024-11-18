//on submit go to thank you page
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selection = document.getElementById("options");
  const value = document.querySelector('input[name="score"]:checked')?.value;
  if (value) {
    let currentURL = window.location.href;
    let url = new URL(currentURL.replace("index", "thank-you"));
    url.searchParams.set("rating", value);
    window.location.href = url;
  }
});
