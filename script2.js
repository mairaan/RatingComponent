//change selection text on thank you page

const urlParams = new URL(window.location.href);
const rating = urlParams.searchParams.get("rating");
const text = document.getElementById("selection-text");
text.textContent = `You selected ${rating} out of 5`;
