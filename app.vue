<script setup>
useHead({
  titleTemplate: "%s - MPC Website Guide",
});

const { data: navigation } = await useAsyncData("navigation", () => {
  return fetchContentNavigation();
});

onNuxtReady(async () => {
  /* Menu toggles */
  function accordionToggle() {
    if ($(this).hasClass("js-expanded")) {
      $(this)
        .attr("aria-expanded", "false")
        .removeClass("js-expanded")
        .parent()
        .next("ul")
        .removeClass("show");
    } else {
      $(this)
        .attr("aria-expanded", "true")
        .addClass("js-expanded")
        .parent()
        .next("ul")
        .toggleClass("show");
    }
  }
  $("nav.menu button").on("click", accordionToggle);
});
</script>

<template>
  <main class="flex">
    <nav class="menu">
      <div class="head">
        <div class="site-info">
          <img
            src="/assets/logo.png"
            alt="Monterey Peninsula College logo"
            width="554"
            height="133"
            class="logo"
          />
          <span class="site-name">Website Guide</span>
        </div>
        <button class="menu-button" aria-expanded="false">
          <span class="line"></span>
          <span class="visually-hidden">Menu</span>
        </button>
      </div>
      <Menu :navigation="navigation" />
    </nav>
    <div class="main-content">
      <NuxtPage />
    </div>
  </main>
</template>
