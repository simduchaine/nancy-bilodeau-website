<template>
  <Layout>
    <section class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Contact</h1>
        <form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
            <div class="field">
                <label class="label">Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="e.g Alex Smith">
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
                </div>
            </div>

            <div class="field">
                <label class="label">Message</label>
                <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
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
