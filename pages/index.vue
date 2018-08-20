<template>
  <div>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <header class="home header">
      <div class="foreground">
        <div class="page-bar wrapper">
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>A design studio based out of New York, New York.</h2>
          <p>We bring spaces, people, and events to life through custom design solutions and beautiful illustration. What will we create together?</p>

          <div class="homeButton">
            <a id="valuesButton" href="/">Our Values</a>
            <a id="contactButton" href="/">Get in Touch</a>
          </div>
        </div>
      </div>
    </header>

    <div class="caseStudyContainer">
      <div class="wrapper sliderContainer">
        <h3>Case Studies</h3>
        <no-ssr><CaseStudy v-bind:cases="cases"></CaseStudy></no-ssr>
      </div>
    </div>
    

    <ProcessHighlight></ProcessHighlight>
    <AboutUs></AboutUs>
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
import ArticlePreview from '~/components/article-preview.vue'
import NoSSR from 'vue-no-ssr'

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
      }),
      client.getEntries({
        'content_type': env.CTF_CASE_STUDY_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts, cases]) => {
      return {
        person: entries.items[0],
        posts: posts.items,
        cases: cases.items
      }
    }).catch(console.error)
  },
  components: {
    Navigation,
    CaseStudy,
    ProcessHighlight,
    AboutUs,
    Footer,
    ArticlePreview,
    'no-ssr': NoSSR
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
  font-size: 2.5vw;
  width: 50%;
}

.home .page-info p {
  color: #000; /*COLOR?*/
  min-width: 37%;
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
  border-color: #BD8936;
  color: white;
  background-color: #BD8936;
  margin-right: 25px;
}

.home .page-info .homeButton #contactButton {
  border-color: white;
  color: #BD8936;
}

.caseStudyContainer {
  background: #EBECE9;
  animation-name: case-study-fade;
  animation-duration: 4s;
  /*animation-timing-function: ease;*/
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


/* Keyframes */
@keyframes case-study-fade{ 
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
 }


</style>
