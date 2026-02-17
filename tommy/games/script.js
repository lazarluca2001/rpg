var trFilter = function(s, b) {
    var btns = document.querySelectorAll('.tr-filter-btn');
    for (var i = 0; i < btns.length; i++) { btns[i].classList.remove('active'); }
    b.classList.add('active');
    var cards = document.querySelectorAll('.tr-card');
    for (var j = 0; j < cards.length; j++) {
        if (s === 'all' || cards[j].classList.contains(s)) {
            cards[j].style.setProperty('display', 'flex', 'important');
        } else {
            cards[j].style.setProperty('display', 'none', 'important');
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    var bts = document.querySelectorAll('.tr-filter-btn');
    for (var k = 0; k < bts.length; k++) {
        bts[k].addEventListener('click', function() {
            trFilter(this.getAttribute('data-f'), this);
        });
    }
});
