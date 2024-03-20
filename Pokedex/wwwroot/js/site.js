function filter (type) {
    let card, i;
    let count = 0;
    cards = document.getElementsByClassName("cards");
    buttons = DocumentElementsByClassName("btn-filter");
    for (i = 0; i < cards.length; i++) {
        cards[i].parentElement.style.display = 'none';
        if (cards[i].classList.contains(type) || type === 'all') {
            cards[i].parentElement.style.display = 'block';
            count += 1;
        };
    };
}