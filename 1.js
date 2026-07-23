// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });
}

// ===========================================================
const toggle = document.getElementById("theme-toggle");
const body = document.body;

// اگر قبلاً حالت ذخیره شده باشد
const savedTheme = localStorage.getItem("theme");

// اگر چیزی ذخیره نشده باشد از تنظیمات سیستم استفاده کن
if (savedTheme) {

    if (savedTheme === "light") {
        body.classList.add("light");
        toggle.checked = true;
    }

} else {

    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        body.classList.add("light");
        toggle.checked = true;
    }

}

// تغییر حالت با کلیک

toggle.addEventListener("change", () => {

    if (toggle.checked) {

        body.classList.add("light");
        localStorage.setItem("theme", "light");

    } else {

        body.classList.remove("light");
        localStorage.setItem("theme", "dark");

    }

});