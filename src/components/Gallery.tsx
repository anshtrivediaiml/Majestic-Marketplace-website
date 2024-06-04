'use client'
//This is a client side component that displays a gallery of images.It takes in an array of files and displays them in a gallery format. It also has a feature that allows the user to click on an image and view it in a larger format. The user can also navigate through the images using the next and previous buttons
//It is shown after the ad is submitted and the user can view the images along with the ad deails.
import React,{useState} from 'react'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import UploadThumbnail from './UploadThumbnail'
import UploadView from './UploadView'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import MyImage from './MyImage'
import { set } from 'mongoose'
export default function Gallery({files}:{files:UploadResponse[]}) {

    const [activeFile,setActiveFile]= useState<UploadResponse | null>(files?.[0] || null)

 function nextImage(){
    const activeFileIndex=files.findIndex(f=> f.fileId === activeFile?.fileId);
    const nextIndex=activeFileIndex=== files.length-1?0:activeFileIndex+1;
    setActiveFile(files[nextIndex]);
 }

 function prevImage(){
    const activeFileIndex= files.findIndex(f=>f.fileId === activeFile?.fileId);
   const prevId= activeFileIndex===0?files.length-1:activeFileIndex-1;
   setActiveFile(files[prevId]);
 }

  return (
    <>
    {activeFile && (
        <div className='absolute inset-0 overflow-hidden'>
        <MyImage 
        src={activeFile.filePath}
        alt={'bg'}
        width={2048} 
        height={2048} className='object-cover opacity-30 blur w-full h-full' />
         </div>
    )}
       <div className='grow flex items-center relative'>
                {activeFile &&(
                    <>
                    
                    <div className='absolute inset-4 flex items-center justify-center '>
                        {<UploadView file={activeFile}/>}
                    </div>

                    <div className='absolute inset-4 flex items-center '>
                        <div className='flex justify-between w-full'>
                        <button onClick={prevImage}
                        className='size-10 flex justify-center items-center bg-gray-500/40  hover:bg-gray-500/80 duration-200 rounded-full '>
                            <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                        <button onClick={nextImage}
                        className='flex justify-center items-center size-10 rounded-full bg-gray-500/40 hover:bg-gray-500/80 duration-200'>
                        <FontAwesomeIcon icon={faChevronRight}/>
                        </button>

                        </div>
                        
                    </div>
                    </>
                )}
            </div>
            <div className='p-4 flex gap-4 justify-center z-10 '>
               {files.map(file =>(
                <div
                key={file.fileId}
                className='size-20 cursor-pointer rounded-md overflow-hidden'>
              <UploadThumbnail onClick={()=>{setActiveFile(file)}} file={file} />
                </div>
            ))}
            </div>
    </>
  )
}