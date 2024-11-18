//on submit go to thank you page
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selection = document.getElementById("options");
  const value = document.querySelector('input[name="score"]:checked')?.value;
  if (value) {
    let url = new URL(
      "file:///Users/maira/Documents/web%20development/interactive-rating-component-main/thank-you.html"
    );
    url.searchParams.set("rating", value);
    window.location.href = url;
  }
});
