
const dishes = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: 50000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: 105000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: 99000,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: 45230,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
]


export function Menu(props) {
    return (
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <Collection dishes={dishes} collectionName="Hot dishes" />
                <Collection dishes={dishes} collectionName="Best seller" />
                <Collection dishes={dishes} collectionName="Hamburger" />
            </div>
        </div>
    )

}

function Collection(props) {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">{props.collectionName}</h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {props.dishes.map((dish) => {
                    return <Dish dish={dish} />
                })}
            </div>
        </div>
    )

}

function Dish(props) {
    let price = props.dish.price;
    price = price.toLocaleString('en-US', { style: 'currency', currency: 'VND' });
    
    return (
        <a key={props.dish.id} href={props.dish.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={props.dish.imageSrc}
                    alt={props.dish.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{props.dish.name}</h3>

            <p className="mt-1 text-lg font-medium text-gray-900">{price}</p>
        </a>
    )
}
