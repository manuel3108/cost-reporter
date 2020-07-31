<script>
    import { name } from '../../stores/user'
    import { api } from '../../stores/google-drive'
    import { fileId, fileName } from '../../stores/config'

    $api.create($fileName).then((data) => {
        let { id } = data.result;
        $fileId = id;
        console.log(id)
    });
</script>

<span>Money is a personal thing, so let us know your name:</span>
<input class="input is-hovered" type="text" placeholder="Your Name" bind:value={$name}>
<div class="buttons is-right">
    <a href="/start/labels" class="button is-primary">Next</a>
</div>