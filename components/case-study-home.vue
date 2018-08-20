<template>	
	<div class="caseStudyContainer">
		<link rel="stylesheet" type="text/css" href="/slick/slick.css"/>
		<link rel="stylesheet" type="text/css" href="/slick/slick-theme.css"/>
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>  
		<!-- <div class="wrapper sliderContainer"> -->
			<div class="topSlider slider" id="topSlider">
    			<div class="case-slide" v-for="caseStudy in cases">
    				<h1 class="slideTitle">{{caseStudy.fields.title}}</h1>
    				<p class="slideDescription">{{caseStudy.fields.description}}</p>
	   			</div>
			</div>

			<div class="buttonSlider slider" id="buttonSlider">
				<div v-for="caseStudy in cases" class="caseStudyButtons case-slide">
					<nuxt-link id ="workButton" :to="{ name: 'case-study-work-slug', params: { slug: caseStudy.fields.slug }}">Work</nuxt-link>
					<nuxt-link id ="storyButton" :to="{ name: 'case-study-story-slug', params: { slug: caseStudy.fields.slug }}">Story</nuxt-link>
				</div>
			</div>
				
			<div class="bottomSlider slider">
				<div v-for="caseStudy in cases" class="case-slide">
					<nuxt-link id ="workButton" :to="{ name: 'case-study-work-slug', params: { slug: caseStudy.fields.slug }}"><img slot="img" class="carouselImage" :src="caseStudy.fields.previewPicture.fields.file.url"></nuxt-link>
				</div>
			</div>
		<!-- </div> -->

		<script src="/js/script.js"></script>
	</div>
</template>



<script>
export default {
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
	transition: opacity 1s ease-out;
}

 .topSlider .slick-active {
	opacity: 1 !important;
	transition: opacity 2s ease-in;
}

.topSlider .slick-cloned {
	opacity: 0.1;
}

.bottomSlider {
    visibility: hidden;
}
.bottomSlider.slick-initialized {
    visibility: visible;
}

/*.topSlider, .bottomSlider, .buttonSlider {
	overflow: hidden;
}*/

/*.caseStudyContainer {
    animation-name: case-study-fade;
    animation-duration: 5s;
}*/

.case-slide:nth-child(n+1) {
    display: none;
}

.slick-initialized,
.case-slide:first-child { 
    display: block;
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


.caseStudyButtons{
	margin-bottom: 1rem;
}


@media (min-width: 900px){
 .caseStudyItem {
		width: 100%;
	}
}

/* Keyframes */
/*@keyframes case-study-fade{ 
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
 }*/
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
