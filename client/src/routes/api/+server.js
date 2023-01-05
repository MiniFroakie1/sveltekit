import { mysqlconn as db } from "$lib/db/mysql";
import {API_KEY} from "$env/static/private";

export const GET = async ({ url, request }) => {
    if(request.headers.get('Authorization')  !== API_KEY) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 });
    }
    const limit = Number(url.searchParams.get('limit') ?? '10');
    const skip = Number(url.searchParams.get('skip') ?? '0');
    // noinspection JSUnresolvedFunction
    let results = await db.query(`SELECT * FROM mytable LIMIT ${skip}, ${limit}`)
        .then(([rows]) => {
            return rows;
        });

    return new Response(JSON.stringify(results), { status: 200 });
}

export const POST = async ({ request }) => {
    if(request.headers.get('Authorization')  !== API_KEY) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 });
    }

    const body = await request.json();
    

    if(!body.name) {
        return new Response(JSON.stringify({message: 'Missing name'}), { status: 400 });
    }

    await db.query(`INSERT INTO mytable (ID, NAME) VALUES (${body.id ? body.id : null}, '${body.name}')`);

    return new Response(JSON.stringify({message: 'Success'}), { status: 201 });
}

export const DELETE = async ({ request }) => {
    if(request.headers.get('Authorization')  !== API_KEY) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
    }
    const body = await request.json();

    await db.query(`DELETE FROM mytable WHERE id = ${body.id}`);

    return new Response(JSON.stringify({message: 'Success'}), { status: 200 })
}

export const PATCH = async ({ request }) => {
    if(request.headers.get('Authorization')  !== API_KEY) {
        return new Response(JSON.stringify({message: 'Invalid credentials'}), { status: 401 })
    }
    db.query('SET @num := 0');
    db.query('UPDATE mytable SET id = @num := (@num+1) WHERE id != 0');
    db.query('ALTER TABLE mytable AUTO_INCREMENT = 1');

    return new Response(JSON.stringify({message: 'Success'}), { status: 200 })
}
