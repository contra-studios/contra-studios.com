<template>
  <div>
    <header class="header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <Navigation></Navigation>
        </div>
      </div>
    </header>

    <div class="body wrapper">
        <h1>Get In Touch Page</h1>
    </div>

    <Footer></Footer>

  </div>

</template>

<script>
import Navigation from '~/components/navigation.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>


</style>
