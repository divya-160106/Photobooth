import { filters } from "../data/filters";

function FilterPicker({
  selectedFilter,
  setSelectedFilter,
}) {
  return (
    <div className="picker-row">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() =>
            setSelectedFilter(filter.name)
          }
          className={
            selectedFilter === filter.name
              ? "picker-btn active"
              : "picker-btn"
          }
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
}

export default FilterPicker;