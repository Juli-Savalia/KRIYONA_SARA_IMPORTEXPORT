import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "../styles/Companies.css";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import TopBtn from "../components/Topbtn";
import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from "react";
const Success = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="load">
      {loading ? (
        <div className="">
          <HashLoader
            color={"blue"}
            className="h-100 w-100"
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="bg-mainpurple">
          <TopHeader />
          <Header />
          <h3 className="text-mainblue text-center bg-mainpurple m-0 pt-7 text-4xl font-bold">
            Our Success Story
          </h3>
          <section className="py-32 bg-mainpurple relative">
            <div className="container">
              <div className="col-10 mx-auto shadow-lg p-5 mb-28 rounded-xl">
                <div className="flex flex-wrap items-center">
                  <div className="pb-28 col-sm-12 col-md-10 col-lg-5 col-xl-5">
                    <img
                      src="public/satishsir.jpg"
                      alt="satishsir"
                      className="transition-all duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="pb-28 col-sm-12 col-md-10 col-lg-7 col-xl-7 ps-5">
                    <h2 className="text-3xl font-bold">
                      The Inspiring Journey of{" "}
                      <font className="text-mainblue">Satish Hirpara</font>: A
                      Testament to Resilience and Determination
                    </h2>
                    <h6 className="pt-3 font-semibold">
                      CEO & founder Eveg International Private Limited
                    </h6>
                    <br />
                    <p>
                      A Gujarati boy born on May 05, 1994, about whom no one
                      knew what he would do when he grew up, what kind of man
                      would he become? How will he move forward in the race of
                      his life?? Today we have to talk about such a brave,
                      fearless and helpful person i.e., Satish Hirpara. He has
                      seen a lot in his youth and struggled a lot and today he
                      is a successful businessman and owner of a company.
                    </p>
                    <div className="py-7">
                      <ul className="m-0 p-0 flex justify-between">
                        <li className="px-3">
                          <a
                            href="https://www.instagram.com/ceo_satish_hirpara/?igsh=emFpcXpwbTE1ZGNl"
                            target="_blank"
                            className="text-dark text-3xl"
                          >
                            <BsInstagram />
                          </a>
                        </li>
                        <li className="px-3">
                          <a
                            href="https://www.youtube.com/@satish_hirpara"
                            target="_blank"
                            className="text-dark text-4xl"
                          >
                            <AiFillYoutube />
                          </a>
                        </li>
                        <li className="px-3">
                          <a
                            href="https://www.instagram.com/ceo_satish_hirpara/?igsh=emFpcXpwbTE1ZGNl"
                            target="_blank"
                            className="text-dark text-3xl"
                          >
                            <BsInstagram />
                          </a>
                        </li>
                        <li className="px-3">
                          <a
                            href="https://www.instagram.com/ceo_satish_hirpara/?igsh=emFpcXpwbTE1ZGNl"
                            target="_blank"
                            className="text-dark text-3xl"
                          >
                            <BsInstagram />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pb-32 bg-mainpurple relative">
            <div className="container">
              <div className="col-10 mx-auto shadow-lg p-5 mb-28 rounded-xl">
                <div className="flex flex-wrap items-center">
                  <div className="pb-20 col-sm-12 col-md-10 col-lg-7 col-xl-7">
                    <h2 className="text-3xl font-bold">
                      Eveg from
                      <font className="text-mainblue px-1">
                        Satish Hirpara's
                      </font>{" "}
                      point of view
                    </h2>
                    <br />
                    <p>
                      Satish who was not already interested in teaching but went
                      to study out of fear of his father and because of society
                      but his mind never felt in the books. He has inherited the
                      rites of helping others from his mother and fearlessness
                      from his father. It often seems that even God tests such
                      people, robbing them of their mother’s happiness at an
                      early age. Whenever such an incident took place, even a
                      person with a rock-like mind would fall, but Satish did
                      not lose courage and did not allow anyone else to lose
                      courage.
                      <br />
                      <br />
                      Not only was he interested in teaching but he was also
                      under pressure from his family. He had taken admitted in
                      civil but he was a direct student !! Despite taking
                      admission in civil, he used to go and sit in mechanical
                      class. It is said that something similar happened to
                      Satish. He failed in civil because of his teaching by
                      Param, so the family members were very upset with him.
                      Listening to him a lot, forcing him to do something
                      because the family also has some expectations from him
                      when the boy is old enough. But Satish had a different
                      tune in his mind and he wanted to do something new.
                    </p>
                  </div>
                  <div className="pb-20 col-sm-12 col-md-10 col-lg-5 col-xl-5 ps-5">
                    <img src="public/e-veg.png" alt="satishsir" />
                  </div>
                  <div>
                    <p>
                      For this, he had no one from his family to support him.
                      Naturally, if you don’t even have two rupees in your
                      pocket and you are talking about lakhs, will anyone
                      believe it?? His dreams with Satish were high but he did
                      not have anything special with which he could make a fresh
                      start. However, he did not lose heart and continued his
                      hard work. But it is said that good men have to travel a
                      lot. Satish started his career and there he had a terrible
                      accident. An accident that made everyone talk, this person
                      may not be able to stand on his own. But Satish loses his
                      courage!!! He also beat death and got out of bed in just
                      two months Then a new Satish was born and now this Satish
                      could not be stopped by anyone.
                    </p>

                    <div>
                      <img
                        src="public/socialwork1.jpeg"
                        alt="socialwork"
                        className="py-4"
                      />
                    </div>
                    <p>
                      Satish Share could have started his career by going abroad
                      but Satish, who loved his country and gave more importance
                      to his family, started the company in his own country. A
                      company is a very well-known exporting company in today’s
                      exports i.e. “Eveg International Private Limited” Eveg
                      means how to bring the vegetable or farmer’s kai to the
                      international market through the internet. The work that
                      Satish did with his thoughts and hard work. Eveg is one of
                      the existing top-ranked companies. Which currently teaches
                      a lot of young people how to export. Satish’s dream is to
                      teach 10,000 young people like him how to export and take
                      the country’s economy forward.
                      <br />
                      <br />
                      Satish is always at the forefront of helping others as he
                      has inherited it from his mother. People always party in
                      celebration of their birthdays or go out with their
                      friends. But Satish doesn’t believe in all this, he always
                      uniquely celebrates his birthday. That day he does
                      something new and helps people who are like to inspire
                      today’s youth. Satish motivates many people with his work.
                      His dream is for every youth of India to move forward in
                      their way and make the country famous.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
          <Copyright />
          <TopBtn />
        </div>
      )}
    </div>
  );
};

export default Success;
