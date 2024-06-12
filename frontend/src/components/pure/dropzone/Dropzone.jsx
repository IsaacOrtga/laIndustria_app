import './dropzone.css';
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'


export function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      
      {
        isDragActive ?
        <div className='dropzoneContent'>Suelta el archivo aquí ...</div> :
        <div className='dropzoneContent'>Arrastra y suelta la imagen, o haz click para seleccionar</div>
      }
      
    </div>
  )
}