<script>
	import { api, usable } from "./../stores/google-drive";
	import { fileName, fileId } from "./../stores/config";
	import { goto } from '../components/GoTo.svelte'

	$: {
		if($usable) {
			checkFiles();
		}
	}

	function checkFiles() {
		$api.list().then((data) => {
			let { files } = data.result;
			
			if(files.length == 0) {
				goto("/start")
			} else {
				files.forEach(file => {
					if(file.name === $fileName) {
						$fileId = file.id;
						downloadConfig();
					}
				});
			}
		})
	}

	function downloadConfig() {
		$api.download($fileId).then((data) => {
			console.log(data)
		})
	}
</script>

{#if $usable}
	<span>some fancy dashboard</span>
{:else}
	<span>Loading...</span>
{/if}
