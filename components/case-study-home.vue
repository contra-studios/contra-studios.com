<template>
	
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

</template>

<script>
	import {createClient} from '~/plugins/contentful.js'
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
	    ArticlePreview
	  }
}

</script>


<style>

.caseStudyContainer {
  background: #EBECE9;
}

.items-bar h3 {
  padding-top: 25px;
}

</style>
