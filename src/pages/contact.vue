<template>
  <Layout>
    <section class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Contact</h1>
        <iframe
          width="1350"
          height="450"
          frameborder="0"
          style="border:0; height:450px; margin-bottom: 1.5rem;"
          src="https://www.google.com/maps/embed/v1/view?zoom=15&center=46.7581%2C-71.2405&key=AIzaSyBi6IpWLQlVCG16Y7KtdCdfCBrBFTR9UkM"
          allowfullscreen
        ></iframe>
        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
          <div class="field">
            <label class="label">Nom</label>
            <div class="control">
              <input class="input" type="text">
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email">
            </div>
          </div>

          <div class="field">
            <label class="label">Message</label>
            <div class="control">
              <textarea class="textarea"></textarea>
            </div>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <div class="field">
            <div class="control">
              <input class="button submit-btn" type="submit">
            </div>
          </div>
        </form>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact"
  }
};
</script>

<style lang="scss">
.submit-btn {
  border-width: 1px;
  padding-top: calc(0.375em - 1px);
  background: transparent;
}
</style>
