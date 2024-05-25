document.addEventListener("DOMContentLoaded", () => {
  const st_icon = document.querySelector(".container .iphone_border .st_icon");
  const ht_icon = document.querySelector(".container .iphone_border .ht_icon");
  const nav_pill = document.querySelector(
    ".container .iphone_mockup .nav_pill"
  );
  const st_page = document.querySelector(
    ".container .iphone_border .software_training"
  );
  const ht_page = document.querySelector(
    ".container .iphone_border .hardware_training"
  );
  const app_open = document.querySelector(
    ".container .iphone_border .open_app_section"
  );

  ht_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    ht_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  st_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    st_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  nav_pill.addEventListener("click", () => {
    app_open.classList.remove("open");
    nav_pill.classList.remove("open");
    st_page.classList.remove("open");
    ht_page.classList.remove("open");
  });
});
