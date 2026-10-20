const BATCH_SIZE = 3;
const MOBILE_INITIAL_COUNT = 3;
const DESKTOP_INITIAL_COUNT = 6;

const cards = document.querySelectorAll(".articles-grid .article");
const viewMoreBtn = document.getElementById("view-more");
const yearEl = document.getElementById("year");
const desktopQuery = window.matchMedia("(min-width: 768px)");

function getInitialCount() {
    return desktopQuery.matches ? DESKTOP_INITIAL_COUNT : MOBILE_INITIAL_COUNT;
}

let visibleCount = getInitialCount();

function updateCards() {
    cards.forEach((card, index) => {
        card.hidden = index >= visibleCount;
    });

    viewMoreBtn.hidden = visibleCount >= cards.length;
}

viewMoreBtn.addEventListener("click", () => {
    visibleCount += BATCH_SIZE;
    updateCards();
});

desktopQuery.addEventListener("change", () => {
    visibleCount = getInitialCount();
    updateCards();
});

yearEl.textContent = new Date().getFullYear();
updateCards();