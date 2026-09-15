let searchInput = document.querySelector(".search-box input");
let connectionCards = document.querySelectorAll(".connection-card");
let noResultsMsg = document.querySelector(".no-results");
let growthCard = document.querySelector(".growth-card");

searchInput.addEventListener("input", function () {
    let keyword = searchInput.value.trim().toLowerCase();
    let matchCount = 0;

    connectionCards.forEach(function (card) {
        let name = card.querySelector("h3").textContent.toLowerCase();

        if (name.includes(keyword)) {
            card.style.display = "block";
            matchCount++;
        } else {
            card.style.display = "none";
        }
    });

    if (matchCount === 0) {
        noResultsMsg.style.display = "block";
        growthCard.style.display = "none";
    } else {
        noResultsMsg.style.display = "none";
        growthCard.style.display = "block";
    }
});