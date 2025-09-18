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