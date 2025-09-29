export function extractHashtags(text: string): string[] {
    const regex = /#(\w+)/g;
    const hashtags: string[] = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        hashtags.push(`#${match[1]}`);
    }

    return hashtags;
}

export function getDateInTimezone(timezone: string): string {
    const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });

    // en-CA outputs as yyyy-mm-dd by default
    return formatter.format(new Date());
}

/**
 * Parse a raw Cookie header string into an object.
 *
 * @param cookieHeader raw cookie header string (e.g. from req.headers.cookie)
 * @returns object of cookies { key: value } or null if invalid
 */
export function parseCookies(cookieHeader?: string | null): Record<string, string> | null {
    try {
        if (!cookieHeader || typeof cookieHeader !== "string") {
            return null;
        }

        const cookies: Record<string, string> = {};

        cookieHeader.split(";").forEach((part) => {
            const [rawKey, ...rawValParts] = part.split("=");
            if (!rawKey) return;

            const key = rawKey.trim();
            const value = rawValParts.join("=").trim(); // join in case value contains '='

            if (key) {
                cookies[key] = decodeURIComponent(value);
            }
        });

        return cookies;
    } catch (err) {
        console.error("Failed to parse cookies:", err);
        return null;
    }
}
