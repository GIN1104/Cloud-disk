import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getFiles, uploadFile} from "../../actions/file"
import FileList from "./fileList/FileList"
import './disk.css'
import Popup from './Popup'
import { setFileView, setPopupDisplay, setCurrentDir } from '../../reducers/fileReducer'
import Uploader from './uploader/Uploader'

const Disk = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)
    const dirStack = useSelector(state => state.files.dirStack)
    const loader = useSelector(state => state.app.loader)
    const [ dragEnter, setDragEnter] = useState( false )
    const [sort, setSort ] = useState('type')

    useEffect(() => {
        dispatch(getFiles(currentDir, sort))
    }, [currentDir, dispatch, sort])

    function showPopupHandler() {
           dispatch(setPopupDisplay('flex'))
    }
    function backClickHandler(){
       const backDirId = dirStack.pop()
       dispatch(setCurrentDir(backDirId))
    }
    function fileUploadHandler(event) {
        const files = [...event.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
    }
    function dragEnterHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }
    function dragLeaveHandler(event) {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }
    function dropHeandler(event) {
        event.preventDefault()
        event.stopPropagation()
        let files = [...event.dataTransfer.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        console.log(files)
        setDragEnter(false)
    }

    if(loader) {
        return (
            <div className="loader">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        )

    }

    return (!dragEnter ?
        <div className="disk" onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            <div className="disk__btns">
                <button className="disk__back" onClick= {() => backClickHandler()}>Back</button>
                <button className="disk__create" onClick={() => showPopupHandler()}>Create folder</button>
                <div className="disk__upload">
                    <label htmlFor="disk__upload-input" className="disk__upload-lable">Upload file</label>
                    <input multiple={true} onChange={(event)=> fileUploadHandler(event)} type="file" id="disk__upload-input" className="disk__upload-input"/>
                </div>
                <select value={sort} 
                      onChange={(e) => setSort(e.target.value)} 
                      className="disk__select">
                    <option value="name">By Name</option>     
                    <option value="type">By Type</option>  
                    <option value="date ">By Date</option>   
                </select>
                <button className="disk__plate"  onClick={() => dispatch(setFileView('plate'))} />
                <button className="disk__list"  onClick={() => dispatch(setFileView('list'))} />
            </div>
            <FileList/>
            <Popup />
            <Uploader />
        </div>
        : 
        <div className="drop-area" onDrop={dropHeandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragEnterHandler}>
            Drag files here
        </div>
    );
};

export default Disk;