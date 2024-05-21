document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var closeButton = document.querySelector('.close-button');

    document.getElementById('registrationForm').onsubmit = function(event) {
        event.preventDefault(); // Запобігаємо стандартному сабміту форми
        modal.style.display = 'block'; // Показуємо модальне віконце
        // Тут можна додати код для відправки даних форми через AJAX або інші методи
    };

    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});
