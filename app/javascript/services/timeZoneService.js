import http from "./httpService";
import { apiUrl } from "@/config.json";

const timeZoneUrl = apiUrl + "/time_zones";

export async function timeZones(user_id) {
    let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const { data: timeZones } = await http.get(timeZoneUrl, {
        params: {
            user_id,
            time_zone: timeZone
        }
    });
    return timeZones;
}

export async function addTimeZone(user_id, { name, city, utc_difference }) {
    const { data } = await http.post(timeZoneUrl, {
        time_zone: {
            name,
            city,
            user_id,
            utc_difference
        }
    });
}

export function deleteTimeZone(id) {
    return http.delete(timeZoneUrl + '/' + id)
}

export default {
    timeZones,
    addTimeZone,
    deleteTimeZone
}