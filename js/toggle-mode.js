let lightMode = true;

const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light');

    const mode = lightMode ? 'Dark' : 'Light';

    event.currentTarget.querySelector('span').textContent = `${mode} Mode Ativado!`;

    lightMode = !lightMode;
});