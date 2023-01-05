<script>
    import './error.css';
    import { page } from "$app/stores";
    // noinspection JSUnresolvedVariable
    const code = $page.error.code;
</script>
{#if code === 404}
    <div class="error">
        <h1 class="error-code">404</h1>
        <h1>Page not found</h1>
    </div>
{/if}
