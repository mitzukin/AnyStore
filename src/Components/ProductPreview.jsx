import { useContext } from "react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ProductContext";
import Carousel from "./Carousel";
import { IoMdStar } from "react-icons/io";
import {
  FaHeart,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import { Radio } from "@material-tailwind/react";
import RelatedProducts from "./RelatedProducts";

const ProductPreview = () => {
  const { productItems, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const product = productItems.find((e) => e.id === Number(productId));
  const [isReplyVisible, setReplyVisible] = useState(false);

  const starArray = Array.from({ length: 5 });

  return (
    <div className="px-3.5 lg:px-40 font-poppins">
      {/* <div className="" key={product.id}>
        <img src={product.image} alt="ProductImage" />
        <button className="p-5 bg-red-200 " onClick={() => {
          addToCart(product.id)}}>Add to Cart</button>
      </div> */}
      <div className="flex flex-col gap-10 py-10 lg:flex-row ">
        <div className="lg:w-1/2">
          <Carousel />
        </div>
        <div className="flex flex-col justify-between lg:w-1/2">
          <div className="flex flex-col gap-3">
            <p className="text-2xl font-semibold">Lorem Ipsum</p>
            <div className="flex items-center gap-1 text-sm">
              <p>4.6</p>
              {starArray.map((_, index) => (
                <IoMdStar key={index} color="red" size={18} />
              ))}
            </div>
            <p className="text-2xl font-medium text-red-500 ">$90.00</p>
            <p className="">{dummy[0].lorem}</p>
          </div>
          <div className="flex flex-col gap-5 justify-evenly">
            <div className="border-b h-[1px] "></div>
            <div className="flex gap-2">
              {" "}
              <Radio name="color" color="blue" />
              <Radio name="color" color="green" />
              <Radio name="color" color="red" />
              <Radio name="color" color="amber" />
            </div>
            <div className="flex gap-2">
              <button
                className="max-w-[200px] mt-5 py-3 px-4  text-sm bg-slate-800 text-slate-50"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                Add to Cart
              </button>
              <button
                className="max-w-[200px] mt-5 py-3 px-4  text-sm border border-slate-800  text-slate-800"
                onClick={() => {
                  addToCart(product.id);
                }}
              >
                Add to Cart
              </button>
            </div>

            <button className="flex items-center gap-2 my-5 lg:my-0">
              <FaHeart />
              <p className="text-sm font-medium">Add to Likes</p>
            </button>
          </div>
          <div className="border-b h-[1px]"></div>

          <div className="my-5 lg:my-0">
            <p className="text-sm font-medium">Categories:</p>
            <p className="text-sm font-medium">Color:</p>
            <div className="flex items-center gap-10 ">
              <p className="text-sm font-medium">Share This Product:</p>
              <div className="flex gap-4 text-slate-800">
                <FaFacebook size={20} />
                <FaTwitter size={20} />
                <FaInstagramSquare size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-start pt-10 mt-10 border-t ">
        <h1 className="text-2xl font-medium text-green-500">Reviews</h1>
        <p>Product Ratings</p>
        <div className="flex flex-col gap-10 p-5 mt-2 border md:flex-row border-slate-100">
          <div className="flex items-center gap-2 text-md">
            <p>4.5 out of 5</p>
            {starArray.map((_, index) => (
              <IoMdStar key={index} color="black" size={24} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <p>Filter</p>
            <div className="grid grid-cols-4 gap-2 md:flex-row">
              <button className="px-4 py-2 text-sm border">All</button>
              <button className="px-4 py-2 text-sm border">5 stars (0)</button>
              <button className="px-4 py-2 text-sm border">4 stars (0)</button>
              <button className="px-4 py-2 text-sm border">3 stars (0)</button>
              <button className="px-4 py-2 text-sm border">2 stars (0)</button>
              <button className="px-4 py-2 text-sm border">1 star (0)</button>
            </div>
          </div>
        </div>
        <div>
          {dummy.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-2 p-5 border-b "
            >
              <div className="flex gap-2">
                <img
                  src={item.img}
                  alt=""
                  className="h-[50px] w-[50px] rounded-full"
                />
                <div>
                  <p className="font-medium">{item.username}</p>
                  <p className="text-sm">{item.date}</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="flex flex-col gap-2 my-5">
                  <p className="text-sm">Variation : {item.variation}</p>
                  <p className="text-sm">Appearance : {item.appearance}</p>
                  <p className="text-sm">Quality : {item.quality}</p>
                </div>
                <p>{item.lorem}</p>
                <div className="flex gap-5 mt-4 text-sm font-medium text-green-800">
                  <button>Like</button>
                  <button  onClick={() => setReplyVisible(!isReplyVisible)}>Reply</button>
                </div>
                {isReplyVisible && (
                  <div class="relative w-full">
                    <div class="mt-2">
                      <input
                        type="text"
                        class="w-full h-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-slate-500"
                        placeholder="Type your reply here..."
                      />
                    </div>

                    <button class="absolute text-sm top-1/2 right-2 transform -translate-y-1/2 bg-slate-800 text-white px-4 py-1 rounded">
                      Reply
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

const dummy = [
  {
    username: "Jerone Salazar",
    date: "12/23/23",
    variation: "BLUE, WHITE",
    appearance: "Good",
    quality: "Excellent",
    img: "https://i.pinimg.com/564x/dc/43/68/dc4368160e34d488a8c3a6c703ec017d.jpg",
    lorem:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiatperferendis officiis temporibus obcaecati quasi quod architecto quidemvoluptatum hic beatae aut quia, similique in ipsam reprehenderitvoluptas labore eligendi laborum?",
  },
  {
    username: "Adrianne Rayo",
    date: "12/23/23",
    variation: "BLUE, WHITE",
    appearance: "Good",
    quality: "Excellent",
    img: "https://i.pinimg.com/564x/8e/b3/0c/8eb30ce7f6cd5f79d731c8975847c56c.jpg",
    lorem:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiatperferendis officiis temporibus obcaecati quasi quod architecto quidemvoluptatum hic beatae aut quia, similique in ipsam reprehenderitvoluptas labore eligendi laborum?",
  },
  {
    username: "Ezekiel Orante",
    date: "12/23/23",
    variation: "BLUE, WHITE",
    appearance: "Good",
    quality: "Excellent",
    img: "https://i.pinimg.com/736x/f8/9e/1a/f89e1ad0e8a238cbf0e75a0efc25f3f5.jpg",
    lorem:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiatperferendis officiis temporibus obcaecati quasi quod architecto quidemvoluptatum hic beatae aut quia, similique in ipsam reprehenderitvoluptas labore eligendi laborum?",
  },
];
export default ProductPreview;
