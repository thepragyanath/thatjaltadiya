"use client";

import { products } from "@/data/products";

import Image from "next/image";

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {

  const product = products.find(
  (p) => p.id.toString() === params.id
);

  if (!product) {

    return (
      <div className="p-20 text-3xl">
        Product not found
      </div>
    );

  }

  return (

    <main className="min-h-screen bg-[#f8f4ff] px-6 md:px-16 py-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}

        <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl">

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />

        </div>

        {/* CONTENT */}

        <div>

          <p className="uppercase tracking-[5px] text-[#7e22ce] text-sm font-semibold">
            Pinterest Collection
          </p>

          <h1 className="text-6xl font-black mt-5 leading-tight">
            {product.name}
          </h1>

          <p className="text-[#7e22ce] text-4xl font-black mt-8">
            ₹{product.price}
          </p>

          <p className="text-gray-600 mt-8 text-lg leading-relaxed">

            {product.description}

          </p>

          {/* FEATURES */}

          <div className="mt-10 space-y-4">

            <div className="bg-white rounded-2xl p-5 shadow-lg">
              ✨ Handmade with love
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg">
              🎀 Pinterest aesthetic packaging
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-lg">
              💌 Perfect for gifting & surprises
            </div>

          </div>

          {/* BUTTONS */}

          <div className="flex gap-5 mt-12 flex-wrap">

            <button className="bg-gradient-to-r from-[#9333ea] to-[#7e22ce] text-white px-10 py-5 rounded-2xl shadow-2xl font-bold text-lg">

              Add To Cart

            </button>

            <button className="bg-white border border-purple-100 px-10 py-5 rounded-2xl shadow-lg font-bold text-lg">

              Customize Gift 🎀

            </button>

          </div>

          {/* REVIEWS */}

          <div className="mt-16">

            <h2 className="text-3xl font-black">
              Customer Reviews 💜
            </h2>

            <div className="mt-8 space-y-5">

              <div className="bg-white rounded-2xl p-6 shadow-lg">

                <p className="text-gray-700 leading-relaxed">
                  “Looked even prettier in real life 😭✨”
                </p>

                <p className="mt-4 font-bold text-[#7e22ce]">
                  — KIIT Student
                </p>

              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">

                <p className="text-gray-700 leading-relaxed">
                  “The packaging felt SO premium 💌”
                </p>

                <p className="mt-4 font-bold text-[#7e22ce]">
                  — Repeat Customer
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>

  );
}

