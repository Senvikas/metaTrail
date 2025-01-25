const express = require("express");
const app = express();

// Mock Data
const bestSellers = [
  {
    id: 1,
    name: "Viva La Juicy",
    brand: "By Juicy Couture",
    price: "₹ 4,679.32",
    image: "/images/viva-la-juicy.png",
  },
  {
    id: 2,
    name: "Pink Sugar",
    brand: "By Aquolina",
    price: "₹ 257.55",
    image: "/images/pink-sugar.png",
  },
  {
    id: 3,
    name: "Euphoria",
    brand: "By Calvin Klein",
    price: "₹ 1,808.74",
    image: "/images/euphoria.png",
  },
  {
    id: 4,
    name: "Red Door",
    brand: "By Elizabeth Arden",
    price: "₹ 747.63",
    image: "/images/red-door.png",
  },
];

// API Endpoint
app.get("/api/best-sellers", (req, res) => {
  res.json(bestSellers);
});

// Start the Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
