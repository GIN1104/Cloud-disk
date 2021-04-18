import React from 'react';
import './filelist.css'
import {useSelector} from "react-redux";
import File from "./file/FIle";

const FileList = () => {

    // const files = useSelector(state => state.files.files).map(file => <File key={file.id} file={file}/>)
const files  = [ { _id:1, name: "direc", type: "dir", size: "5gb", date: "20.04.2021"},
{ _id:2, name: "direc2", type: "dir2", size: "6gb", date: "21.04.2021"},
].map(file => <File key={file.id} file={file}/>)
    return (
        <div className='filelist'>
            <div className="filelist__header">
                <div className="filelist__name">Name</div>
                <div className="filelist__date">Date</div>
                <div className="filelist__size">Size</div>
            </div>
            {files}
        </div>
    );
};

export default FileList;