import { API_KEY } from "$env/static/private";
import { error } from "@sveltejs/kit";

export const load = async ({ fetch, params }) => {
    const res = await fetch(`/api/${params.nameId}`, {
        method: 'GET',
        headers: {
            Authorization: API_KEY
        }
    });

    if(res.status === 404) {
        throw new error(404, {
            message:'Not Found',
            code: 404
        });
    }

    const Data = await res.json();

    return{
        data: Data[0]
    }
}
