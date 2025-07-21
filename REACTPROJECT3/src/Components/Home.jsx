
import React from "react";
import Chats from "../assets/chats_home.png";
import Jewels from "../assets/jewels_home.png";
import Crafts from "../assets/crafts_home.png";

const Home = () => {
  return (
    <div className="home-container py-5">
      <Section title="Chaats" text="   Chats are more than just conversations — they’re vibrant
                exchanges that connect people, share culture, and build
                community. Whether it's local slang, traditional stories, or
                digital interactions, chats reflect the unique voice of a
                region." img={Chats} />
      <Section title="Jewels" text=" Jewels symbolize heritage, beauty, and craftsmanship. From
                intricately designed gold pieces to sparkling gemstones,
                traditional and modern jewelry tell stories of art, tradition,
                and personal identity." img={Jewels} reverse />
      <Section title="Crafts" text="  Crafts represent creativity and culture through handmade art.
                From pottery and weaving to woodwork and embroidery, each craft
                showcases the skill and tradition passed down through
                generations." img={Crafts} />
    </div>
  );
};

export default Home;

const Section = ({ title, text, img, reverse }) => (
  <div className="container py-5">
    <div className={`row align-items-center${reverse ? " flex-md-row-reverse" : ""}`}>
      <div className="col-md-6 text-center text-block">
        <h1>{title}</h1>
        <p>{text}</p>
        <button>CheckOut</button>
      </div>
      <div className="col-md-6 text-center img-block">
        <img src={img} alt={title} className="img-fluid rounded-circle" />
      </div>
    </div>
  </div>
);
