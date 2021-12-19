import { Fragment, useEffect } from 'react'
import { Popover, Menu, Transition } from '@headlessui/react'
import {
    AnnotationIcon,
    ChatAlt2Icon,
    InboxIcon,
    ShoppingBagIcon,
    QuestionMarkCircleIcon,
} from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { classNames } from '../common/class-names';
import { logout } from "../store/auth.store";
import { getCart } from "../store/cart.store";
import logo from "../assets/logo7.png";
import Avatar from "../assets/avatar.png"

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: AnnotationIcon,
    },
    { name: 'Live Chat', description: "Your customers' data will be safe and secure.", href: '#', icon: ChatAlt2Icon },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const navigation = [
    { name: "Trang chủ", href: "/" },
    { name: 'Thực đơn', href: '/menu' },
]

export default function Header() {

    const { user } = useSelector((state) => state.auth);
    const { items } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const history = useHistory();

    const userNavigation = [
        { name: 'Đơn hàng của tôi', action: () => history.push('/orders') },
        { name: 'Đăng xuất', action: () => dispatch(logout()) },
    ];

    useEffect(() => {
        if (user) {
            dispatch(getCart()).unwrap();
        }
    }, [user]);

    return (
        <div className=" bg-white">
            <header>
                <Popover className="relative bg-yellow-400 z-20">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-4 sm:px-6 md:justify-between md:space-x-10 lg:px-8">
                        <div className="flex justify-between items-center">
                            <div className="flex  ">
                                <a href="#">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        width={70}
                                        height={70}
                                        style={{marginBottom: -10, marginTop: -10}}
                                        
                                    />
                                </a>
                            </div>
                            <Popover.Group as="nav" className="hidden md:flex space-x-10">
                                <Popover className="relative">
                                    {({ open }) => (
                                        <>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="opacity-0 translate-y-1"
                                                enterTo="opacity-100 translate-y-0"
                                                leave="transition ease-in duration-150"
                                                leaveFrom="opacity-100 translate-y-0"
                                                leaveTo="opacity-0 translate-y-1"
                                            >
                                                <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                            {solutions.map((item) => (
                                                                <a
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                >
                                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-white sm:h-12 sm:w-12">
                                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                                    </div>
                                                                    <div className="ml-4">
                                                                        <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                                    </div>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </>
                                    )}
                                </Popover>

                                {navigation.map((item) => (
                                    <NavLink key={item.name} exact={true} activeClassName='border-b-2 border-bottom-green border-green-500' to={item.href} className="text-nav-color text-base font-medium text-gray-700">
                                        <span>{item.name}</span>
                                    </NavLink>

                                ))}
                            </Popover.Group>
                        </div>
                        {user
                            ? <div className='flex items-center justify-between'>
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="group w-full bg-yellow-400 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:opacity-30 focus:outline-none">
                                            <span className="flex w-full justify-between items-center">
                                                <span className="flex min-w-0 items-center justify-between space-x-3">
                                                    <img
                                                        className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
                                                        src={Avatar}
                                                        alt="avatar"
                                                    />
                                                    <span className="flex-1 flex flex-col min-w-0">
                                                        <span className="text-gray-700 text-sm font-medium truncate">{user.userInfo.name}</span>
                                                        <span className="color_item_header text-sm truncate">{user.userInfo.phone_number}</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <span
                                                            className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                            )}
                                                            onClick={item.action ? item.action : () => { }}
                                                        >
                                                            {item.name}
                                                        </span>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                                <div className="ml-4 flow-root lg:ml-6 relative">
                                    <Link to="/cart" className={classNames(user ? 'group -m-2 p-2 flex items-center' : 'hidden')}>
                                        <ShoppingBagIcon
                                            className="flex-shrink-0 h-6 w-6 text-gray-600 group-hover:text-gray-500 "
                                            aria-hidden="true"
                                        />
                                        <span className="ml-2 text-sm font-medium  group-hover:text-gray-800 absolute -bottom-2 color_bag text-yellow-400 w-5 h-5 rounded-full left-2 text-center ">{items.length}</span>
                                        <span className="sr-only">items in cart, view bag</span>
                                    </Link>
                                </div>
                            </div>
                            : <div className={classNames(!user ? 'ml-10 space-x-4' : 'hidden')}>
                                <Link
                                    to='login'
                                    className="inline-block bg-yellow-400 py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-700 hover:bg-opacity-75"
                                >
                                    Đăng nhập
                                </Link>
                                <Link
                                    to='register'
                                    className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-gray-700 hover:bg-indigo-50"
                                >
                                    Đăng ký
                                </Link>
                            </div>
                        }
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img
                                                className="h-8 w-auto"
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt="Workflow"
                                            />
                                        </div>

                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid grid-cols-1 gap-7">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                >
                                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-yellow-400 text-white">
                                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                                                </a>
                                            ))}
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        {navigation.map((item) => (
                                            <NavLink
                                                exact={true}
                                                key={item.name}
                                                activeClassName="text-blue-700"
                                                to={item.href}
                                                className="text-base font-medium text-gray-900 hover:text-gray-700"
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                    {
                                        user ? <div></div> :
                                            <div className="mt-6">
                                                <a
                                                    href="#"
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-yellow-400 hover:bg-yellow-500"
                                                >
                                                    Sign up
                                                </a>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?
                                                    <a href="#" className="text-gray-900">
                                                        Sign in
                                                    </a>
                                                </p>
                                            </div>
                                    }
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
            </header>


        </div>
    )
}



