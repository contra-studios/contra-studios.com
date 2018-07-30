<template>
  <div>
    <header class="home header">
<!--  BACKGROUND IMAGE SAMPLE      <div class="picture">
        <img :src="person.fields.image.fields.file.url + '?w=1200'">
      </div> -->
      <div class="foreground">
        <div class="page-bar wrapper">
          <!-- <a href="/" class="person-name">Contra Studios</a> -->
          <!-- <a class="logoWrapper" href="/">
            <img class="siteLogo" src="../assets/images/logo.svg">
          </a> -->
          <Navigation></Navigation>
        </div>
        <div class="page-info wrapper">
          <h2>A design studio based out of New York, New York.</h2>
          <p>We bring spaces, people, and events to life through custom design solutions and beautiful illustration. What will we create together?</p>

          <div class="homeButton">
            <a id ="valuesButton" href="/">Our Values</a>
            <a id="contactButton" href="/">Get in Touch</a>
          </div>
        </div>
      </div>
    </header>

    <section class="caseStudyContainer">
      <div class="items-bar wrapper">
        <h3>Case Studies</h3>
      </div>
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>

    <section class="processHighlightContainer">
      <div class="process-bar wrapper">
        <h3>Process Highlight</h3>
      </div>
    </section>

    <section class="aboutUsContainer">
      <div class="about-bar wrapper">
        <h3>About Us</h3>

        <a id ="bookTableButton" href="/">Book a Table</a>
      </div>
    </section>

    <section class="footer">
      <div class="wrapper">
        <h4>Contra Studios</h4>
          <ul class="footerList">
            <li><a href="/">About</a></li><span>&#124;</span>
            <li><a href="/">Menu</a></li><span>&#124;</span>
            <li><a href="/">Reservation</a></li><span>&#124;</span>
            <li><a href="/">Functions</a></li><span>&#124;</span>
            <li><a href="/">Contact</a></li>
          </ul>
      </div>
    </section>
  </div>

</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Navigation from '~/components/navigation.vue'
import ArticlePreview from '~/components/article-preview.vue'

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
    ArticlePreview
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

.home .person-name:link,
.home .person-name:visited {
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
}

.processHighlightContainer {
  background: #fff; 
}

.aboutUsContainer {
  background: #EBECE9;
}

.items-bar h3 {
  padding-top: 25px;
}

.process-bar h3 {
  text-align: right;
}

.about-bar h3 {
  text-align: left;
}

.wrapper h3{
  font-size: 1.3em;
  text-transform: uppercase;
  padding-bottom: 25px;
}

#bookTableButton {
  border-color: #BD8936;
  color: white;
  background-color: #BD8936;
  margin-right: 25px;
  border: 1px solid;
  padding: 10px 20px;
  box-shadow: 10px 5px 20px #D7D9D3;
  text-transform: uppercase;
  display: inline-block;
  text-decoration: none;
  font-size: .7em;
}

.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
  background-color: #857b7a; /*This color Needs to be matched to scheme*/
}

.footer h4 {
  text-align: left;
  font-size: 1.4em;
  padding-bottom: 35px;
}

.footerList{
  list-style: none;
  width: 100%;
  height: 90px;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}

.footerList > li {
  display: inline-block;
  height: 100%;
  padding-right: 25px;
  padding-left: 25px;
}

.footerList a:link,
.footerList a:visited {
  color: white;
  text-transform: uppercase; 
  text-decoration: none;
}

/*.picture {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0%;
  right: 0;
  width: 150%;
}*/

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
