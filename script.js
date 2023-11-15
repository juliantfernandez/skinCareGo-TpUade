document.addEventListener('DOMContentLoaded', function () {
    var burguer = document.getElementById('burguer');
    var navList = document.querySelector('nav ul');

    burguer.addEventListener('click', function () {
        navList.classList.toggle('active');
        navList.classList.toggle('disable');
    });
});
