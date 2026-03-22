const envelope = document.getElementById('envelope');

// Buka amplop saat diklik (hanya bisa dibuka sekali untuk menjaga efek magis)
envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
        envelope.classList.add('open');
        
        // Pesta Konfeti 1.2 detik setelah klik (saat kartu ditarik naik)
        setTimeout(shootConfetti, 1200);
        // Konfeti ledakan kedua biar makin heboh
        setTimeout(shootConfetti, 2000);
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

// Ledakan Kembang Api / Konfeti yang WOW
function shootConfetti() {
    const colors = ['#d4af37', '#059669', '#fef08a', '#ffffff', '#fbbf24', '#ff8c00', '#10b981'];
    
    for (let i = 0; i < 35; i++) {
        let conf = document.createElement('div');
        conf.classList.add('confetti');
        
        // Bentuk acak: bulat, persegi, bentuk wajik
        let type = Math.floor(Math.random() * 3);
        if (type === 0) conf.style.borderRadius = '50%'; 
        else if (type === 1) conf.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'; 
        
        conf.style.background = colors[Math.floor(Math.random() * colors.length)];
        conf.style.width = (Math.random() * 8 + 6) + 'px';
        conf.style.height = (Math.random() * 15 + 8) + 'px';
        
        conf.style.left = '50%';
        conf.style.top = '50%'; // Ledakan dari tengah layar
        
        // Fisika ledakan parabola
        let tx = (Math.random() - 0.5) * 600 + 'px'; // Kiri/kanan
        let shootY = -(Math.random() * 500 + 200) + 'px'; // Melesat ke atas
        let fallY = (Math.random() * 400 + 400) + 'px'; // Jatuh ke bawah
        
        conf.style.setProperty('--tx', tx);
        conf.style.setProperty('--sy', shootY);
        conf.style.setProperty('--fy', fallY);
        conf.style.setProperty('--r1', (Math.random() * 360) + 'deg');
        conf.style.setProperty('--r2', (Math.random() * 1080 - 540) + 'deg');
        
        document.body.appendChild(conf);
        
        setTimeout(() => conf.remove(), 4000);
    }
}