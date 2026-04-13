// Başlıkların renk sıraları
const colorClasses = [
  "dark-pink",      // Cansu Malak
  "light-pink",     // Research
  "lightest-pink",  // Scientific Output
  "lightest-blue",  // Gallery
  "light-blue",     // CV
  "blue"            // News
];

// Başlıkları seç
const navItems = document.querySelectorAll("nav a");

// Her başlığa tıklama olayı ekle
navItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Tüm renk sınıflarını kaldır
    navItems.forEach((nav) => nav.classList.remove(...colorClasses));

    // Tıklanan başlığa doğru renk sınıfını ekle
    item.classList.add(colorClasses[index]);
  });
});
