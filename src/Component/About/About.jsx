import React from 'react'
import MainHeader from '../MainHeaderLight/MainHeader';

export default function About() {
  return <div className='px-3'>
    <MainHeader>about Component</MainHeader>
    <div className='flex flex-col md:flex-row gap-3 text-white'>
      <p className='px-2'>Freelancer is a free bootstrap theme created by Route.
        The download includes the complete source files including
        HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
      <p className='px-2'>Freelancer is a free bootstrap theme created by Route.
        The download includes the complete source files including
        HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
    </div>
  </div>
}
