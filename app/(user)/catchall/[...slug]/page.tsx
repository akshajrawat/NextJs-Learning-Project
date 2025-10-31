interface PageProps {
  params: {
    slug: string;
  };
}

const dynamicSlugHandler = async ({params}: PageProps) => {
  const { slug } = await params;
  console.log(slug)
  return <h1 className="flex justify-center items-center h-[30vh] text-4xl font-bold"> This is dynamic slug handler for : {slug[0]} , {slug[1]} , {slug[2]} </h1>;
};

export default dynamicSlugHandler;
