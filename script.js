document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-btn');
    const navLinks = document.querySelector('.nav-links');

    // Открытие/закрытие меню на мобильных устройствах
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Меняем иконку меню
        if (navLinks.classList.contains('active')) {
            mobileBtn.textContent = '✕';
        } else {
            mobileBtn.textContent = '☰';
        }
    });

    // Закрытие меню при клике на любую ссылку
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtn.textContent = '☰';
        });
    });
});