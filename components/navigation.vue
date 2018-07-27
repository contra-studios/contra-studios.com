<template>
  <nav role="navigation" class="top-nav">
    <ul class="menu">
     <!--  <li v-if="!/\/.*?\/.*/.test(route.path)" v-for="route in this.$router.options.routes">
        <nuxt-link :to="{ name: route.name }">{{ route.name.charAt(0).toUpperCase() + route.name.slice(1) }}</nuxt-link>
      </li> -->

      <li><a href="/">Work</a></li>
      <li><a href="/">Our Process</a></li>
      <li><a href="/">Pricing</a></li>
      <li><a href="/">About Us</a></li>
      <li><a id="contactButton" href="/blog">Get in Touch</a></li>
    </ul>
  </nav>
</template>

<style>
  
  .person-name:link,
  .person-name:visited {
    width: 40%;
    display: inline-block;
    font-size: 2vw;
    text-decoration: none;
    color: #373F49;
  }

  .top-nav {
    width: 100%;
    display: inline-block;
    text-align: right;
  }

  .menu {
    display: inline-block;
  }

  .menu li {
    display: inline-block;
    margin-left: 3em;
    font-size: .7em;
    text-transform: uppercase;
  }

  .menu a:link,
  .menu a:visited {
    color: #373F49;
    text-decoration: none;
  }

  #contactButton {
    border: 1px solid;
    border-color: #BD8936;
    padding: 10px 20px;
    color: #BD8936;
    font-weight: 1000;
    box-shadow: 10px 5px 20px #D7D9D3;
  }


</style>
