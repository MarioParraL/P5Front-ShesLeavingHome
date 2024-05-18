import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { Film } from "../types.ts";
import FilteredFilmsIsland from "../islands/FilteredFilmsIsland.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext) {
    const response = await fetch("https://filmapi.vercel.app/api/films");
    const data = await response.json();
    return ctx.render(data);
  },
};

const Home = (props: PageProps) => {
  const films: Film[] = props.data;

  return (
    <div>
      <FilteredFilmsIsland films={films} />
    </div>
  );
};

export default Home;
