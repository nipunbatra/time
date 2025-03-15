function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('theme-toggle');
    themeButton.textContent = body.classList.contains('dark-mode') ? '☀' : '☾';
}

updateTime();
setInterval(updateTime, 1000);

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);