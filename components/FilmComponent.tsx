import { FunctionComponent } from "preact";
import { Film } from "../types.ts";

type FilmProps = {
  films: Film[];
};

const FilmComponent: FunctionComponent<FilmProps> = (props) => {
  const films: Film[] = props.films;

  return (
    <div class="AllFilms">
      {films.map((film) => (
        <div className="Films">
          <a href={`${film._id}`}>
            <img
              className="image"
              src={film.staticImageUrl}
              style={{ width: "220px", height: "220px" }}
            />
            <h1 className="name">{film.name}</h1>
            <div className="info">
              <p>Brand: {film.brand}</p>
              <p>ISO: {film.iso}</p>
              <p>
                Format: {film.formatThirtyFive ? "Thirty Five" : "One Twenty"}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default FilmComponent;
