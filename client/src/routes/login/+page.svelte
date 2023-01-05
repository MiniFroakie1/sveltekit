<script>
    import './login.css';

    export let form;
</script>

<div class="center">
    <form method="post" class="login">
        {#if form?.inUse}
            <div>
                <label class="login-column" for="email">Email in use</label>
            </div>
        {/if}
        <div>
            <label class="login-column" for="email"><b>Email</b></label>
            <input class="login-column" id="email" name="email" type="text" placeholder="Enter Email" required>
        </div>
        <div>
            <label class="login-column" for="password" ><b>Password</b></label>
            <input class="login-column" id="password" name="password" type="password" placeholder="Enter Password" required>
        </div>
        <div>
            <button class="login-column">Log in</button>
        </div>
    </form>
    <div class="sign-up">
        Don't have an account? <a href="/signup">sign up</a>
    </div>
</div>
