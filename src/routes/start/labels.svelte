<script>
    import { labels } from '../../stores/labels'
</script>

<span>Here is a list of some predifined Labels, feel free to remove them</span>
<br>

<table class="table is-striped">
    <tbody>
        {#each $labels as label}
            <tr>
                <td><span>{label}</span></td>
                <td><button class="button is-warning is-small">Remove</button></td>
            </tr>
        {/each}
    </tbody>
</table>
<div class="buttons is-right">
    <a href="/app" class="button is-primary">Finish</a>
</div>

