<template>
  <header class="header">
    <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
    </strong>-->

    <nav class="navbar has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <g-link to="/" class="navbar-item">
            <g-image src="~/assets/img/nancy-bilodeau-logo.svg"/>
          </g-link>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" class="navbar-menu is-size-6">
          <div class="navbar-end">
            <g-link class="navbar-item" to="/coaching">Coaching</g-link>
            <g-link class="navbar-item" to="/soins">Soins</g-link>
            <g-link class="navbar-item" to="/cure">Cure</g-link>
            <g-link class="navbar-item" to="/formations">Formations</g-link>
            <a href="#" class="navbar-item">Boutique</a>
            <g-link class="navbar-item" to="/a-propos">Bio</g-link>
            <a href="#" class="navbar-item">Contact</a>
            <div class="navbar-item brands">
              <a href="https://www.facebook.com/NancyBilodeauCoaching/">
                <font-awesome :icon="['fab', 'facebook-f']"/>
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="https://www.youtube.com/channel/UCPdog-IyIN6GGL4sEl5gMdA">
                <font-awesome :icon="['fab', 'youtube']"/>
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="#">
                <font-awesome :icon="['fab', 'linkedin-in']"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  name: "Header",
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
};
</script>

