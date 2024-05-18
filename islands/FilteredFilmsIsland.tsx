import { useState } from "preact/hooks";
import { Film } from "../types.ts";
import FiltersIsland from "./FiltersIsland.tsx";
import FilmComponent from "../components/FilmComponent.tsx";
import { FunctionComponent } from "preact";

type FilteredFilmsIslandProps = {
  films: Film[];
};

const FilteredFilmsIsland: FunctionComponent<FilteredFilmsIslandProps> = (
  { films },
) => {
  const [filteredFilms, setFilteredFilms] = useState<Film[]>(films);

  const handleFilter = (films: Film[]) => {
    setFilteredFilms(films);
  };

  return (
    <div>
      <FiltersIsland films={films} onFilter={handleFilter} />
      <h1 class="tittle1">LIST OF PHOTOGRAPHIC FILMS</h1>
      <FilmComponent films={filteredFilms} />
    </div>
  );
};

export default FilteredFilmsIsland;
