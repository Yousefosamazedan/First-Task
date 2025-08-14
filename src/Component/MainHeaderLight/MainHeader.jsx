import "./mainHeader.css"

export default function MainHeader({children}) {
  return <>
    <h1 className='Header-Light relative text-center font-bold text-3xl w-fit mx-auto pb-6 uppercase text-white mb-6'>{children}</h1>
  
  </>
}
