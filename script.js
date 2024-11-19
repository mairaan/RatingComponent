//on submit go to thank you page
const form = document.getElementById("form");
const changeURLToThankYou = () => {
  let breakdown = window.location.href.split("/");
  breakdown[breakdown.length - 1] = "thank-you.html";
  return breakdown.join("/");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const selection = document.getElementById("options");
  const value = document.querySelector('input[name="score"]:checked')?.value;
  if (value) {
    let url = new URL(changeURLToThankYou());
    url.searchParams.set("rating", value);
    window.location.href = url;
  }
});
