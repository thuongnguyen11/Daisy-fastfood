export default function Home() {
    return (
        <div>
            <main>
                <div>
                    {/* Hero card */}
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
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                                        Happy our special
                                    </p>
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Always fresh and Tasty</span>

                                    </h1>
                                    <div className="flex text-center items-center mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className=" items-center  sm:mx-auto  sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex text-center items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-400 bg-opacity-80 hover:bg-opacity-70 sm:px-8"
                                            >
                                                Order now
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

                {/* More main page content here... */}
            </main>
        </div>
    )
}