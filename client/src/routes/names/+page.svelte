<script>
    import './style.css';
    import { invalidate } from '$app/navigation';

    export let data;

    const submit = async () => {
        await invalidate('reload');
    }
</script>

<table class="api">
    <tr>
        <th>Id</th>
        <th>Name</th>
    </tr>
    {#each data.data as name}
        <tr id="{name.id}">
            <td>{name.id}</td>
            <td><a href="names/{name.id}">{name.name}</a></td>
        </tr>
    {/each}
</table>
<input>
<button on:click={submit}>submit</button>

