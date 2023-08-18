import React from 'react'
import Image from 'next/image'
import image1 from "@/assets/image1.jpg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpg"

export default function index() {
    return (
        <div className="container mx-auto mt-8 space-y-6">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-semibold mb-4">About Us</h1>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit nec dolor fermentum laoreet ut id tellus.</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
            </div>
            <div className="bg-white p-8 rounded shadow-md">
                <p>
                    Welcome to our company About Us page. We are a passionate team
                    dedicated to delivering high-quality products and exceptional services.
                    Our mission is to provide innovative solutions to our customers while
                    maintaining a strong commitment to excellence and customer satisfaction.
                </p>
                <h2>Our Team</h2>
                <div className="team-members flex justify-around">

                    <div className="profile-card">
                        <Image src={image1} width={200} height={100} alt="img" className="profile-image" />
                        <h2 className="profile-name">John Doe</h2>
                        <p className="profile-title">Co-founder and CEO</p>
                        <p className="profile-description">
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
                        </p>
                    </div>
                    <div className="profile-card">
                        <Image src={image2} width={200} height={100}  alt="logo" className="profile-image" />
                        <h2 className="profile-name">Jane Smith</h2>
                        <p className="profile-title">Chief Technology Officer</p>
                        <p className="profile-description">
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
                        </p>
                    </div>
                    <div className="profile-card">
                        <Image src={image3} width={200} height={100} alt="logo" className="profile-image" />
                        <h2 className="profile-name">kate Smith</h2>
                        <p className="profile-title">Director</p>
                        <p className="profile-description">
                            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-3xl font-semibold mb-4">Products/Services</h1>
                <ul className='text-gray-700 list-disc'>
                    <li>Detailed descriptions of the products/services you offer.</li>
                    <li>High-quality images and videos showcasing your offerings.</li>
                    <li>Pricing information (if applicable).</li>
                    <li>Customer testimonials or reviews that showcase positive experiences. </li>
                    <li>Before-and-after case studies (if applicable).</li>
                </ul>
            </div>

        </div>
    )
}
