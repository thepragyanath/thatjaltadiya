"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ShoppingBag,
  Heart,
  Menu,
  Camera,
  MessageCircle,
} from "lucide-react";

import { useState } from "react";

import { motion } from "framer-motion";

import { products } from "@/data/products";

export default function Home() {

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [cart, setCart] = useState<any[]>([]);
const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: any) => {
  setCart((prev) => [...prev, product]);
  setCartOpen(true);
};

    if (existing) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

  };

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (

    <main className="min-h-screen bg-[#f8f4ff] text-black overflow-hidden">

      {/* NAVBAR */}

      <nav className="flex items-center justify-between px-6 md:px-16 py-6 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-purple-100">

        <div className="flex items-center gap-4">

          <Image
            src="/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full shadow-lg"
          />

          <div>

            <h1 className="text-2xl font-black">
              ThatJaltadiya
            </h1>

            <p className="text-sm text-purple-700">
              Pinterest gifting studio 🎀
            </p>

          </div>

        </div>

        {/* DESKTOP MENU */}

        <div className="hidden md:flex items-center gap-10 font-medium">

          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Reviews</a>
          <a href="#">Customize</a>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-6">

          {/* CART */}

          <button className="relative">

            <ShoppingBag className="w-7 h-7" />

            <div className="absolute -top-2 -right-2 bg-[#9333ea] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">

              {totalItems}

            </div>

          </button>

          {/* MOBILE MENU */}

          <button
            className="md:hidden"
            onClick={() =>
              setMobileMenu(!mobileMenu)
            }
          >

            <Menu />

          </button>

        </div>

      </nav>

      {/* MOBILE MENU DROPDOWN */}

      {mobileMenu && (

        <div className="md:hidden bg-white shadow-xl p-6 space-y-4 text-lg font-medium">

          <a href="#" className="block">
            Home
          </a>

          <a href="#" className="block">
            Shop
          </a>

          <a href="#" className="block">
            Reviews
          </a>

          <a href="#" className="block">
            Customize
          </a>

        </div>

      )}

      {/* HERO */}

      <section className="relative text-center px-6 py-28 overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 opacity-20 blur-3xl rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >

          <p className="uppercase tracking-[5px] text-[#7e22ce] text-sm font-semibold">

            Affordable Pinterest Gifting

          </p>

          <h1 className="text-5xl md:text-7xl font-black mt-8 leading-tight max-w-6xl mx-auto">

            Cute Hampers, Candles & Dreamy Gifts 💌

          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-lg text-gray-600 leading-relaxed">

            Customized gifting experiences made for birthdays,
            friendships and unforgettable memories ✨

          </p>

          <div className="flex gap-5 justify-center mt-10 flex-wrap">

            <button className="bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white px-8 py-4 rounded-2xl shadow-2xl font-semibold">

              Shop Collection

            </button>

            <button className="bg-white border border-purple-100 px-8 py-4 rounded-2xl shadow-lg font-semibold">

              Customize Gift

            </button>

          </div>

        </motion.div>

      </section>

      {/* PRODUCTS */}

      <section className="px-6 md:px-16 py-20">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#7e22ce] text-sm font-semibold">

            Bestseller Collection

          </p>

          <h2 className="text-5xl font-black mt-5">

            Viral Pinterest Gifts ✨

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          {products.map((product) => (

            <motion.div
              whileHover={{ y: -10 }}
              key={product.id}
              className="bg-white/70 backdrop-blur-xl rounded-[36px] shadow-2xl border border-white overflow-hidden"
            >

              <a href={`/product/${product.id}`}>

  <div className="relative h-80 overflow-hidden">

    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-cover hover:scale-110 transition duration-500"
    />

  </div>

</a>

              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <Heart className="text-pink-500 cursor-pointer" />

                </div>

                <p className="text-[#7e22ce] font-bold text-xl mt-3">
                  ₹{product.price}
                </p>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {product.description}
                </p>

                <button
  onClick={() => addToCart(product)}
  className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-2xl font-semibold transition"
>
  Add To Cart 🛒
</button>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* INSTAGRAM SECTION */}

      <section className="px-6 md:px-16 py-24">

        <div className="bg-[#1e1b2e] text-white rounded-[40px] p-10 md:p-16 shadow-2xl">

          <div className="flex items-center gap-4">

            <Camera className="w-10 h-10 text-pink-400" />

            <div>

              <p className="uppercase tracking-[4px] text-pink-300 text-sm">
                Follow Our Journey
              </p>

              <h2 className="text-5xl font-black mt-2">
                @thatjaltadiya 🎀
              </h2>

            </div>

          </div>

          <p className="text-gray-300 mt-8 max-w-3xl text-lg leading-relaxed">

            Behind-the-scenes, packaging videos, aesthetic gifting inspiration,
            student hustle content & dreamy Pinterest vibes ✨

          </p>

          <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-xl">

<a
  href="https://instagram.com/thatjaltadiya"
  target="_blank"
>

  <button className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-xl hover:scale-105 transition">

    Follow On Instagram 🎀

  </button>

</a>
          </button>

        </div>

      </section>

      {/* REVIEWS */}

      <section className="px-6 md:px-16 py-20">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-[#7e22ce] text-sm font-semibold">

            Customer Love

          </p>

          <h2 className="text-5xl font-black mt-5">

            What Students Say 💜

          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white rounded-[32px] shadow-xl p-8">

            <p className="text-lg leading-relaxed text-gray-700">
              “The cutest hamper ever 😭 literally looked Pinterest perfect.”
            </p>

            <p className="mt-6 font-bold text-[#7e22ce]">
              — KIIT Student
            </p>

          </div>

          <div className="bg-white rounded-[32px] shadow-xl p-8">

            <p className="text-lg leading-relaxed text-gray-700">
              “Packaging was SO pretty and delivery was super fast 💌”
            </p>

            <p className="mt-6 font-bold text-[#7e22ce]">
              — Hostel Customer
            </p>

          </div>

          <div className="bg-white rounded-[32px] shadow-xl p-8">

            <p className="text-lg leading-relaxed text-gray-700">
              “Felt luxurious but still affordable for students ✨”
            </p>

            <p className="mt-6 font-bold text-[#7e22ce]">
              — Repeat Buyer
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="px-6 md:px-16 py-10 border-t border-purple-100 text-center text-gray-500">

        Made with 💜 by ThatJaltadiya

      </footer>

{/* WHATSAPP FLOATING BUTTON */}

<a
  href="https://wa.me/919007495070?text=Hi%20I%20want%20to%20order%20from%20ThatJaltadiya%20🎀"
  target="_blank"
  className="fixed bottom-6 right-6 z-50"
>

  <div className="bg-green-500 hover:bg-green-600 transition shadow-2xl rounded-full p-5 flex items-center justify-center hover:scale-110">

    <MessageCircle className="text-white w-8 h-8" />

  </div>

</a>
{/* CART DRAWER */}

<div
  className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-2xl z-50 transition-transform duration-300 ${
    cartOpen ? "translate-x-0" : "translate-x-full"
  }`}
>

  <div className="p-6 flex justify-between items-center border-b">

    <h2 className="text-2xl font-bold">
      Your Cart 🛒
    </h2>

    <button
      onClick={() => setCartOpen(false)}
      className="text-2xl"
    >
      ✕
    </button>

  </div>

  <div className="p-6 space-y-4 overflow-y-auto h-[80%]">

    {cart.length === 0 ? (

      <p className="text-gray-500">
        Your cart is empty
      </p>

    ) : (

      cart.map((item, index) => (

        <div
          key={index}
          className="flex items-center gap-4 border-b pb-4"
        >

          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 rounded-xl object-cover"
          />

          <div>

            <h3 className="font-semibold">
              {item.name}
            </h3>

            <p className="text-purple-600 font-bold">
              ₹{item.price}
            </p>

          </div>

        </div>

      ))

    )}

  </div>

  <div className="p-6 border-t">

    <button
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-semibold"
    >
      Proceed To Checkout
    </button>

  </div>

</div>
    </main>

  );
}

