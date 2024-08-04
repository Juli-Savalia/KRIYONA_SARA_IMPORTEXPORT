import React, { useState } from "react";
import "../styles/Utility.css";
import { Link } from "react-router-dom";

const Book = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const toggleClass = (element, toggleClassName) => {
    element.classList.toggle(toggleClassName);
  };

  const movePage = (element, page) => {
    const pages = Array.from(document.querySelectorAll(".page"));
    const index = pages.indexOf(element);

    if (page === currentPage) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 2;
        toggleClass(element, "left-side");
        if (index + 1 < pages.length) {
          toggleClass(pages[index + 1], "left-side");
        }
        return newPage;
      });
    } else if (page === currentPage - 1) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 2;
        toggleClass(element, "left-side");
        if (index - 1 >= 0) {
          toggleClass(pages[index - 1], "left-side");
        }
        return newPage;
      });
    }
  };


  return (
    <section className="pb-28 pt-14 relative bg-purple-50">
      <img src="public/vector7.png" alt="v7" className="absolute"/>
      <div className="container">
        <div className="py-4">
          <div className="flex flex-wrap justify-between">
            <div className="col-sm-10 col-md-10 col-lg-4 col-xl-4 relative mx-auto h-[400px]">
              <div className="book h-100">
                <div
                  className="page cover-front"
                  onClick={(e) => movePage(e.currentTarget, 1)}
                >
                  <h6 className="text-white text-2xl w-3/4 mx-auto  leading-normal mt-11 font-bold">Course Content Facilities .</h6>
                  <p>Open Me</p>
                  <div className="hat">
                    <i className="fab fa-pied-piper-hat" />
                  </div>
                </div>
                <div
                  className="page cover-front"
                  onClick={(e) => movePage(e.currentTarget, 2)}
                />
                {/* p1 */}
                <div
                  className="page text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 3)}
                >
                  <p>
                    Course Content
                  </p>
                  <p>
                  Our Certified Import-Export Course is meticulously designed to provide students with comprehensive knowledge and practical skills in the global trade industry. This course covers essential topics such as international trade regulations, logistics, documentation, and customs procedures.
                  </p>
                  <Link to={"/"}>Learn More</Link>
                </div>
                <div
                  className="page text-page"
                  onClick={(e) => movePage(e.currentTarget, 4)}
                >
                 
                </div>
                {/* p2 */}
                <div
                  className="page text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 5)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">F</font>aculties
                  </p>
                  <p>Our esteemed faculties comprise seasoned professionals and experts with extensive experience in the field of international trade and commerce. Each member of our faculty brings a wealth of knowledge and practical insights, having worked in various capacities across global markets.</p>
                  <Link to={"/"}>Learn More</Link>
                </div>
                <div
                  className="page text-page"
                  onClick={(e) => movePage(e.currentTarget, 6)}
                >
                </div>
                {/* p3 */}
                <div
                  className="page text-page p-4"
                  onClick={(e) => movePage(e.currentTarget, 7)}
                >
                  <p className="text-xl">
                    {" "}
                    <font className="text-4xl font-semibold">E</font>xam Documents Learning
                  </p>
                  <p>Mastering the preparation and understanding of exam documents is crucial for academic success. Our focused learning module on exam documents equips students with the skills to effectively create, organize, and review essential materials. </p>
                  <Link to={"/"}>Learn More</Link>
                </div>
                <div
                  className="page text-page"
                  onClick={(e) => movePage(e.currentTarget, 8)}
                >
                </div>
                {/* Additional pages can be added here */}
                {Array.from({ length: 60 }).map((_, index) => (
                  <div key={index} className="page" />
                ))}
              </div>
            </div>
            <div className="col-sm-10 col-md-10 col-lg-6 col-xl-6 sm:pt-16 lg:pt-0 mx-auto">
            <h3 className="text-4xl text-center font-bold sm:text-3xl">
          Export Import Certified Course
        </h3>
        <p className="mx-auto pt-3 text-center text-mainblue">By Uka Tarasadiya University</p>
        <p className="pt-5 sm:text-sm lg:text-base sm:leading-normal">Our Export-Import Certified Course is designed to equip professionals with the essential knowledge and skills needed to excel in the global trade industry. This comprehensive program covers key areas such as international trade laws, global supply chain management, import-export documentation, and customs regulations. Participants will gain insights into market analysis, trade finance, and risk management, ensuring they are well-prepared to navigate the complexities of international commerce.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
