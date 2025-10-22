interface postIdType {
  params: {
    postId: number;
  };
}

const pageId = async ({ params }: postIdType) => {
  const postId = params.postId;
  return <h1> This is the postId dynamic page : {postId}</h1>;
};

export default pageId;
