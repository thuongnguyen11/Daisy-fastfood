import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getCart } from "../store/cart.store";
import shipper from '../assets/shipper.png';
import { scale } from "tailwindcss/defaultTheme";
import Background from "../assets/background.png";


export default function OrderSummary() {
    const history = useHistory();
    const dispatch = useDispatch();

    const order = useSelector(state => {
        const orders = state.orders.orders;
        return orders.slice(-1).pop();
    });

    useEffect(() => {
        dispatch(getCart()).unwrap();
    }, []);

    const { currentOrderId } = useSelector(state => state.orders);

    if (!currentOrderId) {
        history.replace('/menu');
    }


    return (
        <section className="py-12 bg-yellow-50 overflow-hidden md:py-20 lg:py-24 h-full " style={{ backgroundImage: `url(${Background})` }}>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative">
                    <div style={{
                        transform: 'scaleX(-1)'
                    }}>
                        <img
                            className="mx-auto h-32 animate__animated animate__bounceOutLeft animate__infinite animate__slower"
                            src={shipper}
                            alt="Workcation"
                        />
                    </div>

                    <div className="mt-8 text-center w-full flex justify-center text-green-500 animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <blockquote className="mt-4">
                        <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium color-text3">
                            <p>
                                Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi.
                            </p>
                            <p>
                                Đơn hàng của bạn đã được ghi lại. Nhân viên cửa hàng sẽ có cuộc gọi đến số điện thoại
                                <span className="font-bold mx-1"> {order?.delivery_info?.phone_number} </span>để xác nhận đơn hàng.
                            </p>
                        </div>
                        <footer className="mt-8">
                            <div className="md:flex md:items-center md:justify-center">
                                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                                    <div className="text-base font-medium text-green-700">Chúc quý khách ngon miệng! </div>

                                    <span className="ml-2 text-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}
