import { mysqlconn as db } from "$lib/db/mysql";

export const POST = async ({ request }) => {
    if(request.headers.get('Authorization')  !== process.env.API_KEY) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 });
    }

    const body = await request.json();

    // noinspection JSUnresolvedFunction
    const result = await db.query(`SELECT * FROM login WHERE email = "${body["email"]}"`)
        .then(([rows]) =>{
            return rows
        });

    if(!result.length) {
        return new Response(JSON.stringify({message: "Email Not Found"}), { status: 404 })
    }

    return new Response(JSON.stringify(result), { status: 200 });
}
