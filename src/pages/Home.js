import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    XIcon,
} from '@heroicons/react/outline';

import Pizza from "../assets/pizza3.jpg";
import Garan from "../assets/garan2.jpg";
import Background from "../assets/background.png";
import Phone from "../assets/phone.png";


const features = [
    {
        name: 'Unlimited Inboxes',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon,
    },
    {
        name: 'Manage Team Members',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon,
    },
    {
        name: 'Spam Report',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in Markdown',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: PencilAltIcon,
    },
    {
        name: 'Team Reporting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentReportIcon,
    },
    {
        name: 'Saved Replies',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ReplyIcon,
    },
    {
        name: 'Email Commenting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ChatAltIcon,
    },
    {
        name: 'Connect with Customers',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: HeartIcon,
    },
]
const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]
export default function Home() {
    return (
        <div>
            <main>

                <div>
                    {/* Banner card */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                        <div className="max-w-full">
                            <div className="relative shadow-xl  sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://cltburgerweek.com/wp-content/uploads/2019/03/specials-banner.jpg"
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

                    {/* Logo cloud */}
                    <div className="bg-gray-100">
                        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                We offer delicious burgers, pizzas, sapaghetti,...
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



                {/* Alternating Feature Sections */}
                <div className="relative pt-16 pb-32 overflow-hidden ">
                    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />
                    <div className="relative">
                        <div className=" lg:px-32 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense color_background_item1_home">
                            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                                <div>
                                    <div>
                                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                            <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                    </div>
                                    <div className="mt-6 mr-16">
                                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                            Một chiếc pizza hấp dẫn này có đủ khiến bạn liêu xiêu?
                                        </h2>
                                        <p className="mt-4 text-lg text-gray-500">
                                            Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                            porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
                                            Lectus viverra dui tellus ornare pharetra.
                                        </p>

                                    </div>
                                    <div></div>
                                </div>
                                <div className="mt-8 border-t border-gray-200 pt-6">
                                    <blockquote>
                                        <div>
                                            <p className="text-base text-gray-500">
                                                &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean
                                                curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
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

                    {/* abc*/}

                    {/* abc*/}
                    <div className="mt-24">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-white" />
                        <div className="relative">
                            <div className=" lg:grid lg:grid-cols-2 lg:grid-flow-col-dense color_background_item2_home">
                                <div className="mt-12 sm:mt-16 lg:mt-0 col-span-1">
                                    <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
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
                                            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                                                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                                                Gà rán giòn đây!
                                            </h2>
                                            <p className="mt-4 text-lg text-gray-500">
                                                Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                                                porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at.
                                                Lectus viverra dui tellus ornare pharetra.
                                            </p>
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="inline-flex bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                                >
                                                    Get started
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 border-t border-gray-200 pt-6">
                                        <blockquote>
                                            <div>
                                                <p className="text-base text-gray-500">
                                                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean
                                                    curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                                                </p>
                                            </div>

                                        </blockquote>
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
                            <h1 className="text-3xl font-semibold color-text1">ĐẢM BẢO</h1>
                            <p className="text-4xl font-bold color-text1">GIAO HÀNG TRONG 30 PHÚT</p>
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
                        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            <span className="block">Ready to get started?</span>
                            <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                                Get in touch or create an account.
                            </span>
                        </h2>
                        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                            <a
                                href="#"
                                className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                            >
                                Learn more
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}