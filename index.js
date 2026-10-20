const cards = document.querySelectorAll(".articles-grid .article")
const viewMoreBTn = document.getElementById("view-more")
const footer = document.getElementById("footer")

const BATCH_Size = 3
const desktopQuery = window.matchMedia("(min-width: 768px)")

function getInitialCount() {
    return desktopQuery.matches ? 6:3
}

let visibleCount = getInitialCount()

function updateCards (){
    cards.forEach((card, index) =>{
        card.classList.toggle("is-hidden", index >= visibleCount)
    })

    viewMoreBTn.classList.toggle("is-hidden", visibleCount >= cards.length)
}


viewMoreBTn.addEventListener("click", () => {
    visibleCount += BATCH_Size
    updateCards()
})

desktopQuery.addEventListener("change",() => {
    visibleCount = getInitialCount()
    updateCards()
})

function updateFooter(){
    footer.innerHTML = `
        <h2>My Learning journal</h2>
        <p>Copyright &copy;${new Date().getFullYear()}</p>`
}

updateCards()
updateFooter()