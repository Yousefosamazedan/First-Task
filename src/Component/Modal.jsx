

export default function Modal({image, toCloseModal}) {
  return (
    <div className=' absolute center inset-0 bg-green/95 layer' 
        onClick={(e) => {
            if(e.target.classList.contains('layer')){
                toCloseModal(null);
            }
            e.stopPropagation();
        }}>
        <div className='w-1/3  mx-auto'>
        <img src={image} className="w-full" alt="image modal" />
        </div>
    </div>
  )
}
