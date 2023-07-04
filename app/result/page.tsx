interface IParams {
  searchParams: { [key: string]: string | string[] };
}

export async function generateMetadata({ searchParams }: IParams) {
  const searchQuery = searchParams["search"];
  return {
    title: `${searchQuery} - MeowlTube`,
    description: "MeowlTube is blockchain media platform",
  };
}

export default ({ searchParams }: IParams) => {
  const searchQuery = searchParams["search"];

  console.log("init");

  return <div>query: {searchQuery}</div>;
};
