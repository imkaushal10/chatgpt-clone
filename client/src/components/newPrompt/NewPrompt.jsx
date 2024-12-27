import { useRef, useEffect, useState } from 'react'
import '../newPrompt/newPrompt.css'
import Upload from '../upload/Upload'
import { IKImage } from 'imagekitio-react'

  const NewPrompt = () => {
  
    const [img, setImg] = useState({
      isLoading: false,
      error: "",
      dbData: {},
      // aiData: {},
    });

    return (
      <>
      {/* ADD A NEW CHAT */}
      {img.isLoading && <div className=''>Loading...</div>}
      {img.dbData?.filePath && (
        <IKImage
        urlEndpoint={import.meta.env.VITE_IMAGE_KIT_ENDPOINT}
        path={img.dbData?.filePath} 
        width="300"
        />
      )}

      <div className='endChat'>
        <form className='newForm'>
        <Upload setImg={setImg} />
          <input id="file" type="file" multiple={false} hidden/>
          <input type="text" placeholder='Ask anything...' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
      </>
    )
}

export default NewPrompt




