export default function parseResume(text) {
  // ------------------------------------
  // Remove frontmatter
  // ------------------------------------

  text = text.replace(/^\uFEFF/, "");

  text = text.replace(/^---[\s\S]*?---\s*/, "");

  const sections = [];

  let currentSection = null;
  let currentItem = null;
  let currentList = null;

  //------------------------------------

  function pushItem() {
    if (!currentItem) return;

    currentSection.items.push(currentItem);

    currentItem = null;
  }

  function pushSection() {
    if (!currentSection) return;

    pushItem();

    sections.push(currentSection);

    currentSection = null;
  }

  //------------------------------------

  const lines = text.split(/\r?\n/);

  for (const raw of lines) {
    const line = raw.trim();

    if (!line) continue;

    //------------------------------------
    // # Section
    //------------------------------------

    if (line.startsWith("# ")) {
      pushSection();

      currentSection = {
        title: line.slice(2),
        collapse: false,
        fields: {},
        bullets: [],
        items: [],
      };

      currentList = null;

      continue;
    }

    //------------------------------------
    // ## Item
    //------------------------------------

    if (line.startsWith("## ")) {
      pushItem();

      currentItem = {
        title: line.slice(3),
        fields: {},
        bullets: [],
      };

      currentList = null;

      continue;
    }

    //------------------------------------
    // Bullet
    //------------------------------------

    if (line.startsWith("- ")) {
      const value = line.slice(2);

      if (currentList) {
        const target = currentItem ? currentItem.fields : currentSection.fields;

        target[currentList].push(value);
      } else if (currentItem) {
        currentItem.bullets.push(value);
      } else {
        currentSection.bullets.push(value);
      }

      continue;
    }

    //------------------------------------
    // key: value
    //------------------------------------

    const colon = line.indexOf(":");

    if (colon !== -1) {
      const key = line.slice(0, colon).trim();

      const value = line.slice(colon + 1).trim();

      if (key === "collapse" && currentSection && !currentItem) {
        currentSection.collapse = value === "true";

        continue;
      }

      if (value === "") {
        currentList = key;

        const target = currentItem ? currentItem.fields : currentSection.fields;

        target[key] = [];

        continue;
      }

      currentList = null;

      const target = currentItem ? currentItem.fields : currentSection.fields;

      target[key] = value;
    }
  }

  pushSection();

  return sections;
}
