import React from 'react'
import Image from 'next/image'
import axios from 'axios'


export default function UserDetail({ data }) {
    const api_url = "http://3.110.104.211:1337"
    return (
        <div className="container mx-auto mt-8 space-y-6">
            <div className="bg-white p-8 rounded shadow-md flex space-x-10 ">
                <div><Image src={api_url + data?.attributes?.Avatar?.data?.attributes?.url} width={200} height={100} alt="img" className="profile-image" /></div>
                <div className='flex flex-col space-y-4 text-gray-900'>
                    <div className=''>
                        <label>Name</label>
                        <div className='text-xl'>{data.attributes.Name}</div>
                    </div>
                    <div className=''>
                        <label>Username</label>
                        <div className='text-xl'>{data.attributes.Username}</div>
                    </div>
                    <div className=''>
                        <label>Email</label>
                        <div className='text-xl'>{data.attributes.Email}</div>
                    </div>
                    <div className=''>
                        <label>Address</label>
                        <div className='text-xl'>{`${data.attributes.Address}`}</div>
                    </div>
                    <div className=''>
                        <label>ZipCode</label>
                        <div className='text-xl'>{data.attributes.Zip}</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const response = await axios.get('http://3.110.104.211:1337/api/people');
    const posts = response?.data?.data;
    const paths = posts.map((post) => ({
        params: {
            id: post.id.toString(),
        },
    }));

    return {
        paths,
        fallback: false, // Return 404 if the path is not matched
    };

}

export const getStaticProps = async ({ params }) => {
    const response = await axios.get(`http://3.110.104.211:1337/api/people/${params.id}?populate=%2A`);
    const data = response?.data?.data;
    return {
        props: {
            data,
        },
    };
}