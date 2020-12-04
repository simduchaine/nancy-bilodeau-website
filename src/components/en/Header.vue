<template>
  <header class="header">
    <nav
      class="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container is-fluid">
        <div class="navbar-brand">
          <g-link to="/en/" class="navbar-item">
            <g-image src="~/assets/img/nancy-bilodeau-logo.svg" />
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
            <g-link class="navbar-item" to="/en/holistic-coaching"
              >Coaching</g-link
            >
            <g-link class="navbar-item" to="/en/services">Services</g-link>
            <g-link class="navbar-item" to="/en/detox">Detox</g-link>
            <g-link class="navbar-item" to="/en/training">Training</g-link>
            <g-link class="navbar-item" to="/en/shop">Shop</g-link>
            <g-link class="navbar-item" to="/en/about">Bio</g-link>
            <g-link class="navbar-item" to="/en/contact">Contact</g-link>
            <div class="navbar-item brands">
              <a href="https://www.facebook.com/NancyBilodeauCoaching/">
                <font-awesome :icon="['fab', 'facebook-f']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a
                href="https://www.youtube.com/channel/UCel4Y254TeW2NpNyw37RTcA"
              >
                <font-awesome :icon="['fab', 'youtube']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="https://ca.linkedin.com/in/nancybilodeau">
                <font-awesome :icon="['fab', 'linkedin-in']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="https://www.pinterest.ca/nbilode/">
                <font-awesome :icon="['fab', 'pinterest']" size="xs" />
              </a>
            </div>
            <div class="navbar-item brands">
              <a href="https://www.instagram.com/nancybilodeauinsta/">
                <font-awesome :icon="['fab', 'instagram']" size="xs" />
              </a>
            </div>
            <g-link class="navbar-item" style="color:#004369" to="/">Fr</g-link>
          </div>
        </div>
      </div>
    </nav>
    <div id="siteWidgetEnglish">
      <div class="active">
        <a href="https://coaching.nancybilodeau.com/en/">
          For me
          <span>Perso</span>
        </a>
      </div>
      <div>
        <a href="https://corpo.nancybilodeau.com/en/">
          For my company
          <span>Corpo</span>
        </a>
      </div>
    </div>
  </header>
</template>

<static-query>
query {
  metadata {
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
      $navbarBurgers.forEach((el) => {
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
  },
};
</script>

<style lang="scss">
#siteWidgetEnglish {
  position: fixed;
  top: 4rem;
  left: -154px;
  z-index: 1;
  transition: left 0.5s;
  .active {
    //background: #d05208;
    background: #004369;
    a {
      color: white;
    }
  }
  a {
    display: flex;
    justify-content: space-between;
    span {
      padding-left: 1.2rem;
    }
  }
  &:hover {
    left: 0;
  }
  div {
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    background: white;
    margin-bottom: 5px;
    border: #004369 1px solid;
    //border: #d05208 1px solid;
  }
}
</style>
