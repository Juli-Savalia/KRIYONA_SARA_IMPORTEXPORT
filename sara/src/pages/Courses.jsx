import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import '../styles/courses.css'
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
const cardData = [
  {
    image: "https://i.imgur.com/oYiTqum.jpg",
    title: "Jessica Parker",
    status: "1 hour ago",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
  },
  {
    image: "https://i.imgur.com/2DhmtJ4.jpg",
    title: "Kim Cattrall",
    status: "3 hours ago",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?"
  },

];

const Courses = () => {
  return (
    <div className="bg-mainpurple">
      <TopHeader></TopHeader>
      <Header></Header>
      <section className="py-28">
        <div className="container">
          <div className="col-12">
            <div className="">
            <ul className="cards flex flex-wrap">
              {cardData.map((card, index) => (
                <li key={index} className="col-6 px-5 h-96">
                  <a href className="card">
                    <img
                      src={card.image}
                      className="card__image"
                      alt
                    />
                    <div className="card__overlay">
                      <div className="card__header">
                        <svg
                          className="card__arc"
                        >
                          <path />
                        </svg>
                        <img
                          className="card__thumb"
                          alt
                        />
                        <div className="card__header-text">
                          <h3 className="card__title">{card.title}</h3>
                          <span className="card__status">{card.status}</span>
                        </div>
                      </div>
                      <p className="card__description">{card.description}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  );
};

export default Courses;