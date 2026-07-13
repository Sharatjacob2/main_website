export default function parseFrontmatter(text) {
    text = text.replace(/^\uFEFF/, "");

    const match = text.match(
        /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/
    );

    if (!match) {
        return {
            metadata: {},
            content: text
        };
    }

    const metadata = {};

    const lines = match[1].split(/\r?\n/);

    let currentKey = null;

    lines.forEach((line) => {

        // Array item
        if (/^\s*-\s+/.test(line) && currentKey) {

            metadata[currentKey].push(
                line.replace(/^\s*-\s+/, "").trim()
            );

            return;
        }

        const split = line.split(":");

        const key = split.shift()?.trim();

        const value = split.join(":").trim();

        if (!key) return;

        // Start of array
        if (value === "") {

            metadata[key] = [];

            currentKey = key;

            return;
        }

        metadata[key] = value
            .replace(/^"(.*)"$/, "$1")
            .replace(/^'(.*)'$/, "$1");

        currentKey = null;

    });

    const content = match[2].trim();

    const words = content.split(/\s+/).length;

    metadata.readingTime = Math.max(
        1,
        Math.ceil(words / 200)
    );

    return {
        metadata,
        content
    };
}