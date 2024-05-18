import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";

import { Film } from "../types.ts";

export const handler: Handlers = {
  GET: async (_req, ctx: FreshContext) => {
    const id = ctx.params.id;

    try {
      const response = await fetch("https://filmapi.vercel.app/api/films");

      if (!response.ok) {
        throw new Error("Error in fetching photographic films");
      }

      const films = await response.json();

      const SearchFilmById = films.find((film: Film) => film._id === id);

      return ctx.render(SearchFilmById);
    } catch (e) {
      console.error(e);
      return new Response("Error", { status: 500 });
    }
  },
};

const Page = (props: PageProps) => {
  const data = props.data;

  return (
    <div class="AllFilms">
      <div className="Films">
        <h1 className="name">{data.name}</h1>
        <img
          className="image"
          src={data.staticImageUrl}
          style={{ width: "300px", height: "300px" }}
        />

        <div className="info">
          <p>Brand: {data.brand}</p>
          <p>ISO: {data.iso}</p>
          <p>
            Format: {data.formatThirtyFive ? "Thirty Five" : "One Twenty"}
          </p>
          <p>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
