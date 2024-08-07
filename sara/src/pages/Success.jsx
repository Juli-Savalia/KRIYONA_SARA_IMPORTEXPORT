import React from 'react';
import TopHeader from '../components/TopHeader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Copyright from '../components/Copyright';
import '../styles/Companies.css';

const Success = () => {
    return (
        <div className='bg-mainpurple'>
            <TopHeader />
            <Header />
            <h3 className="text-mainblue text-center bg-mainpurple m-0 pt-7 text-4xl font-bold">
                Our Success Story
            </h3>
            <section className="py-32 bg-mainpurple relative">
                <div className="container">
                    <div className="flex flex-wrap items-center">
                        <div className="pb-28 col-sm-12 col-md-10 col-lg-5 col-xl-5">
                            <img src="public/satishsir.jpg" alt="satishsir" />
                        </div>
                        <div className="pb-28 col-sm-12 col-md-10 col-lg-7 col-xl-7 ps-5">
                            <h2 className='text-3xl font-bold'>
                                The Inspiring Journey of <font className='text-mainblue'>Satish Hirpara</font>: A Testament to Resilience and Determination</h2>
                            <h6 className='pt-3 font-semibold'>
                                CEO & founder Eveg International Private Limited
                            </h6><br />
                            <p>On May 5, 1994, a Gujarati boy named Satish Hirpara entered the world, a day that would mark the beginning of an extraordinary journey. At that time, no one could have predicted the path his life would take or the profound impact he would have on those around him. Today, we celebrate Satish as a brave, fearless, and incredibly helpful individual—a successful businessman and the proud owner of a flourishing company.
                                <br /><br />
                                From a young age, Satish exhibited an innate curiosity and an unwavering determination to succeed. Growing up in a modest environment, he faced numerous challenges that tested his resilience. While many may have succumbed to the pressures of their circumstances, Satish chose to confront each obstacle head-on, using his experiences as stepping stones rather than stumbling blocks.
                                <br /><br />
                                As a young man, Satish encountered various hardships that shaped his character and instilled in him the values of hard work and perseverance. He understood that success does not come easy; it is the result of relentless effort and an unyielding spirit. With a clear vision of his goals, he embarked on a journey of self-improvement and growth. He sought out opportunities to learn, acquire new skills, and broaden his horizons. <br /><br />

                                Today, Satish Hirpara stands as a beacon of hope and inspiration for many. His story is a testament to the power of resilience, hard work, and the unwavering belief in oneself. He has proven that with determination and the right mindset, one can overcome any challenge and achieve greatness.
                            </p>
                        </div>
                        <div className="pb-20 col-sm-12 col-md-10 col-lg-7 col-xl-7">
                            <h2 className='text-3xl font-bold'>
                                Eveg from
                                <font className='text-mainblue px-1'>Satish Hirpara's</font> point of view</h2><br />
                            <p>Satish who was not already interested in teaching but went to study out of fear of his father and because of society but his mind never felt in the books. He has inherited the rites of helping others from his mother and fearlessness from his father. It often seems that even God tests such people, robbing them of their mother’s happiness at an early age. Whenever such an incident took place, even a person with a rock-like mind would fall, but Satish did not lose courage and did not allow anyone else to lose courage.
                                <br /><br />
                                Not only was he interested in teaching but he was also under pressure from his family. He had taken admitted in civil but he was a direct student !! Despite taking admission in civil, he used to go and sit in mechanical class. It is said that something similar happened to Satish. He failed in civil because of his teaching by Param, so the family members were very upset with him. Listening to him a lot, forcing him to do something because the family also has some expectations from him when the boy is old enough. But Satish had a different tune in his mind and he wanted to do something new.

                            </p>
                        </div>
                        <div className="pb-20 col-sm-12 col-md-10 col-lg-5 col-xl-5 ps-5">
                            <img src="public/e-veg.png" alt="satishsir" />
                        </div>
                        <div>
                            <p>For this, he had no one from his family to support him. Naturally, if you don’t even have two rupees in your pocket and you are talking about lakhs, will anyone believe it?? His dreams with Satish were high but he did not have anything special with which he could make a fresh start. However, he did not lose heart and continued his hard work. But it is said that good men have to travel a lot. Satish started his career and there he had a terrible accident. An accident that made everyone talk, this person may not be able to stand on his own. But Satish loses his courage!!! He also beat death and got out of bed in just two months Then a new Satish was born and now this Satish could not be stopped by anyone.</p>

                            <div>
                                <img src="public/socialwork1.jpeg" alt="socialwork" className='py-4' />
                            </div>
                            <p>Satish Share could have started his career by going abroad but Satish, who loved his country and gave more importance to his family, started the company in his own country. A company is a very well-known exporting company in today’s exports i.e. “Eveg International Private Limited” Eveg means how to bring the vegetable or farmer’s kai to the international market through the internet. The work that Satish did with his thoughts and hard work. Eveg is one of the existing top-ranked companies. Which currently teaches a lot of young people how to export. Satish’s dream is to teach 10,000 young people like him how to export and take the country’s economy forward.

                                <br /><br />

                                Satish is always at the forefront of helping others as he has inherited it from his mother. People always party in celebration of their birthdays or go out with their friends. But Satish doesn’t believe in all this, he always uniquely celebrates his birthday. That day he does something new and helps people who are like to inspire today’s youth. Satish motivates many people with his work. His dream is for every youth of India to move forward in their way and make the country famous.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Success;