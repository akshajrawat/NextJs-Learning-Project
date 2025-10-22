interface productsPropType {
  searchParams: {
    category: String;
    productid: number;
  };
}

const products = async ({ searchParams }: productsPropType) => {
  const searchParam = await searchParams;
  const category = searchParam.category;
  const productid = searchParam.productid;
  return (
    <h1>
      Hi this is products page :- <br /> Category : {category} <br /> productid
      : {productid}
    </h1>
  );
};

export default products;
