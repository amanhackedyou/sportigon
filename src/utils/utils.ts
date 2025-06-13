export function extractHashtags(text: string): string[] {
    const regex = /#(\w+)/g;
    const hashtags: string[] = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        hashtags.push(`#${match[1]}`);
    }

    return hashtags;
}
