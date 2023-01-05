import { mysqlconn as db } from '$lib/db/mysql.js'
import crypto from "crypto";
import {fail, redirect} from "@sveltejs/kit";
import { hash } from "$lib/hashing/hash.js";
import {validateEmail} from "$lib/validateEmail/validateEmail.js";

/** @type {import('./types').Actions} */
export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');
        const password2 = formData.get('password2');
        console.log(password)

        if(password !== password2) {
            return fail(400, {
                email: email,
                match: true
            });
        }

        if(!validateEmail(email)) {
            return fail(400, { validEmail: true });
        }

        const hashed = await hash(password);
        let UUID = crypto.randomUUID();

        let unique = false;
        while(!unique) {
            // noinspection JSUnresolvedFunction
            const used = await db.query(`SELECT * FROM login WHERE userAuthKey = ${UUID}`)
                .then(([rows]) =>{
                    return rows
                });

            if(!used.length) {
                unique = true;
            }
        }

        await db.query(`INSERT INTO login (email, password, userAuthKey) VALUES ('${email}', '${hashed}', '${UUID}');`);

        throw redirect(302, '/login');
    }
}
