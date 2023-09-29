<script setup>
import tokens from '@astrouxds/tokens/dist/json/docs.json'
import { onMounted, ref, computed } from 'vue'

let token = ref('')

const getTokenName = () => {
	return tokens.find(token => token.name === props.token)

}
onMounted(() => {
	token.value = getTokenName()
})

const valueInPx = computed(() => {
	if (!token.value.value) {
		return false
	}
	if (token.value.value.toString().includes('rem')) {
		return (token.value.value.toString().replace('rem', '') * 16)
	}
	return false
})



const props = defineProps(['token'])

</script>
 
<template>
	<sl-tooltip placement="right">
		<div slot="content" class="bg-gray-100 border shadow-2xl rounded-lg p-4 flex flex-col z-[9999px]">
			<span v-if="token.category === 'fontSizes'" :style="{ 'font-size': token.value }"
				class="p-4 border text-center bg-white mb-4">Aa</span>
			<span v-if="token.category === 'lineHeights'" :style="{ 'line-height': token.value }"
				class="p-4 border text-center bg-white mb-4">“You cannot pass,” he said. The orcs stood still, and a dead
				silence fell. “I am a servant of the Secret Fire, wielder of the flame of Anor. You cannot pass. The dark
				fire will not avail you, flame of Udûn. Go back to the Shadow! You cannot pass.”</span>
			<span v-if="token.category === 'dimension'" class="bg-white border mb-4 p-4 flex">
				<div :style="{ 'width': token.value, 'height': token.value }" class="bg-gray-500 block m-auto"></div>
			</span>
			<span v-if="token.category === 'spacing'" class="bg-white border mb-4 p-4 flex">
				<div :style="{ 'width': token.value, 'height': '40px' }" class="bg-gray-500 block m-auto"></div>
			</span>
			<span class="text-2xl">{{ token.name }}</span>
			<span class="mt-1 text-sm font-mono text-gray-400">var(--{{ token.name }}) </span>
			<div class="mt-4 mb-4">
				<span v-if="valueInPx">
					{{ valueInPx }}px /
				</span>
				{{ token.value }}
			</div>
			<p class="p-0 m-0 text-gray-500" v-if="token.description">
				{{ token.description }}
			</p>
			<div v-if="token.referenceToken" class="flex items-center justify-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" class="mr-2">
					<path fill="#888"
						d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
				</svg>
				<span class="bg-gray-50 px-2 border rounded-3xl py-1 flex items-center gap-1 text-gray-500 font-mono my-2">

					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
						<path fill="#888"
							d="m12 22-9-5V7l9-5 9 5v10l-9 5ZM9.1 9.25q.575-.6 1.325-.925T12 8q.825 0 1.575.325t1.325.925l3-1.675L12 4.3 6.1 7.575l3 1.675Zm1.9 9.9v-3.275q-1.35-.35-2.175-1.425T8 12q0-.275.025-.513t.1-.487L5 9.25v6.575l6 3.325ZM12 14q.825 0 1.413-.588T14 12q0-.825-.588-1.413T12 10q-.825 0-1.413.588T10 12q0 .825.588 1.413T12 14Zm1 5.15 6-3.325V9.25L15.875 11q.075.25.1.488T16 12q0 1.375-.825 2.45T13 15.875v3.275Z" />
					</svg>
					{{ token.referenceToken }}
				</span>
			</div>


		</div>
		<span
			class="max-w-fit bg-gray-50 px-2 py-1 border rounded-3xl inline-flex items-center gap-1 text-gray-500 font-mono  align-middle leading-none">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
				<path fill="#888"
					d="m12 22-9-5V7l9-5 9 5v10l-9 5ZM9.1 9.25q.575-.6 1.325-.925T12 8q.825 0 1.575.325t1.325.925l3-1.675L12 4.3 6.1 7.575l3 1.675Zm1.9 9.9v-3.275q-1.35-.35-2.175-1.425T8 12q0-.275.025-.513t.1-.487L5 9.25v6.575l6 3.325ZM12 14q.825 0 1.413-.588T14 12q0-.825-.588-1.413T12 10q-.825 0-1.413.588T10 12q0 .825.588 1.413T12 14Zm1 5.15 6-3.325V9.25L15.875 11q.075.25.1.488T16 12q0 1.375-.825 2.45T13 15.875v3.275Z" />
			</svg>
			{{ props.token }}
		</span>
	</sl-tooltip>
</template>