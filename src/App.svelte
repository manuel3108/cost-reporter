<script>
	export let application;

	import Routes from './Routes.svelte'
	import Navbar from './components/Navbar.svelte';

	import drive from 'google-drive-client-api';
	import { api, usable } from './stores/google-drive';

	$api = drive;

	drive.load("854365220059-pnbp3h1860m4h009he0h0fuadngp4stl.apps.googleusercontent.com", [], "https://www.googleapis.com/auth/drive.appdata").then(() => {
		if(!drive.isLoggedIn()) {
			drive.login().then(() => {
				$usable = true;
			}) 
		} else {
			$usable = true;
		}
	});
</script>

<style global lang="scss">
	@import "main.scss";

	main {
		max-width: 80%;;
		margin: 0 auto;
	}
</style>

<svelte:head>
	<title>{application.displayName}</title>
</svelte:head>

<Navbar bind:application></Navbar>
<main>
	<Routes></Routes>
</main>

