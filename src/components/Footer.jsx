import React from 'react'
import { FaInstagram , FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-neutral-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

                <div>
                    <img src="https://res.cloudinary.com/dkiez6yqc/image/upload/v1775629695/DrinkDesk_logo_with_laptop_and_bottle_nu7v2c.png" alt="" className='w-20 h-20 rounded-full' />
                    <p className="mt-4 text-l">
                        Contact us at : <br /> <span className='text-yellow-500' >+91 79707 16641</span>
                    </p>
                    <div className="flex size-bg space-x-4 mt-4">
                        <FaInstagram/>
                        <FaFacebook/>
                        <FaTwitter/>
                    </div>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Menu</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-500">New  Page</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Deals</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Wine</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Spirits</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Extras</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Most Popular</a></li>
                        <li><a href="#" className="hover:text-yellow-500">My Orders</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Blog</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Indian Whiskey</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Items </a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Categories</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-yellow-500">Red Wine</a></li>
                        <li><a href="#" className="hover:text-yellow-500">White Wine</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Rose Wine</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Sparkling Wine</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Mild Beer</a></li>
                        <li><a href="#" className="hover:text-yellow-500"> Strong Beer</a></li>
                        <li><a href="#" className="hover:text-yellow-500">Imported Beer</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Info</h3>
                    <ul className="space-y-2">
                        <li>FAQ</li>
                        <li><li><a href="#" className="hover:text-yellow-500">About Us </a></li></li>
                        <li><li><a href="#" className="hover:text-yellow-500">Imported Be</a></li></li>
                        <li>Location</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Newsletter</h3>
                    <p className="text-sm mb-4">
                        Subscribe to get updates about our latest projects.
                    </p>

                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full px-3 py-2 rounded-l-md text-black outline-none bg-gray-200"
                        />
                        <button className="bg-yellow-500 px-4 rounded-r-md text-black font-semibold">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
                &copy; 2026 Gen-Z . All rights reserved.
            </div>
        </footer>
    )
}

export default Footer