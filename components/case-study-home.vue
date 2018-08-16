<template>	


	<section class="caseStudyContainer">
		<link rel="stylesheet" type="text/css" href="/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="/slick/slick-theme.css"/>
		<link rel="stylesheet" type="text/css" href="/css/animate.css">
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>
    <div class="items-bar wrapper">
      <h3>Case Studies</h3>
    </div>	  
		<div class="wrapper">
			<div class="topSlider slider" id="topSlider">
    			<div class="topAnimation animated" v-for="caseStudy in cases">
    				<h1 class="slideTitle">{{caseStudy.fields.title}}</h1>
    				<p class="slideDescription">{{caseStudy.fields.description}}</p>
	   			</div>
			</div>

			<div class="buttonSlider slider" id="buttonSlider">
				<div v-for="caseStudy in cases" class="caseStudyButtons">
					<nuxt-link id ="workButton" :to="{ name: 'case-study-work-slug', params: { slug: caseStudy.fields.slug }}">Work</nuxt-link>
					<nuxt-link id ="storyButton" :to="{ name: 'case-study-story-slug', params: { slug: caseStudy.fields.slug }}">Story</nuxt-link>
				</div>
			</div>
				
			<div class="bottomSlider slider">
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

.topSlider .slick-slide {
	opacity: 0;
	transition: opacity 2s ease-out;
}

 .topSlider .slick-active {
	opacity: 1 !important;
	transition: opacity 2s ease-in;
}

.topSlider .slick-cloned {
	opacity: 0.1;
}

.topSlider, .bottomSlider, .buttonSlider {
	display: none;
}

/*.invisible {
	opacity: 0;
}

.slideOutLeft,
.slideInRight {
  animation-duration: 1s;
}

.topAnimationIn {
	animation-name: title-slide-in;
	animation-duration: 2s;
}

.topAnimationOut {
	animation-name: title-slide-out;
	animation-duration: 1s;
}

.keepSlideInvisible {
	animation-name: keep-invisible;
	animation-duration: 5s;
}*/

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
	margin-bottom: 10px;
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

.caseStudyButtons{
	margin-bottom: 1rem;
}


@media (min-width: 900px){
 .caseStudyItem {
		width: 100%;
	}
}

/* Keyframes */
/*@keyframes title-slide-in {
	0%{
		opacity: 0;
	}
	50%{
		opacity: .3;
	}
	100% {
		opacity: 1;
	}
}
@keyframes title-slide-out {
	0%{
		opacity: 1;
	}
	100% {
		opacity: 0;
	}

}

@keyframes keep-invisible {
	
	0%{
		opacity: 0;
	}
	100% {
		opacity: 0;
	}
}*/

</style>
