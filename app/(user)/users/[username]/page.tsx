interface usernamePageProps {
  params: {
    username: string;
  };
}

const username = async ({ params }: usernamePageProps) => {
  const name = params.username;
  return <h1> this is dynamic username page : {name}</h1>;
};

export default username;
