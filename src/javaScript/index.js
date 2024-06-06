document.addEventListener("DOMContentLoaded", () => {
  const st_icon = document.querySelector(".container .iphone_border .st_icon");
  const ht_icon = document.querySelector(".container .iphone_border .ht_icon");
  const multi_icon = document.querySelector(
    ".container .iphone_border .multi_icon"
  );
  const bga_icon = document.querySelector(
    ".container .iphone_border .bga_icon"
  );
  const cro_icon = document.querySelector(
    ".container .iphone_border .cro_icon"
  );
  const dc_icon = document.querySelector(".container .iphone_border .dc_icon");
  const sold_icon = document.querySelector(
    ".container .iphone_border .sold_icon"
  );
  const rs_icon = document.querySelector(".container .iphone_border .rs_icon");
  const nav_pill = document.querySelector(
    ".container .iphone_mockup .nav_pill"
  );
  const st_page = document.querySelector(
    ".container .iphone_border .software_training"
  );
  const ht_page = document.querySelector(
    ".container .iphone_border .hardware_training"
  );
  const multimeter_page = document.querySelector(
    ".container .iphone_border .multimeter"
  );
  const bga_page = document.querySelector(".container .iphone_border .bga");
  const cro_page = document.querySelector(".container .iphone_border .cro");
  const dc_page = document.querySelector(".container .iphone_border .dc");
  const sold_page = document.querySelector(
    ".container .iphone_border .soldering"
  );
  const rs_page = document.querySelector(".container .iphone_border .rework");
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

  multi_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    multimeter_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  bga_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    bga_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  cro_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    cro_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  dc_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    dc_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  sold_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    sold_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  rs_icon.addEventListener("click", () => {
    app_open.classList.add("open");
    rs_page.classList.add("open");
    nav_pill.classList.add("open");
  });

  nav_pill.addEventListener("click", () => {
    app_open.classList.remove("open");
    nav_pill.classList.remove("open");
    multimeter_page.classList.remove("open");
    st_page.classList.remove("open");
    ht_page.classList.remove("open");
    bga_page.classList.remove("open");
    cro_page.classList.remove("open");
    dc_page.classList.remove("open");
    sold_page.classList.remove("open");
    rs_page.classList.remove("open");
  });
});
