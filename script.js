// script.js
function filterSelection(status) {
    const cards = document.getElementsByClassName("card");
    const buttons = document.getElementsByClassName("btn");

    // Gomb aktív állapotának kezelése
    for (let btn of buttons) {
        btn.classList.remove("active");
        if (btn.innerText.toLowerCase().includes(status) || (status === 'all' && btn.innerText === 'Összes')) {
            btn.classList.add("active");
        }
    }

    // Szűrés
    for (let card of cards) {
        if (status === "all") {
            card.style.display = "block";
        } else {
            if (card.classList.contains(status)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        }
    }
}
