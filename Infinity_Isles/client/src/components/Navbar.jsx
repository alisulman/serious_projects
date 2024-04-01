// import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="items-center bg-gray-800 text-amber-50 pb-1 cursor-pointer">
                <div className="flex justify-between items-center mx-24 py-2">
                    <div className="text-3xl font-semibold uppercase tracking-wide">Infinity Isles</div>
                    <ul className="flex text-xl uppercase">
                        <li className="mx-9">home</li>
                        <li id="bouton" className="group/bouton mx-9"> Collection
                            <ul className="absolute flex-col text-gray-800 bg-white rounded-md border border-gray-900 hidden group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all mt-1 px-4 py-3">
                                <li className="py-2 px-12 border-b border-gray-300">men</li>
                                <li className="py-2 px-12 border-b border-gray-300">women</li>
                                <li className="py-2 px-12">kids</li>
                            </ul>
                        </li>
                        <li className="mx-9">lookbook</li>
                        <li className="mx-9">customer care</li>
                        <li className="mx-9">visit us</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
