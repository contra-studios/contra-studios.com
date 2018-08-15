<template>	


	<section class="caseStudyContainer">
<!-- 		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css"/> -->

		<link rel="stylesheet" type="text/css" href="/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="/slick/slick-theme.css"/>
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>
    <div class="items-bar wrapper">
      <h3>Case Studies</h3>
    </div>	  
		<div class="wrapper">
			<div class="topSlider" id="topSlider">
    			<div v-for="caseStudy in cases">
    				<h1 class="slideTitle">{{caseStudy.fields.title}}</h1>
    				<p class="slideDescription">{{caseStudy.fields.description}}</p>
<!--     			<h4>Clients:<br>{{caseStudy.fields.client.fields.name}}</h4>
    			<h5>Team members:</h5>
    			<ul>
	          <li v-for="teamMember in caseStudy.fields.teamMembers">
	            <h5>{{teamMember.fields.name}}</h5>
	          </li>
	        </ul> -->

	        		<div class="caseStudyButtons">
						<a id="workButton" href="/">Work</a>
						<!-- <a id="storyButton" href="/">Story</a> -->
						<a id="storyButton"><nuxt-link :to="{ name: 'case-study-slug', params: { slug: caseStudy.fields.slug }}">Story</nuxt-link></a>
					</div>


	   			</div>
			</div>
			<!-- <div class="caseStudyButtons">
				<a id="workButton" href="/">Work</a>
				<a id="storyButton" href="/">Story</a>
				<a><nuxt-link :to="{ name: 'blog-slug', params: { slug: caseStudy.fields.slug }}">Story</nuxt-link></a>
			</div> -->
			<br>
			<div class="bottomSlider">
				<div v-for="caseStudy in cases">
					<img slot="img" class="carouselImage" :src="caseStudy.fields.previewPicture.fields.file.url + '?fit=scale&w=222&h=200'">
				</div>
			</div>
		</div>

		<script src="/js/script.js"></script>
	</section>

</template>



<script>
export default {
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


.topSlider, .bottomSlider {
	display: none;
}

.topSlider {
	width: 70%;
}

.slideTitle, .slideDescription {
	white-space: nowrap;
	width: 100%;
}

.bottomSlider img {
	padding-right: 15px;
	height: 200px;
	width: 100%;
}

.bottomSlider {
	margin-right: 10px;
}

.wrapper .slick-next {
	right: auto;
	top: 38%;
	margin-left: -15px;
	background: white;
	border-radius: 100%;
	width: 30px;
	height: 30px;
}

.wrapper .slick-prev {
	left: auto;
	top: 62%;
	z-index: 10;
	margin-left: -15px;
	background: white;
	border-radius: 100%;
	width: 30px;
	height: 30px;
}

.wrapper .slick-next:before {
	content: ">";
	color: #BD8936;
	background: transparent;
	border-radius: 100%;
	line-height: 0;
}

.wrapper .slick-prev:before {
	content: "<";
	color: #BD8936;
	background: transparent;
	border-radius: 100%;
	line-height: 0;
}

.wrapper .slick-prev:hover,
.wrapper .slick-next:hover,
.wrapper .slick-prev:focus,
.wrapper .slick-next:focus {
	background: white;
}

.wrapper .slick-prev:before, .wrapper .slick-next:before {
	opacity: 1;
	font-size: 20px;
}

.slick-slide:focus, .caseStudyButtons a, .caseStudyButtons a nuxt-link  { outline: none; } /*Hides slick outline feature*/


.caseStudyButtons #workButton {
	color: #BD8936;
	padding-right: 65px;
}

.caseStudyButtons #storyButton {
	color: #D7D9D3;
	font-size: 1em;
}

.caseStudyButtons a {
	color: #D7D9D3;
}

.caseStudyButtons a,
.caseStudyButtons a nuxt-link {
	padding-bottom: 0px;
 	font-weight: 1000;
	text-transform: uppercase;
	display: inline-block;
	text-decoration: none;
	font-size: .7em;
}

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

</style>
