<template>
	<ul class="grid grid-cols-1 gap-4">
		<li class="list-none border border-gray-100 p-4 rounded" v-for="article in data">
			<a :href="article.name" class="capitalize text-2xl no-underline">
				{{ formatName(article.name) }}
			</a>
			<ul v-if="article.subcomponents">
				subcomponents:
				<li v-for="subcomponent in article.subcomponents" class="list-none">
					<a :href="subcomponent.name">{{ subcomponent.name }} </a>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script setup>
import data from "../../components.json";
const formatName = (name) => {
	return name.replace('-', ' ')
}
</script>

<style scoped></style>
