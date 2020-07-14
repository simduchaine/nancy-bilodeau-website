<template>
  <div class="container">
    <div class="columns is-marginless is-centered">
      <div class="column is-three-quarters has-text-centered" style="padding-top:2.5rem;">
        <h1 v-html="$static.servicesEn.title" class="title"></h1>
        <div v-html="$static.servicesEn.content"></div>
      </div>
    </div>

    <!-- Begin Mailchimp Signup Form -->
    <div id="mc_embed_signup" class="columns is-centered">
      <div class="column is-half">
        <form
          action="https://nancybilodeau.us20.list-manage.com/subscribe/post?u=23c00cdf65b51791bb6e5bda3&amp;id=16ac9ef9aa"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group field is-horizontal">
              <div class="field-label">
                <label for="mce-FNAME" class="label">First Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input type="text" value name="FNAME" class="input" id="mce-FNAME" />
                  </div>
                </div>
              </div>
            </div>
            <div class="mc-field-group field is-horizontal">
              <div class="field-label">
                <label for="mce-LNAME" class="label">Last Name</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input type="text" value name="LNAME" class="input" id="mce-LNAME" />
                  </div>
                </div>
              </div>
            </div>

            <div class="mc-field-group field is-horizontal">
              <div class="field-label">
                <label for="mce-EMAIL" class="label">Email</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input
                      type="email"
                      value
                      name="EMAIL"
                      class="required email input"
                      id="mce-EMAIL"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="mc-field-group input-group" hidden>
              <input
                type="checkbox"
                value="4"
                name="group[6174][4]"
                id="mce-group[6174]-6174-0"
                checked
              />
              <label for="mce-group[6174]-6174-0">Website_Lead_Gen</label>
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_23c00cdf65b51791bb6e5bda3_16ac9ef9aa" tabindex="-1" value />
            </div>
            <div class="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<static-query>
query {
  servicesEn(path: "/data-en/home/magnet") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Magnet"
};
</script>

<style lang="scss" scoped>
/* input:not(.button) {
  width: 100%;
} */
.field-label {
  text-align: left;
}
.button {
  padding-top: 0.2em;
  margin-top: 0.5em;
}
</style>
