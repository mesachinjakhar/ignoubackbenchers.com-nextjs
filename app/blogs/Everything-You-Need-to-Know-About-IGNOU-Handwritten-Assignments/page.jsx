import React from "react";
import Head from "next/head";
import Link from "next/link";

const Blog = () => (
  <div className="p-5">
    <Head>
      <title>IGNOU Handwritten Assignments - Fast & Reliable Delivery</title>
      <meta
        name="description"
        content="Order IGNOU handwritten assignments online. Professionally written, university-approved assignments with fast doorstep delivery."
      />
    </Head>
    <article>
      <h1>IGNOU Handwritten Assignments - Fast & Reliable Delivery</h1>
      <p>
        Writing IGNOU assignments can be overwhelming. We provide
        **professionally handwritten assignments**, ensuring **100% acceptance
        by IGNOU**.
      </p>
      <br />
      <h2>📝 Why Order IGNOU Handwritten Assignments from Us?</h2>
      <ul>
        <li>
          📌 **University-Approved Format** – Follow IGNOU’s latest submission
          guidelines.
        </li>
        <li>
          ✍️ **Expertly Handwritten Assignments** – Clear, neat, and
          well-structured.
        </li>
        <li>
          🚀 **Fast Delivery Across India** – Receive within **8-10 business
          days**.
        </li>
        <li>
          📖 **Covers All IGNOU Courses** – Available for **UG & PG programs**.
        </li>
      </ul>
      <br />
      <h2>📦 How to Order?</h2>
      <ol>
        <Link href="/order">
          <li className="underline cursor-pointer">
            🌐 Click here to order online
          </li>
        </Link>
        <br />
        <li>----OR---</li>
        <br />
        <li>📞 Call **+91 90534 42043** for quick assistance.</li>
        <li>💬 WhatsApp us with your subject details.</li>
        <li>📥 Receive your assignment **on time, every time**.</li>
      </ol>
      <br />
      <p>
        <strong>
          Save time and submit your IGNOU assignment hassle-free! **Order
          today.**
        </strong>
      </p>
    </article>
  </div>
);

export default Blog;
