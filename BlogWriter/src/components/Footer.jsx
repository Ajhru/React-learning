import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo'

function Footer() {
    return (
        <section className="relative overflow-hidden border-t border-gray-800 bg-gray-700 py-14 text-white">

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                <div className="-m-6 flex flex-wrap">

                    {/* Logo / Copyright */}
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">

                            <div className="mb-8 inline-flex items-center">
                                <Logo width="100px" />
                            </div>

                            <div>
                                <p className="text-sm leading-6 text-gray-400">
                                    &copy; Copyright 2026. All Rights Reserved by @ajrhu.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* Company */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">

                            <h3 className="mb-7 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Company
                            </h3>

                            <ul>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>


                    {/* Support */}
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">

                            <h3 className="mb-7 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Support
                            </h3>

                            <ul>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>


                    {/* Legal */}
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">

                            <h3 className="mb-7 text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Legals
                            </h3>

                            <ul>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>

                                <li className="mb-4">
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-indigo-400"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>

                            </ul>

                        </div>
                    </div>

                </div>


                {/* Bottom border */}
                <div className="mt-10 border-t border-gray-800 pt-6">

                    <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">

                        <p>
                            Built with React & Tailwind CSS
                        </p>

                        <p>
                            Made with ❤️ for writers
                        </p>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Footer