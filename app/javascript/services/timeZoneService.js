import http from "./httpService";
import { apiUrl } from "@/config.json";

const timeZoneUrl = apiUrl + "/time_zone";

export async function userTimeZones(user_id) {
    let userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    const { data: userTimeZones } = await http.get(timeZoneUrl, {
        params: {
            user_id,
            user_time_zone: userTimeZone
        }
    });
    return userTimeZones;
}

export async function addUserTimeZone(user_id, { name, city, utc_difference }) {
    const { data } = await http.post(timeZoneUrl, {
        user_time_zone: {
            name,
            city,
            user_id,
            utc_difference
        }
    });
}

export function deleteUserTimeZone(id) {
    return http.delete(timeZoneUrl + '/' + id)
}

export default {
    userTimeZones,
    addUserTimeZone,
    deleteUserTimeZone
}