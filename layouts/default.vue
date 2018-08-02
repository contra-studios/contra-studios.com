<template>
  <div class="container">
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import Greeting from '~/components/greeting.vue'

  export default {
    components: {
      Greeting
    }
  }
</script>

<style>
  @font-face {
    font-family: "Avenir";
    font-weight: 400;
    font-style: normal;
    src: url("~/static/avenir-400.woff2") format("woff2");
    font-display: swap;
  }

  @font-face {
    font-family: 'butler_stencilblack';
    src: url('~/static/Butler/butler_black_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_black_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

  @font-face {
    font-family: 'butlerblack';
    src: url('~/static/Butler/butler_black-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_black-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butler_stencilbold';
    src: url('~/static/Butler/butler_bold_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_bold_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butlerbold';
    src: url('~/static/Butler/butler_bold-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butler_stencilextrabold';
    src: url('~/static/Butler/butler_extrabold_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_extrabold_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butlerextrabold';
    src: url('~/static/Butler/butler_extrabold-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_extrabold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butler_stencillight';
    src: url('~/static/Butler/butler_light_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_light_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butlerlight';
    src: url('~/static/Butler/butler_light-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butler_stencilmedium';
    src: url('~/static/Butler/butler_medium_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_medium_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butlermedium';
    src: url('~/static/Butler/butler_medium-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_medium-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butler_stencilregular';
    src: url('~/static/Butler/butler_regular_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_regular_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butlerregular';
    src: url('~/static/Butler/butler_regular-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butler_stencilultralight';
    src: url('~/static/Butler/butler_ultra_light_stencil-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_ultra_light_stencil-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

@font-face {
    font-family: 'butlerultralight';
    src: url('~/static/Butler/butler_ultra_light-webfont.woff2') format('woff2'),
         url('~/static/Butler/butler_ultra_light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}

  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,900');

  body {
    background: #E1E7EA;
    max-width: 1180px;
    margin: 0 auto;
    /*font-family: 'Lato', sans-serif;*/
    font-family: "Avenir", Tahoma, Arial, Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.65;
    color: #373F49;
  }

  .wrapper {
    padding: 2em 0;
    max-width: 80%;
    margin: 0 auto;
  }

  .header {
    background: #F7F9FA;
  }

  .page-bar {
    max-width: 100%;
    padding: 2em 10%;
  }

  .blog.header h2,
  .tag-page.header h2 {
    text-align: center;
    padding: 2.5em 0;
    color: #A0A0A0;
  }

  img {
    display: block;
    width: 100%;
  }

  h1,
  h2,
  h3 {
    font-size: 2em;
  }

  /* Copy section */
  .body-container {
    background: #ffffff;
  }

  .items-list {
    overflow: hidden;
  }

  .item {
    padding: 1em 3em 1em 0;
  }

  @media all and (min-width: 600px) {
    .item {
      float: left;
      width: 50%;
    }
  }

  @media all and (min-width: 900px) {
    .item {
      width: 33.333%;
    }
  }

  /* Shared */

  .tiny {
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 1px;
    color: #A0A0A0;
  }

  *[class*="-bar"] {
    border-bottom: 1px solid #EBEBEB;
  }

</style>
