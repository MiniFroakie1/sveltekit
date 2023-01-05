import { mysqlconn as db } from "$lib/db/mysql.js";
import {API_KEY} from "$env/static/private";

export const GET = async ({ params, request }) => {
    if(request.headers.get('Authorization')  !== API_KEY) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
    }
    // noinspection JSUnresolvedFunction
    const results = await db.query(`SELECT * FROM mytable WHERE id = ${params.nameId}`)
        .then(([rows]) => {
            return rows[0] ? rows : "404";
        })
    if(results === "404") {
        return new Response(JSON.stringify([]), { status: 404 })
    }
    return new Response(JSON.stringify(results), { status: 200 });
}
