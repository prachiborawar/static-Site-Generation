import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import axios from 'axios';


export default function Users({ data }) {
  const api_url = "http://3.110.104.211:1337"
  const router = useRouter();
  return (
    <div className="container mx-auto mt-8 space-y-6">
      <div className="bg-white p-8 rounded shadow-md flex flex-wrap">
        {data && data.map((user) => {
          return (
            <div key={user?.id} className="profile-card">
              <Image src={api_url + user?.attributes?.Avatar?.data?.attributes?.url} width={200} height={100} alt="img" className="profile-image" />
              <h2 className="profile-name">{user?.attributes?.Name}</h2>
              <p className="profile-title ">{user?.attributes?.Email}</p>
              <p className="profile-description">
                <button onClick={() => router.push(`/users/${user?.id}`)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Learn More</button>
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}


export const getStaticProps = async () => {
  try {
    // Fetch data using Axios
    const response = await axios.get('http://3.110.104.211:1337/api/people?populate=%2A');
    const data = response?.data?.data;
    // Return the data as props
    return {
      props: {
        data
      }
    };
  } catch (error) {
    // Handle errors here
    console.error(error);
    return {
      props: {
        data: []
      }
    };
  }
}
