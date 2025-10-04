const heartBtn = document.getElementById('heartBtn');
const heartsContainer = document.getElementById('hearts');

heartBtn.addEventListener('click', () => {
    for (let i = 0; i < 30; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = 2 + Math.random() * 3 + 's';
    heart.style.fontSize = 20 + Math.random() * 30 + 'px';

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
