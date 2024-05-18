import { useEffect, useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import { Film } from "../types.ts";

type FiltersProps = {
  films: Film[];
  onFilter: (filteredFilms: Film[]) => void;
};

const FiltersIsland: FunctionComponent<FiltersProps> = (
  { films, onFilter },
) => {
  const [brand, setBrand] = useState<string>("");
  const [iso, setIso] = useState<string>("");
  const [format, setFormat] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [name, setName] = useState<string>("");

  useEffect(() => {
    let filteredFilms = films;

    if (brand) {
      filteredFilms = filteredFilms.filter((film) => film.brand === brand);
    }
    if (iso) {
      filteredFilms = filteredFilms.filter((film) =>
        film.iso.toString() === iso
      );
    }
    if (format) {
      if (format === "Thirty Five") {
        filteredFilms = filteredFilms.filter((film) => film.formatThirtyFive);
      } else if (format === "One Twenty") {
        filteredFilms = filteredFilms.filter((film) => film.formatOneTwenty);
      }
    }
    if (color) {
      if (color === "Color") {
        filteredFilms = filteredFilms.filter((film) =>
          film.description.toLowerCase().includes("color")
        );
      } else if (color === "Black & White" || color === "Black and White") {
        filteredFilms = filteredFilms.filter((film) =>
          film.description.toLowerCase().includes("black & white") ||
          film.description.toLowerCase().includes("black and white")
        );
      }
    }
    if (name) {
      filteredFilms = filteredFilms.filter((film) =>
        film.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    onFilter(filteredFilms);
  }, [brand, iso, format, color, name]);

  return (
    <div className="filters">
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="">Brand</option>
        {Array.from(new Set(films.map((film) => film.brand))).map((brand) => (
          <option value={brand} key={brand}>{brand}</option>
        ))}
      </select>
      <select value={iso} onChange={(e) => setIso(e.target.value)}>
        <option value="">ISO</option>
        {Array.from(new Set(films.map((film) => film.iso.toString()))).map(
          (iso) => <option value={iso} key={iso}>{iso}</option>,
        )}
      </select>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="">Format</option>
        <option value="Thirty Five">Thirty Five</option>
        <option value="One Twenty">One Twenty</option>
      </select>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="">Color/B&W</option>
        <option value="Color">Color</option>
        <option value="Black & White">Black & White</option>
      </select>
      <input
        type="text"
        placeholder="Search by writting the name"
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
      />
    </div>
  );
};

export default FiltersIsland;
