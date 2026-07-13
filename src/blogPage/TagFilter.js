function TagFilter({
  tags,
  selectedTags,
  onToggleTag,
  onClear,
}) {
  return (
    <div className="tag-filter">

      <div className="tag-filter-title">
        Filter by topic
      </div>

      <div className="tag-filter-tags">
        {tags.map((tag) => (
          <button
            key={tag}
            className={
              selectedTags.includes(tag)
                ? "tag-filter-chip active"
                : "tag-filter-chip"
            }
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <button
          className="tag-filter-clear"
          onClick={onClear}
        >
          Clear filters
        </button>
      )}

    </div>
  );
}

export default TagFilter;