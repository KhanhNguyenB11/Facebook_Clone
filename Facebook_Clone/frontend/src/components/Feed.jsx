import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'
import Posts from './Posts'

function Feed() {
  return (
    <div className='flex flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar'>
        <div className='mx-auto max-w-md md:max-w-xl lg:max-w-2xl flex-grow'>
            <CreatePost />
            <Posts />
        </div>
    </div>
  )
}

export default Feed