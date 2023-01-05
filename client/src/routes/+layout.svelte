<script>
    import '../global.css';
    import github from '$lib/images/github.svg';
</script>

<nav class="top-bar">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/names" >Names</a></li>
        <li><a href="/login" >Login</a></li>
    </ul>
    <div class="right-side">
        <a href="https://github.com/MiniFroakie1/sveltekit" style="display: inline-block">
            <img alt="github logo" src={github} width="45" height="45">
        </a>
    </div>
</nav>

<slot/>
