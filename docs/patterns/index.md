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

<ul class="grid grid-cols-1 gap-4">
  <li class="list-none border border-gray-100 p-4 rounded" v-for="article in articles">
    <a :href="article.name" class="capitalize text-2xl no-underline">
    {{article.name.replace('-', ' ')}}
    </a>
  </li>
</ul>
