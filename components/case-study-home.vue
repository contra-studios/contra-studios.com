<template>	
	<section class="caseStudyContainer">
    <div class="items-bar wrapper">
      <h3>Case Studies</h3>
    </div>
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

<script>
	export default {props: ['cases']}
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

.items-list .thumbnail{
	margin-bottom: 0;
	height: 300px;
	width: 100%;
}

</style>
