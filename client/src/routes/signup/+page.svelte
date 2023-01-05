<script>
    import '../login/login.css';

    export let form;
</script>

<div class="center">
    <form method="post" class="login">
        {#if form?.validEmail}
            <div>
                <label class="login-column" for="email"><b>Please enter a valid email</b></label>
            </div>
        {/if}
        <div>
            <label class="login-column" for="email"><b>Email</b></label>
            <input class="login-column" id="email" name="email" type="text" placeholder="Enter Email" value={form?.email ?? ''} required>
        </div>
        {#if form?.match}
            <div>
                <label class="login-column" for="password"><b>Passwords don't match</b></label>
            </div>
        {/if}
        <div>
            <label class="login-column" for="password" ><b>Password</b></label>
            <input class="login-column" id="password" name="password" type="password" placeholder="Enter Password" required>
        </div>
        <div>
            <label class="login-column" for="password2" ><b>Repeat Password</b></label>
            <input class="login-column" id="password2" name="password2" type="password" placeholder="Repeat Password" required>
        </div>
        <div>
            <button class="login-column" type="submit">Sign up</button>
        </div>
    </form>
    <div class="sign-up">
        Already have an account? <a href="/login">Log in</a>
    </div>
</div>
