import { useState } from "react";
import { CategoryButton } from "../components/CategoryButton";
import { ButtonLink } from "../components/ButtonLink";

import amazonImage from "../assets/images/amazon.jpg";
import spotifyImage from "../assets/images/spotify.jpg";
import appleMusicImage from "../assets/images/apple-music.jpg";
import amazonPrimeImage from "../assets/images/amazon-prime.jpg";
import zaraImage from "../assets/images/zara.jpg";
import nikeImage from "../assets/images/nike.jpg";
import sephoraImage from "../assets/images/sephora.jpg";
import asosImage from "../assets/images/asos.jpg";
import uberEatsImage from "../assets/images/uber-eats.jpg";
import playstationPlusImage from "../assets/images/playstation-plus.jpg";
import airbnbImage from "../assets/images/airbnb.jpg";
import netflixImage from "../assets/images/netflix.jpg";
interface GiftCard {
  id: number;
  name: string;
  image: string;
  discount: number;
  price: number;
  description: string;
  category: string;
}

export function GiftCardPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Food");

  // Mock data for main section
  const mainGiftCards: GiftCard[] = [
    {
      id: 1,
      name: "Amazon Gift Card",
      image: amazonImage,
      discount: 10,
      price: 100,
      description: "Perfect for online shopping",
      category: "shopping",
    },
    {
      id: 2,
      name: "Spotify Premium",
      image: spotifyImage,
      discount: 20,
      price: 30,
      description: "Unlimited music streaming",
      category: "entertainment",
    },
    {
      id: 3,
      name: "Apple Music Subscription",
      image: appleMusicImage,
      discount: 25,
      price: 20,
      description: "Premium music streaming",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Amazon Prime",
      image: amazonPrimeImage,
      discount: 10,
      price: 100,
      description: "Prime benefits",
      category: "shopping",
    },
  ];

  // Mock data for Deals of The Week section
  const dealsOfTheWeek: GiftCard[] = [
    {
      id: 5,
      name: "Netflix Premium",
      image: netflixImage,
      discount: 15,
      price: 45,
      description: "Stream your favorite shows",
      category: "entertainment",
    },
    {
      id: 6,
      name: "Uber Eats",
      image: uberEatsImage,
      discount: 20,
      price: 50,
      description: "Food delivery service",
      category: "food",
    },
    {
      id: 7,
      name: "PlayStation Plus",
      image: playstationPlusImage,
      discount: 30,
      price: 60,
      description: "Online gaming subscription",
      category: "entertainment",
    },
    {
      id: 8,
      name: "Airbnb",
      image: airbnbImage,
      discount: 25,
      price: 200,
      description: "Travel and accommodation",
      category: "travel",
    },
  ];

  // Mock data for Fashionably Yours section
  const fashionGiftCards: GiftCard[] = [
    {
      id: 9,
      name: "Zara Gift Card",
      image: zaraImage,
      discount: 15,
      price: 100,
      description: "Fashion clothing and accessories",
      category: "fashion",
    },
    {
      id: 10,
      name: "Nike Store",
      image: nikeImage,
      discount: 20,
      price: 150,
      description: "Sportswear and equipment",
      category: "fashion",
    },
    {
      id: 11,
      name: "Sephora",
      image: sephoraImage,
      discount: 10,
      price: 75,
      description: "Beauty and cosmetics",
      category: "beauty",
    },
    {
      id: 12,
      name: "ASOS",
      image: asosImage,
      discount: 25,
      price: 100,
      description: "Online fashion retailer",
      category: "fashion",
    },
  ];

  const categories = ["Food", "Shopping", "Entertainment", "Fashion", "Jewelry", "Health", "Beauty", "Other"];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-2">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            name={category}
            isActive={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      {/* Main Gift Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {mainGiftCards.map((card) => (
          <div key={card.id} className="rounded-lg overflow-hidden">
            <div className="relative bg-white">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-40 object-cover"
              />
            </div>

            <div className="pt-2">
              <h2 className="text-xs font-semibold text-gray-800">
                {card.name}
              </h2>

              <p className="text-secondary font-medium">{card.discount}% Off</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <ButtonLink to="/">View All</ButtonLink>
      </div>

      {/* Deals of The Week Section */}
      <h3 className="text-4xl font-bold mt-6">Deals of The Week</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {dealsOfTheWeek.map((card) => (
          <div key={card.id} className="rounded-lg overflow-hidden">
            <div className="relative bg-white">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-40 object-cover"
              />
            </div>

            <div className="pt-2">
              <h2 className="text-xs font-semibold text-gray-800">
                {card.name}
              </h2>

              <p className="text-secondary font-medium">{card.discount}% Off</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <ButtonLink to="/">View All</ButtonLink>
      </div>

      {/* Fashionably Yours Section */}
      <h3 className="text-4xl font-bold mt-6">Fashionably Yours</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {fashionGiftCards.map((card) => (
          <div key={card.id} className="rounded-lg overflow-hidden">
            <div className="relative bg-white">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-100 object-cover"
              />
            </div>
            <div className="pt-2">
              <h2 className="text-xs font-semibold text-gray-800">
                {card.name}
              </h2>
              <p className="text-secondary font-medium">{card.discount}% Off</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
