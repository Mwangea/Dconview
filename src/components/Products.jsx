import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/snowpeas.jpg",
      name: "French Beans",
      description:
        "Our French beans thrive in the fertile fields of Kenya's Rift Valley, Eastern and Central regions. These slender green beans boast a vibrant hue and a crisp texture. French beans promote digestive health and offer a burst of green goodness. Each batch is meticulously sorted, packed in bags and punnets.",
    },

    {
      id: 2,
      image: "/frenchbeans.jpg",
      name: "Mangetout (Snow Peas):",
      description:
        "Our Mangetout, or snow peas, flourish in the cool highlands of Kenya. With their tender, flat pods, Mangetout peas are a delicate shade of green. Low in calories and high in vitamins, they add a healthy crunch to your meals while boosting your nutrient intake. Mangetout peas are hand-picked, sorted, and delicately packed in perforated pouches to maintain their crispness during export.",
    },
    {
      id: 3,
      image: "/sugarsnaps.jpg",
      name: "Sugar Snaps",
      description:
        "Grown in the lush fields of high attitudes of central Kenya. These plump, edible-pod peas offer a sweet, juicy crunch. Packed with antioxidants, Sugar Snaps are a tasty source of vitamins and fiber. Sugar Snaps are carefully graded and packed in ventilated pouches to preserve their natural sweetness and texture.",
    },
    {
      id: 4,
      image: "/gardenpeas.jpg",
      name: "Garden Peas",
      description:
        "Our Garden Peas flourish in the highlands of Central Kenya. These tender green peas are plump and round, perfect for culinary creations. Rich in protein and vitamins, Garden Peas are a wholesome addition to your diet. Garden Peas are hand-harvested, and packed in punnets alongside ice bags, ensuring they retain their quality.",
    },
    {
      id: 5,
      image: "/babycorn.jpg",
      name: "Baby Corn",
      description:
        "Grown in the fertile soils of Kenya's Rift Valley and the Eastern regions, our Baby Corn thrives in the warm climate. These miniature cobs are tender and pale, with a sweet, mild flavor. Low in calories and high in fiber, Baby Corn adds a delightful crunch to your dishes. They are selected, sorted, and packed in eco-friendly, moisture-resistant packaging, ensuring their freshness on arrival.",
    },

    {
      id: 6,
      image: "/babycarrots.jpg",
      name: "Baby Carrots",
      description:
        "Our Baby Carrots are nurtured in the sun-drenched fields of Eastern Kenya. Petite and vibrant orange, these baby carrots are a visual delight. Packed with beta-carotene and vitamins, Baby Carrots are a nutritious snack or culinary ingredient. Each Baby Carrot is hand-picked, washed, and packed in perforated bags or punnets to maintain their crispness and vibrant color during export.",
    },
  ];

  return (
    <div
      id="products"
      className="py-8 bg-[#D9D9D9]  flex flex-col justify-center items-center"
    >
      <p className="text-[#076C05] text-5xl   font-bold">Products</p>

      <div className="grid md:grid-cols-3 w-[80%] my-8 mx-auto gap-12">
        {products.map((product) => (
          <div className="flex flex-col hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer shadow-md shadow-gray-400  justify-center items-center">
            <img
              src={product.image}
              className="h-[280px] rounded-t-md object-cover w-[100%]"
            />
            <div className="h-[300px] bg-white rounded-b-md  p-2">
              <span className="text-[#0B8308] font-semibold">
                {product.name}
              </span>{" "}
              <span className="text-xs">, {product.description}</span>
            </div>
          </div>
        ))}
      </div>

      <Link to="/products">
        <button className="bg-[#6E9320] rounded-md text-white p-2">
          View All Products
        </button>
      </Link>
    </div>
  );
};

export default Products;
