<script setup>
import data from '../components.json'

// sort articles
const articles = data.sort(
  (a, b) => new Date(b.Updated) - new Date(a.Updated)
)

const transformDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
</script>

# Patterns

<ul class="list-none">
<div v-for="article in articles">
<li>
	<a :href="article.name">{{ article.name }}</a>
	<ul v-if="article.subcomponents">
	<li v-for="subcomponent in article.subcomponents">
	 <a :href="subcomponent.name">-> {{subcomponent.name}} </a>
	</li>
	</ul>
</li>

</div>
</ul>
