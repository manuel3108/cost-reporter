<script>
	import Navaid from 'navaid';
	import { onDestroy } from 'svelte';
	import AppIndex from './routes/app/index.svelte'
	import Index from './routes/index.svelte'
	import StartIndex from './routes/start/index.svelte'
	import StartLabels from './routes/start/labels.svelte'
	import Upload from './routes/upload.svelte'
	let Route;
	let params=undefined
	let uri = location.pathname;

	function track(obj) {
		uri = obj.state || obj.uri || location.pathname;
		if (window.ga) ga.send('pageview', { dp:uri });
	}

	addEventListener('replacestate', track);
	addEventListener('pushstate', track);
	addEventListener('popstate', track);

	const router = Navaid('/')
		.on('/app/', () => {params = undefined; Route = AppIndex;})
		.on('/', () => {params = undefined; Route = Index;})
		.on('/start/', () => {params = undefined; Route = StartIndex;})
		.on('/start/labels', () => {params = undefined; Route = StartLabels;})
		.on('/upload', () => {params = undefined; Route = Upload;})
		.listen();
	onDestroy(router.unlisten);
</script>

{#if params === undefined}
	<svelte:component this={Route}/>
{:else}
	<svelte:component this={Route} {params} />
{/if}