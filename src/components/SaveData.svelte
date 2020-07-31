<script>
    import { name } from '../stores/user'
    import { labels } from '../stores/labels'
    import { api } from '../stores/google-drive'
    import { fileName, fileId } from '../stores/config'

    function prepareData() {
        let data = {
            "user": {
                "name": $name,
            },
            "labels": {
                "labels": $labels,
            }
        }

        return data;
    }

    function save() {
        let appdata = prepareData();
        
        $api.update($fileId, JSON.stringify(appdata));
    }
</script>

<button class="button is-primary" on:click={save}>Save</button>