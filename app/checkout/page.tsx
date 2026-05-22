"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Image from "next/image";

export default function CheckoutPage() {

  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {

    const storedCart =
      localStorage.getItem("cartItems");

    if (storedCart) {

      setCartItems(JSON.parse(storedCart));

    }

  }, []);

  const total = cartItems.reduce(
    (acc, item) =>
      acc + item.price * item.quantity,
    0
  );

  return (

    <main className="min-h-screen bg-gradient-to-br from-[#f7f2ff] via-[#ffffff] to-[#f3e8ff] px-6 md:px-16 py-16 text-black overflow-hidden">

      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      {/* BACKGROUND BLURS */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 opacity-20 blur-3xl rounded-full"></div>

      {/* BRAND HEADER */}

      <div className="max-w-7xl mx-auto mb-12 relative z-10">

        <div className="flex items-center gap-5 bg-white/70 backdrop-blur-2xl border border-white shadow-xl rounded-[32px] px-8 py-6 w-fit">

          <Image
            src="/logo.png"
            alt="ThatJaltadiya Logo"
            width={70}
            height={70}
            className="rounded-full shadow-lg"
          />

          <div>

            <h1 className="text-3xl font-black text-black tracking-wide">
              ThatJaltadiya
            </h1>

            <p className="text-[#7e22ce] font-medium mt-1">
              Pinterest Gifting Studio 🎀
            </p>

          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT SIDE */}

        <div className="bg-white/70 backdrop-blur-2xl rounded-[40px] shadow-2xl border border-white p-8 md:p-12">

          <p className="uppercase tracking-[5px] text-[#7e22ce] text-sm font-semibold">
            Secure Checkout
          </p>

          <h1 className="text-5xl md:text-6xl font-black mt-5 leading-tight text-black">
            Complete Your Order 💌
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Fill in your details carefully to receive your dreamy Pinterest aesthetic order ✨
          </p>

          <div className="mt-10 space-y-6">

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full p-5 rounded-2xl bg-white border border-purple-100 outline-none focus:ring-4 focus:ring-purple-200 transition shadow-sm"
              />

            </div>

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-2 w-full p-5 rounded-2xl bg-white border border-purple-100 outline-none focus:ring-4 focus:ring-purple-200 transition shadow-sm"
              />

            </div>

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Delivery Address
              </label>

              <textarea
                placeholder="Enter your hostel / home address"
                className="mt-2 w-full p-5 rounded-2xl bg-white border border-purple-100 outline-none h-36 focus:ring-4 focus:ring-purple-200 transition shadow-sm"
              />

            </div>

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Custom Note / Instructions
              </label>

              <textarea
                placeholder="Add gift note, theme or special instructions 💜"
                className="mt-2 w-full p-5 rounded-2xl bg-white border border-purple-100 outline-none h-28 focus:ring-4 focus:ring-purple-200 transition shadow-sm"
              />

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="bg-[#1e1b2e] text-white rounded-[40px] shadow-2xl p-8 md:p-12 h-fit border border-purple-900">

          <p className="uppercase tracking-[5px] text-purple-300 text-sm font-semibold">
            Order Summary
          </p>

          <h2 className="text-4xl font-black mt-4">
            Your Dream Cart ✨
          </h2>

          <div className="mt-10 space-y-5">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="flex justify-between items-center bg-white/10 p-5 rounded-2xl backdrop-blur-xl"
              >

                <div>

                  <p className="font-semibold text-lg">
                    {item.name}
                  </p>

                  <p className="text-purple-200 text-sm mt-1">
                    Quantity: {item.quantity}
                  </p>

                </div>

                <p className="font-bold text-lg">
                  ₹{item.price * item.quantity}
                </p>

              </div>

            ))}

          </div>

          {/* TOTAL */}

          <div className="border-t border-purple-800 my-10"></div>

          <div className="flex justify-between items-center">

            <p className="text-2xl font-bold">
              Total
            </p>

            <p className="text-4xl font-black text-purple-300">
              ₹{total}
            </p>

          </div>

          {/* PAYMENT BUTTON */}

          <button
            onClick={async () => {

              const options = {

                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,

                amount: total * 100,

                currency: "INR",

                name: "ThatJaltadiya",

                description: "Pinterest Aesthetic Gifting",

                image: "/logo.png",

                handler: function (response: any) {

                  alert("Payment Successful 💜");

                  console.log(response);

                },

                theme: {
                  color: "#7e22ce",
                },
              };

              //@ts-ignore

              const razor =
                new window.Razorpay(options);

              razor.open();

            }}
            className="mt-12 w-full bg-gradient-to-r from-[#9333ea] to-[#7e22ce] hover:scale-[1.02] transition duration-300 text-white py-5 rounded-2xl text-lg font-bold shadow-2xl"
          >

            Pay Securely 💜

          </button>

          <p className="text-center text-purple-200 text-sm mt-6 leading-relaxed">
            100% secure payments powered by Razorpay ✨
          </p>

        </div>

      </div>

    </main>
  );
}