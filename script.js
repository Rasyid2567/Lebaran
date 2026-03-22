const envelope = document.getElementById('envelope');

// Buka amplop saat diklik (hanya bisa dibuka sekali untuk menjaga efek magis)
envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
    }
});

// Partikel Bintang Berkualitas Tinggi (Glowing Dust)
const starsContainer = document.getElementById('stars');
starsContainer.innerHTML = ''; // Bersihkan jika ada yang lama

for (let i = 0; i < 70; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Posisi acak di seluruh layar
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    
    // Ukuran bervariasi untuk efek kedalaman
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    
    // Durasi dan jeda animasi bervariasi agar terlihat alami
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    star.style.animationDelay = (Math.random() * 2) + 's';
    
    // Beberapa bintang berwarna emas (gold tint)
    if (Math.random() > 0.8) {
        star.style.background = '#fef08a';
        star.style.boxShadow = '0 0 10px #fef08a';
    } else {
        star.style.background = 'white';
        star.style.boxShadow = '0 0 10px white';
    }
    
    starsContainer.appendChild(star);
}