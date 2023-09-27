<script setup>
	import tokens from '../tokens.json'

const filterTokensByType = (filterName) => {
 return Object.entries(tokens).filter((key) => {
  return key[1].type === filterName
 }).sort((a,b) => {
	return a[1].value.replace('px','') - b[1].value.replace('px','')
 })
}

const convertPxToRem = (px) => {
 return  0.0625  * px
}
</script>

# Spacing
 
Astro uses a numeric, linear spacing scale with a base unit of 4px.

<section class="border-l-4 border-green-600 text-green-600 pl-8">
	<span class="font-bold">TRY:</span> <span class="text-gray-700">to use the spacing scale when applying things like margin, padding, or gap.</span>
</section>


<details>
	<summary class="border-l-4 pl-4 border-red-400 text-red-400">
	<span class="font-bold">TRY NOT:</span> <span class="text-gray-700">to use the spacing scale for things like dimension (width/height).</span>
	</summary>
	<ul class="px-10">
		<li>Your UI will break if you use our <a href="/@TODO" class="text-pink-500">dynamic scaling feature</a>.</li>
		<li>You don't gain anything.</li>
		<li>Dimension is a separate concept.</li>
		<li>Its okay to use one off values sometimes</li>
	</ul>
</details>


<details>
	<summary class="border-l-4 pl-4 border-green-600 text-green-600 m-0">
	<span class="font-bold">TRY:</span> <span class="text-gray-700">to find the nearest step</span>
	</summary>
	<p class="px-10">
	If you have 34px, first try `spacing-8` (32px), then try `spacing-9` (36px). If nothing available fits, reevaluate why you need 32px and consider using a one off. <a href="/@TODO" class="text-pink-500">Caution with One Off Values</a>
	</p>
</details>
<details>
	<summary class="border-l-4 pl-4 border-red-400 text-red-400 mb-0">
	<span class="font-bold">TRY NOT:</span> <span class="text-gray-700">to add your own steps</span>
	</summary>
	<ul class="px-10">
		<li>We give a generous amount of steps at smaller sizes</li>
		<li>The step constraint is how the spacing system creates consistency. Too many steps will sacrifice consistency.</li>
		<li>Use caution</li>
	</ul>
</details>


<ul class="list-none leading-none m-0 p-0 mt-4">
 <li v-for="(token, index) in filterTokensByType('spacing')" :index="token[0]" class="list-none mb-3">
  <div class="m-0 p-0 leading-none" >
  <div class="h-4 block bg-gray-800" :style="{ 'width': `${token[1].value}` }"></div>
  </div>
  <div class="flex flex-col">
	<p class="m-0 mt-2 p-0 text-sm font-mono text-gray-400">{{ token[0] }}</p>
	<span class="text-xs text-gray-400">{{ token[1].value }} / {{ convertPxToRem(token[1].value.replace('px','')) }}rem</span>
  </div>
 </li>
</ul>