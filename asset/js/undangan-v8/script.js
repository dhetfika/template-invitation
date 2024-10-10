// Tentukan tanggal target (25 Desember 2024)
const countdownDate = new Date("December 25, 2024 00:00:00").getTime();

// Perbarui hitung mundur setiap detik
const countdownInterval = setInterval(function() {
    const now = new Date().getTime();  // Waktu saat ini dalam milidetik
    const timeRemaining = countdownDate - now;  // Waktu tersisa

    // Hitung hari, jam, menit, dan detik dari waktu tersisa
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Tampilkan hasil di elemen HTML dengan ID terkait
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Jika hitungan mundur selesai, hentikan interval
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);
