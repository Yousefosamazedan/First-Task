import img1 from '../../assets/port1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import MainHeaderDark from '../MainHeaderDark/MainHeaderDark.jsx';
import Card from '../Card.jsx';
import { useState } from 'react';
import Modal from '../Modal.jsx';

const imageList = [img1, img2, img3, img1, img2, img3];

export default function Portfolio() {

  const [currentImg, setCurrentImg] = useState(null);

  function handleClick(number) {
    setCurrentImg(number);
  }

  return <div className='mt-16' >
    <MainHeaderDark>portfolio component</MainHeaderDark>
    <div className='flex flex-wrap '>
      {imageList.map((ele, index) => <Card key={index} number={index} image={ele} onhandleClick={handleClick} ></Card>)}
    </div>


    {currentImg !== null ? <Modal image={imageList[currentImg]} toCloseModal={setCurrentImg} ></Modal> : null}
  </div>
}
