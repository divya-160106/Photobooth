function ThemePicker({ selectedTheme, setSelectedTheme }) {
  const themes = [
    "Coral Sunset",
    "Ocean Dream",
    "Retro Beach",
  ];

  return (
    <div className="picker-row">

      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => setSelectedTheme(theme)}
          className={`picker-btn ${selectedTheme === theme ? "active" : ""}`}
        >
          {theme}
        </button>
      ))}

    </div>
  );
}

export default ThemePicker;