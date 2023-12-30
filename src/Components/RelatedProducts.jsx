import { IoMdStar } from "react-icons/io";

const RelatedProducts = () => {
  const starArray = Array.from({ length: 5 });
  return (
    <div>
      <h1 className="my-10 text-2xl font-medium">Related Products</h1>
      <div className="grid grid-cols-1 gap-4 mb-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:px-32">
        {RelatedDummy.map((product, index) => (
          <div key={index} className="flex flex-col items-start gap-2">
            <img
              src={product.dummyImage}
              alt=""
              className="object-cover w-full h-full"
            />
            <h1 className="mt-2 text-center">{product.name}</h1>
            <div className="flex items-center gap-1 text-sm">
              <p>4.6</p>
              {starArray.map((_, index) => (
                <IoMdStar key={index} color="red" size={18} />
              ))}
            </div>
            <p className="text-center text-red-500">{product.price}</p>
            <div className="flex gap-2">
              <button className="w-[100px] h-[30px] text-sm text-center border ">
                Like
              </button>
              <button className="w-[100px] h-[30px] text-sm text-center border ">
                View
              </button>
              <button className="w-[100px] h-[30px] text-sm text-center border ">
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RelatedDummy = [
  {
    dummyImage:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
    name: "Nike Blazer Mid '77 Vintage",
    price: "$80.49",
  },
  {
    dummyImage:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
    name: "Nike Blazer Mid '77 Vintage",
    price: "$80.49",
  },
  {
    dummyImage:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
    name: "Nike Blazer Mid '77 Vintage",
    price: "$80.49",
  },
  {
    dummyImage:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoes-dNWPTj.png",
    name: "Nike Blazer Mid '77 Vintage",
    price: "$80.49",
  },
];

export default RelatedProducts;
