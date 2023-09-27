<script setup>
import tokens from '../tokens.json'

const filterTokensByType = (filterName) => {
 return Object.entries(tokens).filter((key) => {
  return key[1].type === filterName
 }).sort((a,b) => {
  return a[1].value - b[1].value
 })
}


const dimensionTokens = tokens.icon.size
const convertPxToRem = (px) => {
 return  0.0625  * px
}

</script>

# Dimension

## Icon Size

Icon sizes map 1:1 with font sizes.

<ul class="list-none leading-none m-0 p-0 mt-4">
	<li v-for="(token, index) in dimensionTokens" :index="token[0]" class="list-none mb-8">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :style="{ 'height': `${token.value}px`, 'width': `${token.value}px` }">
		<path fill-rule="evenodd" d="m12.68 2.245.162.071 8 4c.588.295.977.873 1.033 1.52l.007.164v8c0 .658-.343 1.264-.897 1.604l-.143.08-8 4a1.883 1.883 0 0 1-1.522.071l-.162-.071-8-4a1.882 1.882 0 0 1-1.033-1.52L2.118 16V8c0-.658.343-1.264.897-1.604l.143-.08.27-.136a1 1 0 0 1 .259-.13l7.471-3.734a1.882 1.882 0 0 1 1.356-.127l.166.056ZM4 8.179V16l7 3.5v-6.946L4 8.179Zm9 4.439 7-3.5V16l-7 3.5v-6.882ZM18.5 15a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM6 15.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM16.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm-8.5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM9.5 13a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm5.5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM12 4 5.937 7.03l6.116 3.824 6.828-3.413L12 4Zm.5 5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM12 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm.5-1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"/>
	</svg>
		<div class="flex flex-col">
			<p class="m-0 mt-2 p-0 text-sm font-mono text-gray-400">icon-size-{{ index }}</p>
			<span class="text-xs text-gray-400">{{token.value}}px / {{convertPxToRem(token.value)}}rem</span>
			<span class="text-xs text-gray-400">{{token.description}}</span>
		</div>
	</li>
</ul>

## Icon / Font Size Pairing



<ul class="list-none leading-none m-0 p-0 mt-4">
	<li v-for="(token, index) in dimensionTokens" :index="token[0]" class="list-none mb-8">
		<div class="flex" :style="{ 'font-size': `${token.value}px` }">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :style="{ 'height': `${token.value}px`, 'width': `${token.value}px` }">
			<path d="M13.2 7.07 10.25 11l2.25 3c.33.44.24 1.07-.2 1.4a.994.994 0 0 1-1.4-.2c-1.05-1.4-2.31-3.07-3.1-4.14-.4-.53-1.2-.53-1.6 0l-4 5.33c-.49.67-.02 1.61.8 1.61h18c.82 0 1.29-.94.8-1.6l-7-9.33a.993.993 0 0 0-1.6 0Z"/>
			</svg>
			The Misty Mountain
		</div>
		<div class="flex flex-col">
			<p class="m-0 mt-2 p-0 text-sm font-mono text-gray-400">icon-size-{{ index }} / font-size-{{index}}</p>
			<span class="text-xs text-gray-400">{{token.value}}px / {{convertPxToRem(token.value)}}rem</span>
		</div>
	</li>
</ul>

@TODO - Text Icon Gap tokens
| Token | Value |
| ----- | ----- |
| text-icon-gap-90 | 4px |
| text-icon-gap-80 | 4px |
| text-icon-gap-100 | 5px |
| text-icon-gap-200 | 6px |
| text-icon-gap-300 | 6px |
| text-icon-gap-400 | 7px |
| text-icon-gap-500 | 8px |
| text-icon-gap-600 | 9px |
| text-icon-gap-700 | 10px |
| text-icon-gap-800 | 11px |