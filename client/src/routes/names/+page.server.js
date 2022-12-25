import { API_KEY } from '$env/static/private'

export const load = ({ fetch, depends }) => {
    depends('reload')
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
