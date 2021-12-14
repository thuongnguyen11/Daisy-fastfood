import { NavLink } from "react-router-dom";
import { humanziePrice } from "../common/ultis";

export default function DishItem({ dish }) {
    return (
        <NavLink to={`dishes/${dish.id}`}>
            <div key={dish.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-t-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                    <img
                        src={dish.images[0]}
                        alt={dish.name}
                        className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                    />
                </div>
                <div className="mt-4 h-24 flex justify-between p-3">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span href={dish.href}>
                                <span aria-hidden="true" className="absolute inset-0 shadow-lg rounded-md " />
                                {dish.name}
                            </span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{dish.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{humanziePrice(dish.price)}</p>
                </div>
            </div>
        </NavLink>
    );
}