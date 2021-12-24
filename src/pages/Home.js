import { HandIcon, InboxIcon, StarIcon } from '@heroicons/react/outline';

import bg from "../assets/bg.jpg";
import bg4 from "../assets/bg4.jpg";
import bg3 from "../assets/bg2.jpg";
// import bg4 from "../assets/bg3.jpg";

import Pizza from "../assets/pizza3.jpg";
import Garan from "../assets/garan2.jpg";
import Background from "../assets/background.png";
import Phone from "../assets/phone.png";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Link } from 'react-router-dom';

import 'swiper/swiper.min.css';



SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function Home() {
    return (
        <div>
            <main>

                <div>
                    <Swiper pagination={{
                        "clickable": true
                    }}
                        className='h-banner'
                        autoplay={{
                            "delay": 6000,
                            "disableOnInteraction": false
                        }}>

                        <SwiperSlide>
                            <div className="relative h-full">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                                <div className="max-w-full h-full">
                                    <div className="relative shadow-xl h-full sm:overflow-hidden">
                                        <div className="absolute inset-0">
                                            <img
                                                className="h-full w-full object-cover"
                                                src={bg}
                                                alt="background"
                                            />
                                            <div className="absolute bg-gray-400 inset-0 mix-blend-multiply" />
                                        </div>
                                        <div className="relative py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                            <p className="mt-6 max-w-lg mx-auto text-center text-2xl text-white sm:max-w-3xl">
                                                Bạn cứ việc chọn món
                                            </p>
                                            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                                <span className="block text-white">Giao hàng đã có Daisy lo!</span>
                                            </h1>
                                            <div className="flex text-center items-center mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                                <div className=" items-center  sm:mx-auto  sm:gap-5  ">
                                                    <a
                                                        href="/menu"
                                                        className="flex text-center animate__animated animate__bounceIn animate__slower animate__infinite items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 bg-opacity-80 hover:bg-opacity-70 sm:px-8"
                                                    >
                                                        Chọn món ngay
                                                    </a>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative h-full">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                                <div className="max-w-full h-full">
                                    <div className="relative shadow-xl h-full sm:overflow-hidden">
                                        <div className="absolute inset-0">
                                            <img
                                                className="h-full w-full object-cover"
                                                src={bg3}
                                                alt="background"
                                            />
                                            <div className="absolute bg-gray-400 inset-0 mix-blend-multiply" />
                                        </div>
                                        <div className="relative py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">

                                            <h1 className="text-left font-extrabold tracking-tight sm:text-5xl lg:text-6xl ml-32">
                                                <span className="block text-white text-7xl">Noel đã về. Ưu đãi cực lớn!</span>
                                            </h1>
                                            <div className="flex justify-start mt-10 max-w-sm sm:max-w-none sm:flex ml-32">
                                                <div className=" justify-start sm:gap-5">
                                                    <a
                                                        href="/menu"
                                                        className="flex text-center animate__animated animate__bounceIn animate__slower animate__infinite items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 bg-opacity-80 hover:bg-opacity-70 sm:px-8"
                                                    >
                                                        Chọn món ngay
                                                    </a>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                    <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                Daisy cung cấp các món burgers, pizzas, sapaghetti,...
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12 " src="https://cdn1.iconfinder.com/data/icons/food-drinks-55/1096/burger_Converted-512.png" alt="burger" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://i.pinimg.com/originals/76/16/81/7616818a1416b2a7e3af6c9cc76cc23e.png" alt="pizza" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://image.flaticon.com/icons/png/512/851/851631.png"
                                        alt="fries"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://www.inventicons.com/uploads/iconset/1248/wm/512/Foods_chicken-food-roast-40.png"
                                        alt="Fried Chicken"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://cdn4.iconfinder.com/data/icons/nutrition-big-set/100/nutrition-56-512.png"
                                        alt="spaghetti"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://i.pinimg.com/originals/cf/c2/9c/cfc29cd95b56c9d3f5debfd67eafd69c.png"
                                        alt="drink"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative pt-16 pb-32 overflow-hidden">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                    <div className="relative">
                        <div className="lg:px-32 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense color_background_item1_home">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <HandIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6 mr-16">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Một chiếc pizza hấp dẫn này có đủ khiến bạn liêu xiêu?
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Bánh siêu to! Không lo về giá!
                                        </p>

                                    </div>
                                    <div></div>
                                </div>
                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <blockquote>
                                        <div>
                                            <p className="text-base text-gray-500">

                                            </p>
                                        </div>

                                    </blockquote>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0 ">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                        className="animate__animated animate__fadeInRight  w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={Pizza}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-24">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white" />
                        <div className="relative">
                            <div className="lg:px-32 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense color_background_item2_home">
                                <div className="mt-12 sm:mt-16 lg:mt-0 col-span-1">
                                    <div className="pl-4  sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                        <img
                                            className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
                                            src={Garan}
                                            alt="Inbox user interface"
                                        />
                                    </div>
                                </div>
                                <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mr-32 col-span-1">
                                    <div>
                                        <div>
                                            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-yellow-300 to-yellow-300">
                                                <StarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Gà rán giòn đây!
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500">
                                                Những chiếc cánh gà giòn tan đang nằm đợi bạn kìa!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats section */}
                <div className="relative color_background_item3_home h-section rounded shadow">
                    <div className="h-full w-full xl:grid xl:grid-cols-2">

                        <div className="ml-32 mt-36" >
                            <h1 className="text-3xl font-semibold text-gray-800">ĐẢM BẢO</h1>
                            <p className="text-4xl font-bold text-gray-800">GIAO HÀNG TRONG 30 PHÚT</p>
                            <p className="text-2xl pt-10 color-text2">Cơm không ăn thì gạo còn đó. Thấy Daisy mà không ngó thì đêm về khó ngủ yên.</p>
                            <div className="flex   mt-10 max-w-sm mx-auto sm:max-w-none sm:flex ">
                                <a
                                    href="/menu"
                                    className="flex text-center  px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 bg-opacity-80 hover:bg-yellow-400 sm:px-8"
                                >
                                    Chọn món ngay
                                </a>

                            </div>
                        </div>
                        <div className="h-full xl:relative xl:col-start-2 " style={{ backgroundImage: `url(${Background})` }}>
                            <img
                                className="absolute right-10 "
                                src={Phone}
                                width={600}
                                height={700}
                            />

                        </div>
                    </div>

                </div>

                {/* CTA Section */}
                <div className="bg-white">
                    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl ">
                            <span className="block ">Sẵn sàng chinh chiến với các món ngon?</span>
                            <span className="block bg-gradient-to-r from-green-500 to-green-500 bg-clip-text text-transparent pb-4">
                                Tạo tài khoản và đặt món ngay thôi nào!
                            </span>
                        </h2>
                        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">

                            <Link
                                to='register'
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-800 bg-indigo-50 hover:bg-indigo-100"
                            >
                                Tạo tài khoản ngay
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}