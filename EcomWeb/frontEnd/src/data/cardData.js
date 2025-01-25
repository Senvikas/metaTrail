import { BsFillDropletFill, BsBagFill, BsGiftFill, BsFillSquareFill } from "react-icons/bs";

const cardData = [
  {
    id: 1,
    icon: <BsFillDropletFill className="text-blue-500 text-5xl" />,
    title: "Testers",
    description: "Compact products to try before committing.",
  },
  {
    id: 2,
    icon: <BsBagFill className="text-blue-500 text-5xl" />,
    title: "Travel Size",
    description: "Portable options perfect for any trip.",
  },
  {
    id: 3,
    icon: <BsGiftFill className="text-blue-500 text-5xl" />,
    title: "Gift Sets",
    description: "Thoughtfully packed for special occasions.",
  },
  {
    id: 4,
    icon: <BsFillSquareFill className="text-blue-500 text-5xl" />,
    title: "Samples",
    description: "Mini versions to explore your favorites.",
  },
];

export default cardData;
