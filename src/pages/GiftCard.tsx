import { useState } from "react";
import { CategoryButton } from "../components/CategoryButton";
import { ButtonLink } from "../components/ButtonLink";
import { FAQSection } from "../components/FAQSection";

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
import promotionalImage from "../assets/images/promotional.jpg";
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

  const faqs = [
    {
      question: "How do I purchase a gift card?",
      answer: "You can purchase gift cards directly from our website. Simply select the amount, choose your design, and complete the checkout process. The gift card will be delivered to your email instantly."
    },
    {
      question: "Can I use multiple gift cards for one purchase?",
      answer: "Yes, you can combine multiple gift cards for a single purchase. During checkout, you'll have the option to apply multiple gift card codes."
    },
    {
      question: "Do gift cards expire?",
      answer: "Our gift cards do not expire. You can use them at any time for your purchases."
    },
    {
      question: "Can I get a refund for my gift card?",
      answer: "Gift cards are non-refundable and cannot be exchanged for cash. Please make sure to review your purchase before completing the transaction."
    },
    {
      question: "How do I check my gift card balance?",
      answer: "You can check your gift card balance by logging into your account and viewing your gift card details, or by contacting our customer support team."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-50">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-between">
            <h2 className="text-6xl font-bold mb-4">4% Extra Savings</h2>
            <p className="text-xl mb-6">
              Get exclusive discounts on all your favorite brands. Limited time offer!
            </p>
            <p className="text-sm opacity-80">
              *Terms and conditions apply. Minimum purchase required. Valid until December 31, 2024.
            </p>
            <div className="mt-8">
              <a href="https://www.naise.com" className="text-secondary">
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[300px] w-[300px] md:w-full">
            <img
              src={promotionalImage}
              alt="Promotional Offer"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 rounded-lg"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-16">
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

      {/* New Promotional Section with Wider Image */}
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Left Side - Text Content */}
          <div className="rounded-2xl bg-tertiary p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
              <p className="text-lg mb-6">
                Exclusive deals just for you.<br></br> Don't miss out on these amazing savings!
              </p>
            </div>
            <div className="mt-8">
              <a href="https://www.naise.com" className="text-black hover:text-black/80">
                Discover More →
              </a>
            </div>
          </div>

          {/* Right Side - Wider Image */}
          <div className="md:col-span-2">
            <div className="relative h-[400px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src={promotionalImage}
                alt="Special Offer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Fashionably Yours Section */}
      <h3 className="text-4xl font-bold mt-16">Fashionably Yours</h3>
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

         {/* New Promotional Section with Wider Image */}
         <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Left Side - Text Content */}
          <div className="rounded-2xl bg-tertiary p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Special Offer</h2>
              <p className="text-lg mb-6">
                Exclusive deals just for you.<br></br> Don't miss out on these amazing savings!
              </p>
            </div>
            <div className="mt-8">
              <a href="https://www.naise.com" className="text-black hover:text-black/80">
                Discover More →
              </a>
            </div>
          </div>

          {/* Right Side - Wider Image */}
          <div className="md:col-span-2">
            <div className="relative h-[400px] md:h-[400px] rounded-2xl overflow-hidden">
              <img
                src={promotionalImage}
                alt="Special Offer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection 
        title="Gifting is just more than just act of giving or receiving something. It's about the thought, the intention, and the connection between the giver and the receiver."
        faqs={faqs}
      />
    </div>
  );
}
