import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import avatar from "@/assets/download.png"


export default function Users({ data }) {
  const router = useRouter();
  return (
    <div className="container mx-auto mt-8 space-y-6">
      <div className="bg-white p-8 rounded shadow-md flex flex-wrap">
        {data && data.map((user) => {
          return (
            <div key={user.id} className="profile-card">
              <Image src={avatar} width={200} height={100} alt="img" className="profile-image" />
              <h2 className="profile-name">{user.name}</h2>
              <p className="profile-title ">{user.email}</p>
              <p className="profile-description">
                <button onClick={()=> router.push(`/users/${user.id}`)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      data,
    }
  }
}
