import { API_KEY } from '$env/static/private';
import { fail } from "@sveltejs/kit";

export const load = ({ fetch }) => {
    const fetchNames = async () => {
        const res = await fetch(`/api`, {
            method: 'GET',
            headers: {
                Authorization: API_KEY
            }
        });
        return await res.json();
    }
    return{
        data: fetchNames()
    }
}

/** @type {import('./types').Actions} */
export const actions = {
    default: async ({ request, fetch }) => {
        const formData = await  request.formData();
        const name = formData.get('name');

        if(!name) {
            return fail(400, { name, missing: true });
        }

        await fetch('/api', {
            method: 'POST',
            body: JSON.stringify({
                name: name
            }),
            headers: {
                Authorization: API_KEY
            }
        });
    }
}
