<script>
    import { name } from '../../stores/user'
</script>

<span>Money is a personal thing, so let us know your name:</span>
<input class="input is-hovered" type="text" placeholder="Your Name" bind:value={$name}>
<div class="buttons is-right">
    <a href="/start/labels" class="button is-primary">Next</a>
</div>