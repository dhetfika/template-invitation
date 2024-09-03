// Dapatkan semua elemen <li> dengan class 'nav-item'
const navItems = document.querySelectorAll('.nav-item');

// Tambahkan event listener untuk setiap item
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Hapus class 'active' dari semua <li>
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Tambahkan class 'active' ke item yang diklik
        this.classList.add('active');

        // Dapatkan ID dari div yang sesuai
        const sectionId = this.id.replace('nav-', '');
        const section = document.getElementById(sectionId);

        // Scroll ke section yang sesuai (opsional)
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
