import { compare } from "$lib/hashing/hash.js";
import {fail, redirect} from "@sveltejs/kit";

/** @type {import('./types').Actions} */
export const actions = {
    default: async ({ cookies, request, fetch }) => {
        const formData = await  request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        const res = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email
            }),
            headers: {
                Authorization: process.env.API_KEY
            }
        });

        if(res.status === 404) {
            return fail(400, { email, inUse: true });
        }

        const result = await res.json().then(([rows]) => { return rows });

        console.table(result);

        if(await compare(password, result.password)) {
            console.log(`logged in as ${result.email}`);

            // noinspection JSUnresolvedVariable
            cookies.set('session', result.userAuthKey, {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30
            });

            throw redirect(302, '/');
        }
    }
}
