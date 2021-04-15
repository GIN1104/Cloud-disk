import React from 'react'
import { useSelector } from 'react-redux';
import "./filelist.css"
import  File  from "./file/FIle"

const FileList = () => {

    const files = useSelector( state => state.files.files).map(file => <File/>)
    return ( 
        <div className="filelist">
            <div className="filelist__header">
                <div className="filelist__name">Name</div>
                <div className="file__date">Date</div>
                <div className="file__size">Size</div>
            </div>
                {files}
        </div> );
}
 
export default FileList;