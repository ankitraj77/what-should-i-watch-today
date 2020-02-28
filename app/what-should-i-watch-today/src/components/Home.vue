<template>
	<div class="home">
		<main class="container main">
			<div class="row">
				<section class="column">
					<img :src="movie.poster" :alt="movie.name" />
				</section>
				<section class="column">
					<h1>{{ movie.name }}</h1>
					<h2>hello</h2>
					<p>{{ movie.description }}</p>
					<button @click="getMovies" class="button-large">
						Next
					</button>
				</section>
			</div>
			<footer>
				<img class="attribution" :src="attribution" alt="TMDB Logo" />
			</footer>
		</main>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'Home',
	props: {
		msg: String
	},
	data: function() {
		return {
			movie: {
				name: 'Secondhand Lions',
				poster:
					'https://m.media-amazon.com/images/M/MV5BMDExNDM3OGQtYjI3ZC00MmE0LWE0OGEtMzgxZDY2MDE1MDFjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,695,1000_AL_.jpg',
				description:
					'A coming-of-age story about a shy, young boy sent by his irresponsible mother to spend the summer with his wealthy, eccentric uncles in Texas.'
			},
			attribution:
				'https://www.themoviedb.org/assets/2/v4/logos/powered-by-rectangle-green-dcada16968ed648d5eb3b36bbcfdd8cdf804f723dcca775c8f2bf4cea025aad6.svg'
		}
	},
	methods: {
		getMovies: function() {
			console.log('Getting movies')
			axios.get('localhost:3000/get-movies').then(response => {
				console.log(response)
			})
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
	margin-top: 15vh;
}
.button-large {
	font-size: 2.2rem;
	height: 6.5rem;
	line-height: 4.5rem;
	padding: 0 6rem;
	width: 100%;
}
footer {
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	margin: 4rem 0;
	padding: 2rem 0;
	text-align: right;
}
.attribution {
	width: 100px;
}
@media only screen and (max-width: 40rem) {
	.home {
		margin-top: 0;
	}
}
</style>
