import React from 'react'
import Image from 'next/image'
import avatar from "@/assets/download.png"


export default function UserDetail({ data }) {
    return (
        <div className="container mx-auto mt-8 space-y-6">
            <div className="bg-white p-8 rounded shadow-md flex space-x-10 ">
                <div><Image src={avatar} width={200} height={100}  alt="img" className="profile-image" /></div>
                <div className='flex flex-col space-y-4 text-gray-900'>
                    <div className=''>
                        <label>Name</label>
                        <div className='text-xl'>{data.name}</div>
                    </div>
                    <div className=''>
                        <label>Username</label>
                        <div className='text-xl'>{data.username}</div>
                    </div>
                    <div className=''>
                        <label>Email</label>
                        <div className='text-xl'>{data.email}</div>
                    </div>
                    <div className=''>
                        <label>Address</label>
                        <div className='text-xl'>{`${data.address.street}, ${data.address.suite}, ${data.address.city}`}</div>
                    </div>
                    <div className=''>
                        <label>ZipCode</label>
                        <div className='text-xl'>{data.address.zipcode}</div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    const allUserId = data.map(user => user.id)
    return {
        // paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
        paths: allUserId.map((userId => ({ params: { id: `${userId}` } }))),
        fallback: false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await res.json()
    return {
        props: {
            data,
        }
    }
}
