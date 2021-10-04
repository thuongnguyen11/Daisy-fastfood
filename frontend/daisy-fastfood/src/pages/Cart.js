import { Component, useState } from "react";
import { Link } from "react-router-dom";

export function Amount(props) {
    const [amount, setAmount] = useState(props.amount);

    const onAmountChange = (e) => {
        setAmount(e.target.value);
        props.updateAmount(Number.parseInt(e.target.value, 10));

    };

    const onIncreaseAmount = () => {
        const parsed = Number.parseInt(amount, 10);
        setAmount(parsed + 1);
        props.updateAmount(parsed + 1);
    };
    const onDecreaseAmount = () => {
        const parsed = Number.parseInt(amount, 10);
        setAmount(parsed === 0 ? parsed : parsed - 1);
        props.updateAmount(parsed === 0 ? parsed : parsed -1);
    };


    return (
        <div className="flex flex-row items-center gap-3">
            <div>Quantities: </div>
            <div className="w-72 flex flex-row align-middle gap-1">
                <button
                    onClick={onDecreaseAmount}
                    type="button"
                    className="text-red-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <input
                    type="number"
                    value={amount}
                    onChange={onAmountChange}
                    className="border-opacity-75 rounded-md text-center h-7 w-16"
                />
                <button
                    onClick={onIncreaseAmount}
                    type="button"
                    className="text-red-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}


const items = [
    {
        dish:
        {
            id: "3", name: "koconut grove", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan lectus eros", imgs: ["https://www.freepnglogos.com/uploads/food-png/food-koconut-grove-24.png", "https://www.freepnglogos.com/uploads/food-png/beer-food-the-portsmouth-brewery-26.png", "https://www.freepnglogos.com/uploads/food-png/food-plate-png-transparent-image-pngpix-14.png", "https://www.freepnglogos.com/uploads/food-png/food-central-gyros-the-best-gyros-chicago-15.png"], type: "fast food", price: 79000
        },
        amount: 1,
        note: "o dau la de note"
    },
    { dish: { id: "1", name: "grass fed beef", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan lectus eros", imgs: ["https://www.freepnglogos.com/uploads/food-png/food-article-weight-watchers-30.png", "https://www.freepnglogos.com/uploads/food-png/food-sutherland-foodservice-12.png", "https://www.freepnglogos.com/uploads/food-png/food-png-transparent-images-png-only-6.png", "https://www.freepnglogos.com/uploads/food-png/food-indian-take-away-the-amantola-39.png"], type: "grass fed", price: 30000 }, amount: 1, note: "Note cho zui" }];

function Item(props) {
    const onAmountChange = (amount) => {
        console.log(amount)
    }

    const onNoteChange = (note) => {
        console.log(note);
    };

    const onRemoveItemInCart = () => {
        console.log('onRemove');
    };

    return (
        <li className="py-6 flex">
            <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                <img
                    src={props.item?.dish.imgs[0]}
                    alt={props.item?.dish.imgs[0]}
                    className="w-full h-full object-center object-cover"
                />
            </div>

            <div className="ml-4 flex-1 flex flex-col gap-4">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="text-blue-800">
                            <Link to={`/menu/${props.item?.dish.id}`}>
                                {props.item?.dish.name}
                            </Link>
                        </h3>
                        <p className="ml-4">
                            {props.item?.dish.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "VND",
                            })}
                        </p>
                    </div>
                </div>
                <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="flex flex-col">
                        <Amount
                            amount={props.item.amount}
                            updateAmount={onAmountChange}
                        />

                        <div className="flex flex-row items-baseline">
                            <div className="font-bold">Note:</div>
                            <input
                                value={props.item?.note}
                                onChange={(e) => onNoteChange(e.target.value)}
                                className="w-full px-3 py-2 text-gray-700 focus:outline-none border-0 border-b border-gray-200 italic"
                            ></input>
                        </div>
                    </div>

                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={onRemoveItemInCart}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

function Items(props) {
    return (
        <div className="h-full flex flex-col bg-white">
            <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                <div className="mt-8">
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {props.items.map((item) => (
                                <Item key={item.dish.id} item={item} />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CheckoutForm(props) {
    const subTotal = props.items.reduce((sub, curr) => {
        return sub + curr.dish.price * curr.amount;
    }, 0);

    const shippingFee = 30000;
    const total = subTotal + shippingFee;

    return (
        <div className="h-full flex flex-col">
            <div className="py-6 px-4 sm:px-6">
                <h4 className="text-lg font-bold">Order summary</h4>
                <div className="flex justify-between text-base font-medium text-gray-900 py-4">
                    <p className="text-gray-500 text-sm">Subtotal</p>
                    <p>
                        {subTotal.toLocaleString("en-US", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 py-4 border-t border-gray-300">
                    <p className="text-gray-500 text-sm flex flex-row items-center gap-1">
                        Shipping fee
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </p>
                    <p>
                        {shippingFee.toLocaleString("en-US", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </p>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 py-4 border-t border-gray-300">
                    <p className="text-gray-500 text-sm">Total</p>
                    <p>
                        {total.toLocaleString("en-US", {
                            style: "currency",
                            currency: "VND",
                        })}
                    </p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500 flex flex-row items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Shipping calculated automatically by system.
                </p>
                <div className="mt-6">
                    <a className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                        Place your order
                    </a>
                </div>
                <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                    <p>
                        You need anything else?{" "}
                        <button
                            type="button"
                            className="text-indigo-600 font-medium hover:text-indigo-500"
                        >
                            <Link to="menu">
                                {" "}
                                Add more<span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Cart() {
    if (!items || items.length === 0) {
        return (
            <div className="h-64 flex flex-col   justify-center items-center shadow-none md:shadow-xl bg-white rounded-xl">
                <p className="text-center text-lg">Your cart is empty.</p>
                <button
                    type="button"
                    className="text-indigo-600 font-medium hover:text-indigo-500 block"
                >
                    <Link to="menu">
                        Go to menu and select your favorite dishes
                        <span aria-hidden="true"> &rarr;</span>
                    </Link>
                </button>
            </div>
        );
    }

    return (
        <div className="px-4 py-16">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 mb-3">
                Your cart
            </h2>
            <div className="flex flex-col md:flex-row justify-center shadow-none md:shadow-xl bg-white rounded-xl">
                <div className="w-full md:w-3/5">
                    <Items items={items} />
                </div>

                <div className="w-full md:w-2/5 bg-gray-100 rounded-lg">
                    <CheckoutForm items={items} />
                </div>
            </div>
        </div>
    );
}



