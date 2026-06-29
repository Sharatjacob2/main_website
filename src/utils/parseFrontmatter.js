export default function parseFrontmatter(text) {
    const match = text.match(
        /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/
    );

    if (!match) {
        return {
            metadata: {},
            content: text
        };
    }

    const metadata = {};

    match[1]
        .split("\n")
        .forEach(line => {
            const [key, ...value] = line.split(":");

            metadata[key.trim()] =
                value.join(":").trim();
        });

    return {
        metadata,
        content: match[2]
    };
}