<template>	

	<section class="caseStudyContainer">
<!-- 		<link rel="stylesheet" type="text/css" href="~/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="~/slick/slick-theme.css"/> -->
    <div class="items-bar wrapper">
      <h3>Case Studies</h3>
    </div>

    <div>
    <b-carousel id="caseStudyCarousel"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators=true
                background="#ababab"
                :interval="0"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >
    <ul class="caseStudyList">
    	<li class="caseStudyItem" v-for="caseStudy in cases">
    		<b-carousel-slide>
    			<img slot="img" class="d-block img-fluid w-100" :src="caseStudy.fields.previewPicture.fields.file.url + '?fit=scale&w=1024&h=480'">
    			<h1>{{caseStudy.fields.title}}</h1>
    			<p>{{caseStudy.fields.description}}</p>
    			<h4>Clients:<br>{{caseStudy.fields.client.fields.name}}</h4>
    			<h5>Team members:</h5>
    			<ul>
	          <li v-for="teamMember in caseStudy.fields.teamMembers">
	            <h5>{{teamMember.fields.name}}</h5>
	          </li>
	        </ul>


    		</b-carousel-slide>
        <!-- <h1>{{caseStudy.fields.title}}</h1>
        <p>{{caseStudy.fields.description}}</p>
        <img class="thumbnail"
      	:src="caseStudy.fields.previewPicture.fields.file.url + '?fit=scale&w=350&h=196'"
    		>
        <h4>{{caseStudy.fields.client.fields.name}}</h4>
        <ul>
          <li v-for="teamMember in caseStudy.fields.teamMembers">
            <h5>{{teamMember.fields.name}}</h5>
          </li>
        </ul>
        <br> -->
      </li>
    </ul>

      <!-- Text slides with image -->
      <b-carousel-slide caption="First slide"
                        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
             src="https://picsum.photos/1024/480/?image=55" alt="image slot">
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
          ut lacus vel interdum.
        </p>
      </b-carousel-slide>

    </b-carousel>

<!--     <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

  </div>

<!--     <carousel>
		  <slide>
		  <div><img src="../designs/v1.jpg"></div>
		  </slide>
		  <slide>
		    <div><img src="../designs/v1.jpg"></div>
		  </slide>
		  <slide>
		    <div><img src="../designs/v1.jpg"></div>
		  </slide>
		</carousel>
 -->
	  

<!--     <div class="your-class">
		  <div><img src="../designs/v1.jpg"></div>
		  <div><img src="../designs/v1.jpg"></div>
		  <div><img src="../designs/v1.jpg"></div>
		</div> -->

		<ul class="items-list wrapper">
      <li class="item" v-for="caseStudy in cases">
        <h1>{{caseStudy.fields.title}}</h1>
        <p>{{caseStudy.fields.description}}</p>
        <img class="thumbnail"
      	:src="caseStudy.fields.previewPicture.fields.file.url + '?fit=scale&w=350&h=196'"
    		>
        <h4>{{caseStudy.fields.client.fields.name}}</h4>
        <ul>
          <li v-for="teamMember in caseStudy.fields.teamMembers">
            <h5>{{teamMember.fields.name}}</h5>
          </li>
        </ul>
        <br>
      </li>
    </ul>
   </section>

</template>

<!-- <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="~/slick/slick.min.js"></script>


<script type="text/javascript" src="../assets/js/script.js">
</script> -->

<script>
// import { Carousel, Slide } from 'vue-carousel'
export default {
  // components: {
  //   Carousel,
  //   Slide
  // },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  props: ['cases']}
</script>

<!-- <script type="text/JavaScript">
	import {createClient} from '~/plugins/contentful.js'

	const client = createClient()

	export default {
// 'env' is available in the context object
	  asyncData ({env}) {
	    return Promise.all([
// fetch all case studies sorted by creation date
	      client.getEntries({
	        'content_type': env.CTF_CASE_STUDY_TYPE_ID,
	        order: '-sys.createdAt'
	      })
	    ]).then(([cases]) => {
// return data that should be available in the template
	      return {
	        case: cases.items
	      }
	    }).catch(console.error)
	  }
}

</script> -->


<style>


.caseStudyContainer {
  background: #EBECE9;
}

.items-bar {
	padding-bottom: 0px;
}

.items-bar h3 {
  padding-top: 50px;
  padding-bottom: 0px;
}

.items-list {
	padding-top: 25px;
}

.items-list p {
	font-size: 1.2em;
}

.items-list li {

}

.caseStudyList{
	margin-bottom: 0;
}

@media (min-width: 900px){
 .caseStudyItem {
		width: 100%;
	}
}

/*.items-list .thumbnail{
	margin-bottom: 0;
	height: 300px;
	width: 100%;
}*/

</style>
