interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  order: "asc" | "desc";
  onOrderChange: () => void;
}

export function SearchBar({
  search,
  onSearchChange,
  order,
  onOrderChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <button className="btn-sort" onClick={onOrderChange}>
        {order === "asc" ? "↑ Ano (Crescente)" : "↓ Ano (Decrescente)"}
      </button>
    </div>
  );
}
