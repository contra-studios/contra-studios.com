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
        <Contact></Contact>
    </div>

    <Footer></Footer>

  </div>

</template>

<script>
import Navigation from '~/components/navigation.vue'
import Footer from '~/components/footer.vue'
import Contact from '~/components/contact.vue'

export default {
  components: {
    Navigation,
    Footer,
    Contact
  }
}
</script>

<style>


</style>
