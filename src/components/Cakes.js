import React , { useState } from 'react'
import { Link } from 'react-router-dom';
// import Title from '../comps/Title';
// import UploadForm from './comps/UploadForm';
import ImageGrid from '../comps/ImageGrid';
import Modal from '../comps/Modal';
import './Styles.css'


const Cakes = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className='cakes_wrapper'>
      {/* <Title/>
      <UploadForm /> */}
      <div className='cakes_header'>
        <Link style={{marginLeft:"20px"}} className='header_sort' to="/">Back</Link>
        <h2 className='header_sort'>Cakes</h2>
      </div>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  )
}

export default Cakes