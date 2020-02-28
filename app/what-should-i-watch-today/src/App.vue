<template>
	<div id="app">
		<Home />
	</div>
</template>

<script>
import Home from './components/Home.vue'
import milligram from 'milligram' // CSS FRAMEWORK

export default {
	name: 'app',
	components: {
		Home
	}
}
</script>

<style lang="scss">
$font-stack: Helvetica, sans-serif;
$text-color: rgba(255, 255, 255, 0.9);
$secondary-text-color: rgba(255, 255, 255, 0.8);
$primary-color: #d54556;
$dark-color: #111215;

body {
	background-color: $dark-color;
	font-family: $font-stack;
	color: $text-color;
}
h1 {
	font-size: 5rem;
}
p {
	color: $secondary-text-color;
	font-size: 2rem;
}
button {
	background-color: $primary-color;
	border-color: $primary-color;
}
</style>
