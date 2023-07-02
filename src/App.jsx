import Section from './Section'
import profile from './assets/image/Profile/Md Ashraful Hossain.jpg'
import contact from './assets/image/Contact/contact.png'
import c1 from './assets/image/Projects/c1.png'
import c2 from './assets/image/Projects/c2.png'
import c3 from './assets/image/Projects/c3.png'
import c4 from './assets/image/Projects/c4.png'
import c5 from './assets/image/Projects/c5.png'
import c6 from './assets/image/Projects/c6.png'
import t1 from './assets/image/Projects/t1.png'
import t2 from './assets/image/Projects/t2.png'
import t3 from './assets/image/Projects/t3.png'
import t4 from './assets/image/Projects/t4.png'
import t5 from './assets/image/Projects/t5.png'
import t6 from './assets/image/Projects/t6.png'
import t7 from './assets/image/Projects/t7.png'
import t8 from './assets/image/Projects/t8.png'
import t9 from './assets/image/Projects/t9.png'
import t10 from './assets/image/Projects/t10.png'
import t11 from './assets/image/Projects/t11.png'
import t12 from './assets/image/Projects/t12.png'
import s1 from './assets/image/Projects/s1.png'
import s2 from './assets/image/Projects/s2.png'
import s3 from './assets/image/Projects/s3.png'
import s4 from './assets/image/Projects/s4.png'
import s5 from './assets/image/Projects/s5.png'
import s6 from './assets/image/Projects/s6.png'
import s7 from './assets/image/Projects/s7.png'
import s8 from './assets/image/Projects/s8.png'
import s9 from './assets/image/Projects/s9.png'
import s10 from './assets/image/Projects/s10.png'
import sk1 from './assets/image/Skill/javascript.png'
import sk2 from './assets/image/Skill/tailwind.png'
import sk3 from './assets/image/Skill/bootstrap.png'
import sk4 from './assets/image/Skill/css3.png'
import sk5 from './assets/image/Skill/html.png'
import sk6 from './assets/image/Skill/node.png'
import sk7 from './assets/image/Skill/express.png'
import sk8 from './assets/image/Skill/mongodb.jpg'
import sk9 from './assets/image/Skill/react.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { Link } from 'react-scroll'


function App() {
 
  const downloadUrl = 'https://drive.google.com/u/1/uc?id=1veD2vWDMrSYGyMkgZCOtWk7ptUrjqZ0l&export=download';
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'Md Asraful Hossain.pdf'; // Set the desired filename for the downloaded file
    link.click();
  };
  const navItem = <>
    <li className=''><Link to='home' smooth={true} duration={1000} className='hover:bg-white text-white text-lg'>Home</Link></li>
    <li className=''><Link onClick={handleDownload} className='hover:bg-white text-white text-lg'>Resume</Link></li>
    <li className=''><Link to='projects' smooth={true} duration={1000} className='hover:bg-white text-white text-lg'>Project</Link></li>
    <li className=''><Link to='about' smooth={true} duration={1000} className='hover:bg-white text-white text-lg' onclick='smoothScroll(event)'>About Me</Link></li>
    <li className=''><Link to='skill' smooth={true} duration={1000} className='hover:bg-white text-white text-lg' onclick='smoothScroll(event)'>Skill</Link></li>
    <li className=''><Link to='contact' smooth={true} duration={1000} className='hover:bg-white text-white text-lg'>Contact Me</Link></li>
  </>

  return (
    <>
      <div className='bg-blue-500 text-white relative'>
        <div className='container mx-auto'>
          <section name='home' className='pb-6 md:pb-0'>
            <div className="navbar bg-blue-700 text-white absolute left-0">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 w-52">
                    {navItem}
                  </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl">Md Ashraful Hossain</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {navItem}
                </ul>
              </div>
              <div className="navbar-end">
                <ul className='flex gap-5 mr-5'>
                  <li><a target='_blank' className='text-2xl' href="https://www.facebook.com/md.asif.0987"><FaFacebook /></a></li>
                  <li><a target='_blank' className='text-2xl' href="https://www.linkedin.com/in/md-ashraful-hossain-897316280/"><FaLinkedin /></a></li>
                  <li><a target='_blank' className='text-2xl' href="https://github.com/ashrafulasif123"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-around min-h-screen'>
              <div className='pt-20 md:pt-0'>
                <h2 className='text-6xl' data-aos="fade-down-right">Hello, I am <br />
                  Md Ashraful Hossain</h2>
                <p className='my-5' data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">Junior Web Developer, Experience around 7 Month</p>
                <button onClick={handleDownload} className='btn btn-info'>Download Resume</button>
              </div>
              <div>
                <img data-aos="flip-left" className='rounded-full' src={profile} alt="" />
              </div>
            </div>
            <div>
            </div>
          </section>
          <section name='about' className='md:min-h-screen'>
            <Section subject='About Me'></Section>
            <div className='flex flex-col md:flex-row items-center h-auto md:h-[80vh] justify-around py-5  md:py-0'>
              <div>
                <img data-aos="flip-left" className='rounded-full' src={profile} alt="" />
              </div>
              <div className='w-1/2'>
                <h1 data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" className='text-4xl md:text-4xl mt-11 md:mt-0 font-semibold'> I'm a relatively new web developer with around 6 months of experience.</h1>
                <p className='mt-10'>Hello, My name is Md Ashraful Hossain. I have graduated from International Islamic University Chittagong.
                  My Subject is BSc in CSE. In 2022-dec-10 I enrolled a Web Developing Course With Programming Hero. I specialize in
                  web development and take great pride in creating beautiful,
                  user-friendly web applications. I have expertise with ReactJS, Tailwind CSS, Bootstrap, CSS3, HTML5. Comfortable with
                  Javascript And Familier with Mongo dB, Node JS, Express JS</p>
                <button className="mt-10 btn btn-xs sm:btn-sm md:btn-md btn-info rounded-none text-white"><a href="#contact">Contact Me</a></button>
              </div>
            </div>
          </section>
          <section name='skill' className='min-h-screen'>
            <Section subject='Technical Skills'></Section>
            <div className=''>
              <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk9} alt="" /></h2>
                  <p className='text-lg'>React JS</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk1} alt="" /></h2>
                  <p className='text-lg'>Javascript</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk2} alt="" /></h2>
                  <p className='text-lg'>Tailwind CSS</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk3} alt="" /></h2>
                  <p className='text-lg'>Bootstrap</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk4} alt="" /></h2>
                  <p className='text-lg'>CSS3</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk5} alt="" /></h2>
                  <p className='text-lg'>HTML5</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk6} alt="" /></h2>
                  <p className='text-lg'>Node JS</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk7} alt="" /></h2>
                  <p className='text-lg'>Express JS</p>
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-6xl"><img className='h-[100px]' src={sk8} alt="" /></h2>
                  <p className='text-lg'>MongoDB</p>
                </div>
              </div>
            </div>
          </section>
          <section name='projects' className='min-h-screen'>
            <Section subject='Porjects'></Section>
            <div className=''>
              <div className='pb-5'>
                <h2 className='text-center text-3xl mt-4 font-bold'>My First Project(Justice Chef)</h2>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><img data-aos="zoom-in-up" className='image-full h-[300px]' src={c1} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-in-up" className='image-full h-[300px]' src={c2} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-in-up" className='image-full h-[300px]' src={c3} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-in-up" className='image-full h-[300px]' src={c4} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-in-up" className='image-full h-[300px]' src={c5} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-in-up" className='image-full h-[300px]' src={c6} alt="" /></SwiperSlide>
              </Swiper>
              <div>
                <p className='ml-3 my-3 font-bold text-lg'>Project Technologies:</p>
                <div>
                  <button className="btn btn-active btn-sm ml-3">React JS</button>
                  <button className="btn btn-active btn-neutral btn-sm ml-3">Firebase Authentication</button>
                  <button className="btn btn-active btn-primary btn-sm ml-3">Tailwind CSS</button>
                  <button className="btn btn-active btn-secondary btn-sm ml-3">HTML5</button>
                </div>
                <p className='ml-3 mt-3 font-bold text-lg'>Project Code And Live Site link:</p>
                <div>
                  <button className="btn btn-link text-green-800"><a target='_blank' href='https://github.com/ashrafulasif123/justice-chef-server'>Server Side Github</a></button>
                  <button className="btn btn-link text-yellow-400"><a target='_blank' href='https://github.com/ashrafulasif123/justice-chef-client'>Client Side Github</a></button>
                  <button className="btn btn-link text-orange-400"><a target='_blank' href='https://chef-auth-router-client.web.app/'>Website</a></button>
                </div>
              </div>
            </div>
            <div className='my-12'>
              <div className='pb-5'>
                <h2 className='text-center text-3xl mt-4 font-bold'>My Second Project(Angel Toys)</h2>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t1} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t2} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t3} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t4} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t5} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t6} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t7} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t8} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t9} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t10} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t11} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-up" className='image-full h-[300px]' src={t12} alt="" /></SwiperSlide>
              </Swiper>
              <div>
                <p className='ml-3 my-3 font-bold text-lg'>Project Technologies:</p>
                <div>
                  <button className="btn btn-active btn-sm ml-3">React JS</button>
                  <button className="btn btn-active btn-neutral btn-sm ml-3">Firebase Authentication</button>
                  <button className="btn btn-active btn-accent btn-sm ml-3">Node JS</button>
                  <button className="btn btn-active btn-ghost btn-sm ml-3">Express JS</button>
                  <button className="btn btn-active btn-sm ml-3">Mongodb</button>
                  <button className="btn btn-active btn-primary btn-sm ml-3">Tailwind CSS</button>
                  <button className="btn btn-active btn-secondary btn-sm ml-3">HTML5</button>
                </div>
                <p className='ml-3 mt-3 font-bold text-lg'>Project Code And Live Site link:</p>
                <div>
                  <button className="btn btn-link text-green-800"><a target='_blank' href='https://github.com/ashrafulasif123/toys-angel-server'>Server Side Github</a></button>
                  <button className="btn btn-link text-yellow-400"><a target='_blank' href='https://github.com/ashrafulasif123/toys-angel-client '>Client Side Github</a></button>
                  <button className="btn btn-link text-orange-400"><a target='_blank' href='https://toy-angel-client.web.app/'>Website</a></button>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='pb-5'>
                <h2 className='text-center text-3xl mt-4 font-bold'>My Last Project(Sports Academics)</h2>
              </div>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s1} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s2} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s3} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s4} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s5} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s6} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s7} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s8} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s9} alt="" /></SwiperSlide>
                <SwiperSlide><img data-aos="zoom-out-left" className='image-full h-[300px]' src={s10} alt="" /></SwiperSlide>
              </Swiper>
              <div>
                <p className='ml-3 my-3 font-bold text-lg'>Project Technologies:</p>
                <div>
                  <button className="btn btn-active btn-sm ml-3">React JS</button>
                  <button className="btn btn-active btn-neutral btn-sm ml-3">Firebase Authentication</button>
                  <button className="btn btn-active btn-accent btn-sm ml-3">Node JS</button>
                  <button className="btn btn-active btn-ghost btn-sm ml-3">Express JS</button>
                  <button className="btn btn-active btn-sm ml-3">Mongodb</button>
                  <button className="btn btn-active btn-primary btn-sm ml-3">Tailwind CSS</button>
                  <button className="btn btn-active btn-secondary btn-sm ml-3">HTML5</button>
                </div>
                <p className='ml-3 mt-3 font-bold text-lg'>Project Code And Live Site link:</p>
                <div>
                  <button className="btn btn-link text-green-800"><a target='_blank' href='https://github.com/ashrafulasif123/summar-camp-server'>Server Side Github</a></button>
                  <button className="btn btn-link text-yellow-400"><a target='_blank' href='https://github.com/ashrafulasif123/summar-camp-client'>Client Side Github</a></button>
                  <button className="btn btn-link text-orange-400"><a target='_blank' href='https://summer-camp-f0d29.web.app'>Website</a></button>
                </div>
              </div>
            </div>
          </section>
          <section name='contact' className='h-auto md:min-h-screen'>
            <Section subject='Contact Me'></Section>
            <div className='flex flex-col md:flex-row items-center h-auto md:h-[80vh] justify-around pt-5 md:pt-0'>
              <div className='w-1/2'>
                <img src={contact} alt="" />
                <p className='mx-auto mt-4 bg-info w-full md:w-1/2 text-center p-0 md:p-3 rounded-md'><span className='font-semibold underline'>Email:</span> mdasrafulhossain960@gmail.com</p>
              </div>
              <div className='w-1/2'>
                <div className="card-body">
                  <div className="form-control">
                    <input type="text" placeholder="Name" className="input input-bordered text-black" />
                  </div>
                  <div className="form-control">
                    <input type="text" placeholder="Email" className="input input-bordered text-black" />
                  </div>
                  <div className="form-control">
                    <textarea name="" id="" className='text-black rounded-lg p-4' placeholder='Message'></textarea>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-info">Send</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <footer>
        <footer className="footer footer-center p-10 bg-violet-700 text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
            <Link to ='home' className="link link-hover text-white text-lg">Home</Link>
            <Link to ='projects' className="link link-hover text-white text-lg">Projects</Link>
            <Link to ='about' className="link link-hover text-white text-lg">About Me</Link>
            <Link to ='skill' className="link link-hover text-white text-lg">Skill</Link>
            <Link to ='contact' className="link link-hover text-white text-lg">Contact Me</Link>
          </div>
          <div>
            <ul className='flex gap-5 mr-5 text-white'>
              <li><a target='_blank' className='text-2xl' href="https://www.facebook.com/md.asif.0987"><FaFacebook /></a></li>
              <li><a target='_blank' className='text-2xl' href="https://www.linkedin.com/in/md-ashraful-hossain-897316280/"><FaLinkedin /></a></li>
              <li><a target='_blank' className='text-2xl' href="https://github.com/ashrafulasif123"><FaGithub /></a></li>
            </ul>
          </div>
          <div>
            <p className='text-white'><span className='font-semibold underline'>Contact:</span> West Kazipara, Mirpur, Bangladesh</p>
            <p className='text-white'><span className='font-semibold underline'>Email:</span> mdasrafulhossain960@gmail.com</p>

          </div>
        </footer>
      </footer>
    </>
  )
}

export default App
