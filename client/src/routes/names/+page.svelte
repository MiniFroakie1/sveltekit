<script>
    import './style.css';

    export let data;
    export let form;
</script>

<div>
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
    <form method="post">
        <table>
            {#if form?.missing}
                <tr>
                    <td>
                        <label class="red-error" for="name">The name field is required</label>
                    </td>
                </tr>
            {/if}
            <tr>
                <td>
                    <label for="name">Name</label>
                </td>
                <td>
                    <input name="name" id="name" type="text" value={form?.name ?? ''}><br>
                </td>
            </tr>
            <tr>
                <td>
                    <button>submit</button>
                </td>
            </tr>
        </table>
    </form>
</div>
