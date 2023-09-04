document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // JavaScript dari sebelumnya tetap digunakan di sini

  // Slideshow
  let slideIndex = 0;

  function showSlides() {
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    setTimeout(showSlides, 5000); // Ubah gambar setiap 5 detik
  }

  showSlides();
});
// Fungsi untuk menampilkan pesan konfirmasi saat mengirim formulir
function konfirmasiPendaftaran() {
  var nama = document.getElementById("nama").value;
  var email = document.getElementById("email").value;

  if (nama === "" || email === "") {
    alert("Silakan isi semua kolom!");
  } else {
    var konfirmasi = confirm("Apakah Anda yakin ingin mengirim pendaftaran?");
    if (konfirmasi) {
      alert("Pendaftaran berhasil dikirim!");
    }
  }
}

// Menambahkan event listener untuk tombol "Kirim Pendaftaran"
var kirimButton = document.getElementById("kirim-button");
kirimButton.addEventListener("click", konfirmasiPendaftaran);
