
export default function Footer() {
  return <>
    <div className='bg-[#2c3E50] text-white p-10 m-0 flex gap-6 flex-col  md:flex-row justify-center items-center '>
      <div className='footer-item pt-5 m-4  text-center'>
        <h3 className='uppercase mb-2'>location</h3>
        <p className='text-sm mb-2'>2215 John Daniel Drive</p>
        <p className='text-sm'>Clark, MO 65243</p>
      </div>
      <div className='footer-item pt-5 m-4 text-center'>
        <h3 className='uppercase mb-2'>around the web</h3>
        <div className='flex justify-between items-center gap-2'>
          <a href="#" className='p-2.5 border rounded-full'>
            <i className="fa-brands  fa-facebook fa-lg"></i>
          </a>
          <a href="#" className='p-2.5 border rounded-full'>
            <i className="fa-brands  fa-lg fa-twitter"></i>
          </a>
          <a href="#" className='p-2.5 border rounded-full'>
            <i className="fa-brands  fa-lg  fa-linkedin"></i>
          </a>
          <a href="#" className='p-2.5 border rounded-full'>
            <i class="fa-solid  fa-lg fa-globe"></i>
          </a>
        </div>
      </div>
      <div className='footer-item pt-5 m-4 text-center '>
        <h3 className='uppercase mb-2'>about freelancer</h3>
        <p className='text-sm w-[220px]'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    <div className='bg-[#1a252f]  p-2.5 '>
      <p className='text-[#f0f8ff] text-center p-2.5 text-sm'>Copyright 	&copy; Your Website 2021</p>
    </div>
  
  </>
}
