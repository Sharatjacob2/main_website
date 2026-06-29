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

    match[1]
        .split(/\r?\n/)
        .forEach(line => {
            const [key, ...value] = line.split(":");

            metadata[key.trim()] =
                value.join(":")
                     .trim()
                     .replace(/^"(.*)"$/, "$1")
                     .replace(/^'(.*)'$/, "$1");
        });

    const content = match[2].trim();

    const words = content.split(/\s+/).length;

    metadata.readingTime =
        Math.max(1, Math.ceil(words / 200));

    return {
        metadata,
        content
    };
}