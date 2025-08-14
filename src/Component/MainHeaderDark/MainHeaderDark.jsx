import "./mainDark.css"

export default function MainHeader({children}) {
  return <>
    <h1 className='main-Header relative text-center font-bold text-3xl w-fit mx-auto pb-6 uppercase #2c3e50 mb-6'>{children}</h1>
  
  </>
}