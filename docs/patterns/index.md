<script setup>
import data from '../data.json'

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

<ul>
<div v-for="article in articles">

<li><a :href="article.name">{{ article.name }}</a></li>


</div>
</ul>