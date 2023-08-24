import HomePageSlider from '@/components/HomepageSlider'
import axios from 'axios';
import React from 'react'

export default function index({data}) {
    
    return (
        <>
            <HomePageSlider images={data}/>
            <main className="container mx-auto mt-8 space-y-6">
                <div className="bg-white p-8 rounded shadow-md">
                    <h1 className="text-3xl font-semibold mb-4">Welcome to Our Website</h1>
                    <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit nec dolor fermentum laoreet ut id tellus.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More ...</button>
                </div>
                <div className="bg-white p-8 rounded shadow-md">
                    <p>
                        Thank you for visiting our website. We are excited to have you here and
                        look forward to sharing our content with you. Whether you are looking for
                        information, products, or simply exploring, we have got something for
                        everyone. Feel free to browse around and enjoy your stay!
                    </p>
                </div>
                <div className="bg-white p-8 rounded shadow-md">
                    <p>
                        Consumers access your website to learn more information about your business. A welcome message can make them feel valued and persuade them to peruse your inventory or subscribe to your mailing list. If you are involved in creating or updating your company website, it is important to learn how to write a welcome message that communicates your brand identity in a concise, engaging format. In this article, we discuss the definition of a welcome message for a website and review steps, tips and examples for crafting a quality message.
                    </p>
                </div>
            </main>
        </>

    )
}


  export async function getStaticProps() {
    const res = await axios.get('http://3.110.104.211:1337/api/sliders?populate=%2A');
    const data = res?.data?.data[0]?.attributes?.Images?.data;
     
    return {
        props: {
            data,
        }
    };
}