<script setup>
import tokens from './tokens.json'

const filterTokensByType = (filterName) => {
 return Object.entries(tokens).filter((key) => {
  return key[1].type === filterName
 }).sort((a,b) => {
  return a[1].value - b[1].value
 })
}

const convertPxToRem = (px) => {
 return  0.0625  * px
}

</script>

# Typography

Astro typography is built using a [modular scale](https://alistapart.com/article/more-meaningful-typography/). We use the Major Second (1.125) scale with a base font size of 16px.

## Font Sizes

<ul class="list-none leading-none m-0 p-0 mt-4">
 <li v-for="(token, index) in filterTokensByType('fontSizes')" :index="token[0]" class="list-none mb-8">
  <p class="m-0 p-0 leading-none" :style="{ 'font-size': `${token[1].value}px` }">
   One ring to rule them all
  </p>
  <div class="flex flex-col">
  <p class="m-0 mt-2 p-0 text-sm font-mono text-gray-400">{{ token[0] }}</p>
  <span class="text-xs text-gray-400">{{token[1].value}}px / {{convertPxToRem(token[1].value)}}rem</span>
  </div>
 </li>
</ul>

## Line Height

Use our line height tokens for better control over paragraphs or content that spans multiple lines.

<ul class="list-none  m-0 p-0 mt-8">
 <li v-for="(token, index) in filterTokensByType('lineHeights')" :index="token[0]" class="list-none mb-8">
  <p class="m-0 p-0" :style="{ 'line-height': `${token[1].value}` }">
  “You cannot pass,” he said. The orcs stood still, and a dead silence fell. “I am a servant of the Secret Fire, wielder of the flame of Anor. You cannot pass. The dark fire will not avail you, flame of Udûn. Go back to the Shadow! You cannot pass.”
  </p>
  <div class="flex flex-col">
  <p class="m-0 mt-2 p-0 text-sm font-mono text-gray-400">{{ token[0] }}</p>
  <span class="text-xs text-gray-400">{{token[1].value}}</span>
  </div>
 </li>
</ul>

## Font Size / Line Height Pairings

Line height values are unitless to scale with the font size.
However, at larger font sizes, manually adjust the line height using the following pairings.

| Font Size | Line Height |
| --------- | ----------- |
| xs   | line-height-normal / 1     |
| sm   | line-height-normal / 1     |
| base   | line-height-normal / 1     |
| lg   | line-height-normal / 1     |
| xl   | line-height-tight / 1.25     |
| 2xl   | line-height-tight / 1.25     |
| 3xl   | line-height-tight / 1.25     |
| 4xl   | line-height-tight / 1.25     |
| 5xl   | line-height-tight / 1.25     |
| 6xl   | line-height-tight / 1.25     |
