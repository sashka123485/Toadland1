document.addEventListener('DOMContentLoaded', function() {
    const frogPromo = document.querySelector('.frog-promo');
    frogPromo.addEventListener('click', function() {
        alert('Переход в ТГ-канал скоро будет реализован!');
    });

    const elementsToAnimate = document.querySelectorAll('button, .btn-link');
    elementsToAnimate.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
        });
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});
