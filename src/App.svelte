<script>
	export let application;

	import Routes from './Routes.svelte'
	import Navbar from './components/Navbar.svelte';
</script>

<style global lang="scss">
	@import "main.scss";
</style>

<Navbar bind:application></Navbar>
<main>
	<Routes></Routes>
</main>

