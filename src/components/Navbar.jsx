import React from 'react'

const Navbar = () => {
    return (
        <nav className="fixed left-3 top-1/3 -translate-x-1/2 -rotate-90 z-10">
            {/* <ul className="flex items-center bg-slate-500/50 text-xl"> */}
            <ul className="flex items-center bg-slate-500 text-2xl gap-20">
                <li className="px-4 hover:text-sky-400 hover:duration-200">
                    <a href="/">Home</a>
                </li>
                <li className="px-4 hover:text-sky-400 hover:duration-200">
                    <a href="/about">About</a>
                </li>
                <li className="px-4 hover:text-sky-400 hover:duration-200">
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar