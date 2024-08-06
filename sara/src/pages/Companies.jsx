import React from 'react';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../styles/Companies.css';

const Companies = () => {
  const companies = [
    {
      title: 'Zippy Zest',
      description: 'Welcome to ZIPPY ZEST, your vibrant online marketplace for the freshest and finest vegetables! At ZIPPY ZEST, we bring the farm to your fingertips, offering a delightful array of garden-fresh produce thats just a click away. Say goodbye to the hassle of traditional grocery shopping and immerse yourself in the convenience of exploring a virtual green marketplace. Our commitment at ZIPPY ZEST is to provide you with not only the highest quality vegetables but also an effortless and enjoyable shopping experience. Browse through our carefully curated selection of farm-fresh delights, where each vegetable is handpicked to ensure optimum freshness and flavor. From crisp greens to succulent root vegetables, ZIPPY ZEST is your go-to destination for a healthy and flavorful lifestyle.',
      icon: 'public/brand-02.png',
      color : 'green',
    },
    {
      title: 'Parv Infosoft',
      description:'Welcome to PARV INFOSOFT, where innovation meets excellence in the realm of Information Technology. As a cutting-edge IT company, we take pride in our commitment to delivering bespoke solutions that redefine the digital landscape. At PARV INFOSOFT, we harness the power of technology to empower businesses, enhance user experiences, and drive digital transformation. Our team of skilled professionals at PARV INFOSOFT is dedicated to pushing the boundaries of whats possible in the digital realm. Whether you are looking for innovative software development, robust IT infrastructure solutions, or transformative digital strategies, we have the expertise to turn your vision into reality.',
      icon: 'public/brand-04.png',
      color : 'skyblue',

    },
    {
        title: 'Saara lifestyle',
        description:'Welcome to SAARAA LIFESTYLE, where fashion meets expression in a symphony of style and individuality. As a distinctive clothing brand, we invite you to explore a world of timeless elegance, trendsetting designs, and a celebration of personal style. At SAARAA LIFESTYLE, we believe that clothing is an extension of ones identity, and our collections are crafted to inspire confidence and creativity in every wardrobe. Immerse yourself in the allure of our fashion-forward creations, where each piece is meticulously curated to reflect the essence of modern sophistication. From chic casual wear to exquisite formal ensembles, SAARAA LIFESTYLE brings you a diverse range of apparel that transcends seasons, making a bold statement with every stitch.',
        icon: 'public/brand-05.png',
        color : 'black',
      },
      {
        title: 'Elite',
        description:'Welcome to Elite, where convenience meets culinary excellence in our curated selection of READY TO EAT products. At Elite, we redefine the art of dining by bringing you gourmet-quality meals that are not only effortlessly convenient but also a celebration of taste and sophistication. Say goodbye to compromise and embrace a world where premium flavors are ready to be savored at your convenience. Our READY TO EAT offerings at Elite are meticulously crafted to cater to the discerning palate, ensuring that every bite is a symphony of flavors. From quick snacks to hearty meals, each product is a testament to our commitment to providing you with a gastronomic experience that transcends the boundaries of time constraints.',
        icon: 'public/brand-03.png',
        color : 'green'
      },
  ];
  // const colorClasses = {
  //   'blue-600': 'bg-blue-600',
  //   'blue-500': 'bg-blue-500',
  //   'red-500': 'bg-red-500',
  // };

  return (
    <div>
      <TopHeader />
      <Header />
      <h3 className="text-mainblue text-center bg-mainpurple m-0 pt-7 text-4xl font-bold">
        Our Companies
      </h3>
      <section className="py-32 bg-mainpurple relative">
        <img src="public/star.webp" alt="star" className="absolute left-20 top-50 swing" />
        <img src="public/wheel.webp" alt="wheel" className="absolute right-20 top-0 swing h-9" />
        <img src="public/gift.webp" alt="gift" className="absolute right-20 bottom-40 swing h-9" />
        <img src="public/gradient1.avif" alt="gift" className="absolute right-50 top-96 swing opacity-15" />
        <div className="container">
          <div className="col-12 flex flex-wrap items-center">
            {/* {companies.map((company, index) => (
             
            ))} */}
           { console.log(companies)}
            
            {companies.map((company,index)=>{
              return(
                <div
                key={index}
                className="col-sm-12 col-md-12 col-lg-6 col-xl-6 pb-28 px-4"
              >
                <div  className={`serviceBox px-11 pb-11`} style={{'--before-bg': company.color}}>
                  <div className="service-icon">
                    <img src={company.icon} alt={company.title} className="h-28 mx-auto" />
                  </div>
                  <h3 className="title">{company.title}</h3>
                  <p className="description pt-4">{company.description}</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
      <Copyright />
    </div>
  );
};

export default Companies;