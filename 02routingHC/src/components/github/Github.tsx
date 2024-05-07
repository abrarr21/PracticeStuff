import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


interface LoaderData {
  followers: number;
}
function Github() {
  const data: LoaderData = useLoaderData()

  // 1 way of doing fetch
  //
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then(res => res.json())
  //   .then(data => {
  //         setData(data)
  //   })
  // }, [])

  return (
    <div className='text-center text-white mt-10 bg-zinc-700 py-5 px-5'>Github follower: {data.followers}</div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}