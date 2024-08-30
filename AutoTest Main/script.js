let button = document.querySelector('#navToggleBtn')

button.addEventListener('click', function () {
    let meniu = document.querySelector('.meniu_mobil_content')
    meniu.classList.toggle('meniu_vizibil');
}
)