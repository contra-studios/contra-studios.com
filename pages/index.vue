<template>
  <div>
    <header class="home header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>A&nbsp;design&nbsp;studio&nbsp;based out&nbsp;of&nbsp;New&nbsp;York,&nbsp;New&nbsp;York.</h2>
          <p>We&nbsp;bring&nbsp;spaces,&nbsp;people,&nbsp;and&nbsp;events&nbsp;to&nbsp;life through&nbsp;custom&nbsp;design&nbsp;solutions&nbsp;and&nbsp;beautiful illustration.&nbsp;What&nbsp;will&nbsp;we&nbsp;create&nbsp;together?</p>

          <div class="homeButton">
            <a id ="valuesButton" href="/values">Our Values</a>
            <a id="contactButton" href="/contact">Get in Touch</a>
          </div>
        </div>
      </div>
    </header>

    <!-- <CaseStudy></CaseStudy> -->
   <!--  <section class="caseStudyContainer">
      <div class="items-bar wrapper">
        <h3>Case Studies</h3>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section> -->

<!--     <ProcessHighlight></ProcessHighlight> -->
    <!-- <AboutUs></AboutUs> -->
    <Footer></Footer>

  </div>

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import CaseStudy from '~/components/case-study-home.vue'
import ProcessHighlight from '~/components/process-highlight.vue'
import AboutUs from '~/components/about-us.vue'
import Footer from '~/components/footer.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
  },
  components: {
    Navigation,
    CaseStudy,
    ProcessHighlight,
    AboutUs,
    Footer
  }
}
</script>

<style>



.home.header {
  overflow: hidden;
  position: relative;
  height: 70vw;
  min-height: 400px;
  max-height: 510px;
  background: #fff;
  color: #2c2c2c;
}

.home .menu a:link,
.home .menu a:visited {
  color: #2c2c2c;
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  letter-spacing: 1px;
}

.home .page-bar {
  border-bottom: 1px solid #D7D9D3;
  box-shadow: 0px 5px 30px #D7D9D3;
  line-height: .6em;
}

.home .page-info {
  padding-top: 7%;
}

.home .page-info h2 {
  font-family: 'butlerultralight', serif;
  font-size: 3.5vw;
  width: 50%;
  line-height: 120%;
  padding-bottom: 15px;
}

.home .page-info p {
  color: #5D5652;
  font-size: 1.3vw;
  min-width: 45%;
}

.home .page-info .homeButton a{
  border: 1px solid;
  padding: 10px 20px;
  font-weight: 1000;
  box-shadow: 10px 5px 20px #D7D9D3;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  font-size: .7em;
}

.home .page-info .homeButton #valuesButton {
  font-family: 'Lato', sans-serif;
  border-color: #BD8936;
  color: white;
  background-color: #BD8936;
  margin-right: 25px;
  font-weight: bold;
  letter-spacing: 1px;
}

.home .page-info .homeButton #contactButton {
  font-family: 'Lato', sans-serif;
  border-color: white;
  color: #BD8936;
  font-weight: bold;
  letter-spacing: 1px;
}

.caseStudyContainer {
  background: #EBECE9;
}

.items-bar h3 {
  padding-top: 25px;
}

.wrapper h3{
  font-size: 1.3em;
  text-transform: uppercase;
  padding-bottom: 25px;
}

@media all and (min-width: 600px) {
  .picture {
    left: 20%;
    width: 100%;
  }
}

.foreground {
  overflow: hidden;
  position: relative;
  z-index: 3;
}

.foreground p {
  margin-bottom: 1em;
}

@media all and (min-width: 600px) {
  .foreground p {
    max-width: 250px;
  }
}


</style>
