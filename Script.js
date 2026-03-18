const startDate = new Date("January 1, 2025 00:00:00").getTime();

function updateCounter() {
    const now = new Date().getTime();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById("day-count").innerText = days;
}

setInterval(updateCounter, 1000);
updateCounter();
// Tap to Expand Logic
const cards = document.querySelectorAll('.photo-card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

