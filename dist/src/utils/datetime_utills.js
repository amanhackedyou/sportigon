import { DateTime } from "luxon";
/**
 * Convert user date (YYYY-MM-DD) from a given timezone to UTC date.
 * @param dateStr - Date in YYYY-MM-DD format (user's local date)
 * @param timezone - User's timezone (IANA format like "Asia/Kolkata")
 * @returns UTC date string in YYYY-MM-DD format
 */
export function convertToUTC(dateStr, timezone) {
    // Parse user date in their timezone (set time at start of the day)
    const localDate = DateTime.fromISO(dateStr, { zone: timezone }).startOf("day");
    // Convert to UTC
    const utcDate = localDate.setZone("Etc/UTC");
    // Return as YYYY-MM-DD
    return utcDate.toISODate();
}
export function parseAsLocalMidnight(dateStr) {
    const [y, m, d] = dateStr.split("-").map(Number);
    if (!y || !m || !d)
        throw new Error("Invalid date format, expected YYYY-MM-DD");
    return new Date(y, m - 1, d); // monthIndex = m-1
}
export const getWeekRange = () => {
    const today = new Date();
    const dates = [];
    for (let i = -7; i <= 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date); // Format YYYY-MM-DD
    }
    return dates;
};
//# sourceMappingURL=datetime_utills.js.map