<template>
    <header class="header">
      
      <!-- <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong> -->

      <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
        <div class="container is-fluid">
          <div class="navbar-brand">
              <g-link to="/" class="navbar-item">
                  <g-image src="~/images/nancy-bilodeau-logo.svg" />
              </g-link>

              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
              </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu is-family-secondary is-size-5">
              <div class="navbar-end">
                  <g-link class="navbar-item" to="/">
                      Home
                  </g-link>

                  <g-link class="navbar-item" to="/about">
                      About
                  </g-link>
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
    name: 'Header',
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
}
</script>
