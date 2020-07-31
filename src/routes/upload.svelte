<script>
	let files = {
		accepted: [],
		rejected: [],
	};

	function handleFilesSelect(e) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}
</script>

<style global lang="scss">
	:global(custom-dropzone) {
		background-color: red;
	}
</style>

<div tabindex="0" class="dropzone">
	<div class="file">
		<label class="file-label">
			<input class="file-input" type="file" name="resume">
			<span class="file-cta">
				<span class="file-icon">
					<i class="fas fa-upload"></i>
				</span>
				<span class="file-label">
					Choose a file…
				</span>
			</span>
		</label>
	</div>
</div>
<ol>
	{#each files.accepted as item}
		<li>{item.name}</li>
	{/each}
</ol>
