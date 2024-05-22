import Link from "next/link";
import { UserButton, auth, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const Nav = () => {
    const [userId, setUserId] = useState<any>();
    const [isAuth, setIsAuth] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

  

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Icon when menu is closed. */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            {/* Icon when menu is open. */}
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                className="block lg:hidden h-8 w-auto"
                                src="/logo.svg"
                                alt="Your Logo"
                            />
                            <img
                                className="hidden lg:block h-8 w-auto"
                                src="/logo.svg"
                                alt="Your Logo"
                            />
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <Link href="/">
                                    <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium">Home</span>
                                </Link>
                                <Link href="/course">
                                    <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium">Course</span>
                                </Link>
                                <Link href="/">
                                    <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium">About</span>
                                </Link>
                                {isAuth && (
                                    <Link href="/profile">
                                        <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-sm font-medium">Profile</span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex items-center">
                            <div className="ml-3 relative">
                                <div>
                                    <button
                                        type="button"
                                        className="bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.5 9a4.5 4.5 0 0118 0v6.5a4.5 4.5 0 01-9 0V9z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on open state. */}
            <div className={`sm:hidden ${isOpen? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/">
                        <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</span>
                    </Link>
                    <Link href="/course">
                        <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Course</span>
                    </Link>
                    <Link href="/">
                        <span className="bg-gray-900 text-white block px-3 py-2 rounded-medium text-base font-medium">About</span>
                    </Link>
                    {isAuth && (
                        <Link href="/profile">
                            <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Profile</span>
                        </Link>
                    )}
                    {!isAuth && (
                        <Link href="/signin">
                            <span className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Log In</span>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Nav;
