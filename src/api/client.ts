import url from "./url";

export default async function clients(token: string, id_client: number) {
    try {
        const response = await fetch(url + "client", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify({
                id_client,
            }),
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function getClientInfo(
    token: string | null,
    id_client: number | null
) {
    try {
        const response = await fetch(url + "client/info", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify({
                id_client,
            }),
        });

        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
}
