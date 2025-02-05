/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setDecrement, setIncrement } from "../../../apps/action/cartAction";

const Indeform = ({ qty, stk, id }) => {
    const dispatch = useDispatch()

    const handleAdd = async () => {
        dispatch(setIncrement(id))
    }

    const handleRemove = () => {
        dispatch(setDecrement(id))
    }
    return (
        <>

            <form className="max-w-xs mx-auto">
                <div className="relative flex items-center max-w-[11rem]">
                    <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="bedrooms-input"
                        className={`bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none ${qty === 1 && 'opacity-40 cursor-not-allowed'}`}
                        onClick={handleRemove}
                        disabled={qty === 1}
                    >
                        <FaMinus />
                    </button>
                    <input
                        type="text"
                        id="bedrooms-input"
                        data-input-counter
                        data-input-counter-min="1"
                        data-input-counter-max="5"
                        aria-describedby="helper-text-explanation"
                        className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        value={qty}
                        onChange={e => e.target.value}
                        required />
                    <div className={`absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse`}>
                        <FaShoppingBasket />
                        <span>Quantity</span>
                    </div>
                    <button
                        type="button"
                        id="increment-button"
                        data-input-counter-increment="bedrooms-input"
                        className={`bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none ${(qty === stk) && 'opacity-40 cursor-not-allowed '}`} onClick={handleAdd}
                        disabled={qty === stk}
                    >
                        <FaPlus />
                    </button>
                </div>
            </form>

        </>
    )
}

export default Indeform
