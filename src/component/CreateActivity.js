// import React from 'react'
// import { useState } from 'react';
// import { FilePond, registerPlugin } from 'react-filepond'
// import 'filepond/dist/filepond.min.css'
// import { storage_bucket } from '../firebase';
// export default function CreateActivity () {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleClick = () => {
//         setIsOpen((prevIsOpen) => !prevIsOpen);
//     };
//     const popupStyle = {
//         opacity: isOpen ? 1 : 0,
//         visibility: isOpen ? "visible" : "hidden",
//         overflow: isOpen ? "auto" : "hidden"
//     };
//     const [files, setFiles] = useState([])

//     const handleFileUpload = async (fileItems) => {
//         try {
//             for (const fileItem of fileItems) {

//                 // const fileRef = storage_bucket.ref().child(fileItem.filename);
//                 // await fileRef.put(fileItem.file);
//                 // console.log(fileRef);
//                 // console.log("File uploaded:", fileItem.filename);


//                 let fileRef = ref(storage_bucket, fileItem.name);

//                 const uploadTask = uploadBytesResumable(fileRef, fileRef);

//                 uploadTask.on('state_changed', (snapshot) => {
//                     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                     console.log("Upload is " + progress + "% done");
//                     // console.log(snapshot);
//                     fileRef.put(fileItem.file);
//                     console.log(fileRef);
//                     console.log("File uploaded:", fileItem.filename);

//                 },)
//             }
//             console.log("All files uploaded successfully");
//         } catch (error) {
//             console.error("Error uploading files:", error);
//         }

//     };
//     return (
//         <div className="post-new-popup" style={popupStyle}>
//             <div className="popup" style={{ width: 800 }}>
//                 <span className="popup-closed" onClick={handleClick}><i className="icofont-close" /></span>
//                 <div className="popup-meta">
//                     <div className="popup-head">
//                         <h5><i>
//                             <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
//                                 <line x1={12} y1={5} x2={12} y2={19} />
//                                 <line x1={5} y1={12} x2={19} y2={12} />
//                             </svg></i>Create New Post</h5>
//                     </div>
//                     <div className="post-new">
//                         <div className="post-newmeta">
//                             <ul className="post-categoroes">
//                                 <li><i className="icofont-camera" /> Photo / Video</li>
//                                 <li><i className="icofont-google-map" /> Post Location</li>
//                                 <li><i className="icofont-file-gif" /> Post Gif</li>
//                                 <li><i className="icofont-ui-tag" /> Tag to Friend</li>
//                                 <li><i className="icofont-users" /> Share in Group</li>
//                                 <li><i className="icofont-link" /> Share Link</li>
//                                 <li><i className="icofont-video-cam" /> Go Live</li>
//                                 <li><i className="icofont-sale-discount" /> Post Online Course</li>
//                                 <li><i className="icofont-read-book" /> Post A Book</li>
//                                 <li><i className="icofont-globe" /> Post an Ad</li>
//                             </ul>
//                             {/* <form method="post" className="dropzone dz-clickable" action="/upload-target">
//                                 <div className="fallback">
//                                     <input name="file" type="file" />
//                                 </div>
//                             </form> */}
//                             <div style={{ overflow: 'auto', cursor: 'pointer', minHeight: '100px', maxHeight: '300px' }}>
//                                 <FilePond
//                                     files={files}
//                                     onupdatefiles={handleFileUpload}
//                                     allowMultiple={true}
//                                     maxFiles={50}
//                                     labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
//                                 />
//                             </div>

//                         </div>
//                         <form method="post" className="c-form">
//                             <textarea id="emojionearea1" placeholder="What's On Your Mind?" defaultValue={""} />
//                             <div className="activity-post">
//                                 <div className="checkbox">
//                                     <input type="checkbox" id="checkbox" defaultChecked />
//                                     <label htmlFor="checkbox"><span>Activity Feed</span></label>
//                                 </div>
//                                 <div className="checkbox">
//                                     <input type="checkbox" id="checkbox2" defaultChecked />
//                                     <label htmlFor="checkbox2"><span>My Story</span></label>
//                                 </div>
//                             </div>
//                             <div className="select-box">
//                                 <div className="select-box__current" tabIndex={1}>
//                                     <div className="select-box__value"><input className="select-box__input" type="radio" id={0} defaultValue={1} name="Ben" defaultChecked="checked" />
//                                         <p className="select-box__input-text"><i className="icofont-globe-alt" /> Public</p>
//                                     </div>
//                                     <div className="select-box__value"><input className="select-box__input" type="radio" id={1} defaultValue={2} name="Ben" defaultChecked="checked" />
//                                         <p className="select-box__input-text"><i className="icofont-lock" /> Private</p>
//                                     </div>
//                                     <div className="select-box__value"><input className="select-box__input" type="radio" id={2} defaultValue={3} name="Ben" defaultChecked="checked" />
//                                         <p className="select-box__input-text"><i className="icofont-user" /> Specific Friend
//                                         </p>
//                                     </div>
//                                     <div className="select-box__value"><input className="select-box__input" type="radio" id={3} defaultValue={4} name="Ben" defaultChecked="checked" />
//                                         <p className="select-box__input-text"><i className="icofont-star" /> Only Friends</p>
//                                     </div>
//                                     <div className="select-box__value"><input className="select-box__input" type="radio" id={4} defaultValue={5} name="Ben" defaultChecked="checked" />
//                                         <p className="select-box__input-text"><i className="icofont-users-alt-3" /> Joined
//                                             Groups</p>
//                                     </div>
//                                     <img className="select-box__icon" src="images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true" />
//                                 </div>
//                                 <ul className="select-box__list">
//                                     <li><label className="select-box__option" htmlFor={0}><i className="icofont-globe-alt" />
//                                         Public</label></li>
//                                     <li><label className="select-box__option" htmlFor={1}><i className="icofont-lock" />
//                                         Private</label></li>
//                                     <li><label className="select-box__option" htmlFor={2}><i className="icofont-user" /> Specific
//                                         Friend</label></li>
//                                     <li><label className="select-box__option" htmlFor={3}><i className="icofont-star" /> Only
//                                         Friends</label></li>
//                                     <li><label className="select-box__option" htmlFor={4}><i className="icofont-users-alt-3" />
//                                         Joined Groups</label></li>
//                                 </ul>
//                             </div>
//                             <input className="schedule-btn" type="text" id="datetimepicker" readOnly />
//                             <input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&t=56s" />
//                             <button type="submit" className="main-btn">Publish</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
