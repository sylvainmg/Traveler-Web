
import url from "./url";

export interface RatingPayload {
    num_reservation: number;
    note_hotel: number;
    avis_hotel: string;
    note_compagnie_aerienne_aller: number;
    avis_compagnie_aerienne_aller: string;
    note_compagnie_aerienne_retour: number;
    avis_compagnie_aerienne_retour: string;
    num_chambre?: number;
    date_reservation?: string;
    hotel_nom?: string;
    destination?: string;
}

export default async function rating(
    token: string,
    userRating: RatingPayload
) {
    try {
    
        const minimumPayload = {
            num_reservation: Number(userRating.num_reservation) || 0,
            note_hotel: Number(userRating.note_hotel) || 0,
            avis_hotel: String(userRating.avis_hotel).trim() || "",
            note_compagnie_aerienne_aller: Number(userRating.note_compagnie_aerienne_aller) || 0,
            avis_compagnie_aerienne_aller: String(userRating.avis_compagnie_aerienne_aller).trim() || "",
            note_compagnie_aerienne_retour: Number(userRating.note_compagnie_aerienne_retour) || 0,
            avis_compagnie_aerienne_retour: String(userRating.avis_compagnie_aerienne_retour).trim() || "",
        };

  
        const response = await fetch(url + "rating", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: `Bearer ${token}`,
                "ngrok-skip-browser-warning": "69420",
            },
            body: JSON.stringify(minimumPayload),
        });

          if (!response.ok) {
            let errorText = "";
            try {
                errorText = await response.text();
                   } catch (e) {
                errorText = "Impossible de lire la réponse d'erreur";
            }
            
            return {
                success: false,
                status: response.status,
                statusText: response.statusText,
                error: errorText,
                url: response.url,
                payload: minimumPayload,
            };
        }

        const data = await response.json();

        return data;
    } catch (err) {
        return {
            success: false,
            error: err instanceof Error ? err.message : "Erreur inconnue",
        };
    }
}