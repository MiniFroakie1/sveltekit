<script>
    import '../global.css'
</script>

<div class="app">
    <nav class="top-bar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/names" >Names</a></li>
        </ul>
    </nav>

    <main>
        <slot/>
    </main>
</div>
