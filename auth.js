function checkUserName() {
  const savedUserName = localStorage.getItem("userName");
  if (savedUserName === null) {
    window.location.href = "index.html#start";
  } else {
    // Simpan data tambahan ke localStorage
    console.log(`Username : ${savedUserName}!`);
  }
}
// Jalankan pengecekan saat halaman dimuat
document.addEventListener("DOMContentLoaded", checkUserName);
