import React from 'react'
import { useEffect } from 'react'
import { CreateActivityAction, GetListActivityAction } from '../../redux/actions/ActivityAction';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import moment from 'moment';
import DetailActivity from '../../component/DetailActivity';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { storage_bucket } from '../../firebase';
import { GetListFanpageAction } from '../../redux/actions/FanpageAction';
import SimpleSlider from '../../component/SimpleSlider';
import { getStorage, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useFormik } from 'formik';
import { DonationAction } from '../../redux/actions/DonationAction';
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export default function Home () {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const { configActivity, isValidCreate, isFanpage } = useSelector(root => root.ConfigActivityReducer)
    const { userID } = useSelector(root => root.LoginReducer)
    console.log(configActivity);
    console.log(isValidCreate);
    console.log(userID);
    const [isTextInputVisible, setTextInputVisible] = useState(false);

    const toggleTextInput = () => {
        setTextInputVisible(!isTextInputVisible);
    };
    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const storage = getStorage();
    const [acti, setActi] = useState('');
    console.log(acti);
    const formik1 = useFormik({
        initialValues: {
            title: "",
            amount: 0,
            email: "",
            phone: "",
            name: "",
            isAnonymous: true,
            activityId: ""
        },
        onSubmit: (value) => {
            console.log(value);
            const action = DonationAction(value);
            dispatch(action)
        }
    })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    function calculateImageClass (imageCount) {
        let imageClass = 'full-width';
        if (imageCount === 2) {
            imageClass = 'half-width';
        } else if (imageCount === 3 || imageCount === 4) {
            imageClass = 'quarter-width';
        }
        return imageClass;
    }
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };
    const popupStyle = {
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? "visible" : "hidden",
        overflow: isOpen ? "auto" : "hidden"
    };
    const [files, setFiles] = useState('');
    console.log(files);
    const currentTime = moment();
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            startDate: "2023-07-12T17:23:37.754Z",
            endDate: "2023-07-12T17:23:37.754Z",
            // endDate: currentTime.format('YYYY-MM-DD HH:mm:ss'),
            location: "",
            targetDonation: 0,
            userId: userID,
            text: true,
            isFanpageAvtivity: isFanpage,
            media: [
                {
                    linkMedia: files,
                    type: "string"
                }
            ]
        },
        onSubmit: (value) => {
            console.log(value);
            const action = CreateActivityAction(value);
            dispatch(action)
        }
    })

    // const handleFileUpload = async (file) => {
    //     const fileRef = ref(storage, file.name);
    //     const uploadTask = uploadBytesResumable(fileRef, file);

    //     return new Promise((resolve, reject) => {
    //         uploadTask.on(
    //             "state_changed",
    //             (snapshot) => {
    //                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //                 console.log("Upload is " + progress + "% done");
    //             },
    //             (error) => {
    //                 console.log(error);
    //                 reject(error);
    //             },
    //             () => {
    //                 getDownloadURL(uploadTask.snapshot.ref)
    //                     .then((url) => {
    //                         console.log("Upload completed. Download URL: " + url);
    //                         if (url !== '') {
    //                             resolve(url);
    //                         } else {
    //                             reject(new Error("Empty download URL"));
    //                         }
    //                     })
    //                     .catch((error) => {
    //                         console.log(error);
    //                         reject(error);
    //                     });
    //             }
    //         );
    //     });
    // };

    // const handleFilePondUpdate = async (fileItems) => {
    //     if (fileItems.length > 0) {
    //         const file = fileItems[0].file;
    //         try {
    //             const url = await handleFileUpload(file);
    //             setFiles((prevFiles) => [...prevFiles, url]);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // };

    const uploadFile = (e) => {
        let file = e.target.files[0];
        let fileRef = ref(storage_bucket, file.name);

        const uploadTask = uploadBytesResumable(fileRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            // console.log(snapshot);

        },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setFiles(url)
                    const previousMediaValue = formik.values.media;

                    // Tạo một mảng mới của các đối tượng media với linkMedia mới
                    const newMediaValue = previousMediaValue.map((media) => ({
                        ...media,
                        linkMedia: url,
                    }));

                    // Đặt giá trị mới cho media.linkMedia
                    formik.setFieldValue("media", newMediaValue);
                });
            });
    };


    // const handleFileUpload = async (e) => {
    //     let file = e.target.files[0];
    //     let fileRef = ref(storage_bucket, file.name);

    //     const uploadTask = uploadBytesResumable(fileRef, file);

    //     uploadTask.on('state_changed', (snapshot) => {
    //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         console.log("Upload is " + progress + "% done");
    //         // console.log(snapshot);
    //         // setShowInput(false);

    //     },
    //         (err) => console.log(err),
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((url) => {
    //                 console.log(url);
    //                 // const updatedProduct = { ...product, achivementLogo: url }; // Update achivementLogo property in product object
    //                 // setProduct(updatedProduct);
    //             });
    //         });

    // };
    // console.log(files);
    const dispatch = useDispatch();
    const { arrActivity } = useSelector(root => root.ActivityReducer)
    const { arrFanpage } = useSelector(root => root.FanpageReducer)
    // console.log(arrActivity);
    const [cmt, setCmt] = useState([])
    const [time, setTime] = useState([])
    const [detail, setDetail] = useState({})
    const [create, setCreate] = useState(true)
    // console.log(create);
    const initialCommentData = JSON.parse(localStorage.getItem('activity'))?.map((comment) => ({
        id: comment.activityId,
        isCmt: true,
        color: '#eae9ee'
    }));
    const handleSetDetail = (media) => {
        setDetail(media);
        // Xử lý logic khác khi setDetail được gọi
    };


    const [commentData, setCommentData] = useState(initialCommentData);
    // console.log(commentData);
    const handleCommentClick = (id) => {
        const updatedComments = commentData?.map((comment) => {
            if (comment.id === id) {
                return { ...comment, isCmt: !comment.isCmt };
            }
            return comment;
        });

        setCommentData(updatedComments);
    };
    const handleLikeClick = (id) => {
        const updatedComments = commentData.map((comment) => {
            if (comment.id === id) {
                if (comment.color === 'rgb(117, 189, 240)') {
                    return { ...comment, color: '#eae9ee' };
                } else {
                    return { ...comment, color: 'rgb(117, 189, 240)' };
                }
            }
            return comment;
        });

        setCommentData(updatedComments);
    };

    useEffect(() => {
        const action = GetListActivityAction();
        dispatch(action)
        const action1 = GetListFanpageAction();
        dispatch(action1)
    }, []);
    useEffect(() => {
        // Cập nhật arrActivity với commentData mới
        const updatedArrActivity = arrActivity.map((activity) => {

            const matchingComments = commentData?.filter((comment) => comment.id === activity.activityId);
            return { ...activity, commentData: matchingComments };
        });

        // Cập nhật state của arrActivity
        // ... tiếp tục với phương thức để cập nhật arrActivity trong Redux hoặc useState
        setCmt(updatedArrActivity)
    }, [commentData, arrActivity]);

    const DateTime = (item) => {
        const currentTime = moment();
        const inputTime = moment(item);
        const duration = moment.duration(currentTime.diff(inputTime));
        const hoursAgo = duration.asHours();

        let timeAgoString = '';

        if (hoursAgo < 1) {
            const daysAgo = Math.floor(duration.asMinutes());
            timeAgoString = `${daysAgo} minutes ago`;
        }
        else if (hoursAgo >= 24) {
            const daysAgo = Math.floor(duration.asDays());
            timeAgoString = `${daysAgo} days ago`;
        } else {
            const hoursAgo = Math.floor(duration.asHours());
            timeAgoString = `${hoursAgo} hours ago`;
        }
        return timeAgoString
    }

    return (
        <Fragment>
            <section>
                <div className="gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="page-contents" className="row merged20">
                                    <div className="col-lg-3">
                                        <aside className="sidebar static left">
                                            <div className="widget whitish low-opacity">
                                                <img src="images/time-clock.png" alt />
                                                <div className="bg-image" style={{ backgroundImage: 'url(images/resources/time-bg.jpg)' }} />
                                                <div className="date-time">
                                                    <div className="realtime">
                                                        <span id="hours">00</span>
                                                        <span id="point">:</span>
                                                        <span id="min">00</span>
                                                    </div>
                                                    <span id="date" />
                                                </div>
                                            </div>
                                            <div className="widget">
                                                <h4 className="widget-title">Complete Your Profile</h4>
                                                <span>Your Profile is missing followings!</span>
                                                <div data-progress="tip" className="progress__outer" data-value="0.67">
                                                    <div className="progress__inner">82%</div>
                                                </div>
                                                <ul className="prof-complete">
                                                    <li><i className="icofont-plus-square" /> <a href="#" title>Upload Your
                                                        Picture</a><em>10%</em></li>
                                                    <li><i className="icofont-plus-square" /> <a href="#" title>Your
                                                        University?</a><em>20%</em></li>
                                                    <li><i className="icofont-plus-square" /> <a href="#" title>Add Payment
                                                        Method</a><em>20%</em></li>
                                                </ul>
                                            </div>{/* complete profile widget */}
                                            <div className="advertisment-box">
                                                <h4 className><i className="icofont-info-circle" /> advertisment</h4>
                                                <figure>
                                                    <a href="#" title="Advertisment"><img src="images/resources/ad-widget2.gif" alt /></a>
                                                </figure>
                                            </div>{/* adversment widget */}
                                            <div className="widget">
                                                <h4 className="widget-title"><i className="icofont-flame-torch" /> Popular Activity
                                                </h4>
                                                <ul className="premium-course">
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/course-5.jpg" alt />
                                                            <span className="tag">Free</span>
                                                        </figure>
                                                        <div className="vid-course">
                                                            <h5><a href="course-detail.html" title>Wordpress Online video
                                                                course</a></h5>
                                                            <ins className="price">$19/M</ins>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <img src="images/resources/course-3.jpg" alt />
                                                            <span className="tag">Premium</span>
                                                        </figure>
                                                        <div className="vid-course">
                                                            <h5><a href="course-detail.html" title>Node JS Online video
                                                                course</a></h5>
                                                            <ins className="price">$29/M</ins>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* popular courses */}
                                            <div className="widget">
                                                <h4 className="widget-title">Recent Blogs <a className="see-all" href="#" title>See All</a></h4>
                                                <ul className="recent-links">
                                                    <li>
                                                        <figure><img alt src="images/resources/recentlink-1.jpg" />
                                                        </figure>
                                                        <div className="re-links-meta">
                                                            <h6><a title href="#">Moira's fade reach much farther...</a>
                                                            </h6>
                                                            <span>2 weeks ago </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/recentlink-2.jpg" />
                                                        </figure>
                                                        <div className="re-links-meta">
                                                            <h6><a title href="#">Daniel asks The voice of
                                                                doomfist...</a></h6>
                                                            <span>3 months ago </span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/recentlink-3.jpg" />
                                                        </figure>
                                                        <div className="re-links-meta">
                                                            <h6><a title href="#">The socimo over watch scandals.</a>
                                                            </h6>
                                                            <span>1 day before</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* recent blog */}
                                            <div className="widget">
                                                <h4 className="widget-title">Your profile has a new Experience section</h4>
                                                <p>
                                                    Showcase your professional experience and education to help potential
                                                    employers and collaborators find and contact you about career
                                                    opportunities.
                                                </p>
                                                <a className="main-btn" href="profile.html" title data-ripple>view
                                                    profile</a>
                                            </div>{/* your profile */}
                                            <div className="widget web-links stick-widget">
                                                <h4 className="widget-title">Useful Links <a title href="#" className="see-all">See All</a></h4>
                                                <ul>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">about</a>
                                                    </li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">career</a>
                                                    </li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">advertise</a></li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">socimo
                                                        Apps</a></li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">socimo
                                                        Blog</a></li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">Help</a>
                                                    </li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">socimo
                                                        Gifts</a></li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">content
                                                        policy</a></li>
                                                    <li><i className="icofont-dotted-right" /> <a title href="#">User
                                                        Policy</a></li>
                                                </ul>
                                                <p>© Socimo 2020. All Rights Reserved.</p>
                                            </div>{/* links */}
                                        </aside>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="filtr-tabs">
                                            <li><a className="active" href="#" title>Home</a></li>
                                            <li><a href="#" title>Recent</a></li>
                                            <li><a href="#" title>Favourit</a></li>
                                        </ul>{/* tab buttons */}
                                        {isValidCreate == true ?
                                            <div className="main-wraper" onClick={handleClick} style={{ cursor: 'pointer' }}>
                                                <span className="new-title">Create New Post</span>
                                                <div className="new-post">
                                                    <form method="post" onClick={handleClick}>
                                                        <i className="icofont-pen-alt-1" />
                                                        <input type="text" placeholder="Create New Post" />
                                                    </form>
                                                    <ul className="upload-media">
                                                        <li>
                                                            <a href="#" title>
                                                                <i><img src="images/image.png" alt /></i>
                                                                <span>Photo/Video</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title>
                                                                <i><img src="images/activity.png" alt /></i>
                                                                <span>Feeling/Activity</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="live-stream.html" title>
                                                                <i><img src="images/live-stream.png" alt /></i>
                                                                <span>Live Stream</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            : <div></div>}
                                        {/* create new post */}
                                        {/* <div className="story-card" style={{ marginLeft: '20px' }}>
                                            <div className="story-title">
                                                <h5>Recent Stories</h5>
                                                <a href="#" title>See all</a>
                                            </div>
                                            <div className="story-wraper">
                                                <img src="images/resources/story-card5.jpg" alt />
                                                <div className="users-dp">
                                                    <img src="images/resources/user3.jpg" alt />
                                                </div>
                                                <a className="add-new-stry" href="#" title><i className="icofont-plus" /></a>
                                                <span>Add Your Story</span>
                                            </div>
                                            <div className="story-wraper">
                                                <img src="images/resources/story-card.jpg" alt />
                                                <div className="users-dp">
                                                    <img src="images/resources/user6.jpg" alt />
                                                </div>
                                                <span>Tamana Bhatia</span>
                                            </div>
                                            <div className="story-wraper">
                                                <img src="images/resources/story-card2.jpg" alt />
                                                <div className="users-dp">
                                                    <img src="images/resources/user7.jpg" alt />
                                                </div>
                                                <span>Emily Caros</span>
                                            </div>
                                            <div className="story-wraper">
                                                <img src="images/resources/story-card3.jpg" alt />
                                                <div className="users-dp">
                                                    <img src="images/resources/user8.jpg" alt />
                                                </div>
                                                <span>Daniel Cardos</span>
                                            </div>

                                        </div> */}
                                        {/* stories */}
                                        {/* <div className="main-wraper">
                                                <div className="chatroom-title">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tv">
                                                            <rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
                                                            <polyline points="17 2 12 7 7 2" />
                                                        </svg></i>
                                                    <span>Chat Rooms <em>Video chat with friends</em></span>
                                                    <a className="create-newroom" href="#" title>Create Room</a>
                                                </div>
                                                <ul className="chat-rooms">
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user2.jpg" alt />
                                                            <span className="status online" />
                                                        </div>
                                                        <span>Sara's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user3.jpg" alt />
                                                            <span className="status offline" />
                                                        </div>
                                                        <span>jawad's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user4.jpg" alt />
                                                            <span className="status away" />
                                                        </div>
                                                        <span>Jack's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user5.jpg" alt />
                                                            <span className="status online" />
                                                        </div>
                                                        <span>jobidn's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                    <li>
                                                        <div className="room-avatar">
                                                            <img src="images/resources/user6.jpg" alt />
                                                            <span className="status offline" />
                                                        </div>
                                                        <span>Emily's Room</span>
                                                        <a className="join" href="#" title="Join Room">Join</a>
                                                        <a className="say-hi send-mesg" href="#" title="Send Message"><i className="icofont-facebook-messenger" /></a>
                                                    </li>
                                                </ul>
                                            </div> */}
                                        {/* chat rooms */}
                                        <div className="main-wraper">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <i className="icofont-learn" />
                                                    </figure>
                                                    <div className="friend-name">
                                                        <ins><a title href="time-line.html">Suggested</a></ins>
                                                        <span><i className="icofont-runner-alt-1" /> Follow similar
                                                            Fanpage</span>
                                                    </div>

                                                    <SimpleSlider arrFanpage={arrFanpage} />


                                                    {/* </ul> */}
                                                </div>
                                            </div>
                                        </div>{/* suggested friends */}


                                        {cmt.map((item, index) => {
                                            const detailItem = item

                                            return <div className="main-wraper">
                                                <div className="user-post">
                                                    <div className="friend-info">
                                                        <figure>
                                                            <em>
                                                                <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                    <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                    </path>
                                                                </svg></em>
                                                            <img alt src="images/resources/user5.jpg" />
                                                        </figure>
                                                        <div className="friend-name">
                                                            <div className="more">
                                                                <div className="more-post-optns">
                                                                    <i className>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                            <circle cx={12} cy={12} r={1} />
                                                                            <circle cx={19} cy={12} r={1} />
                                                                            <circle cx={5} cy={12} r={1} />
                                                                        </svg></i>
                                                                    <ul>
                                                                        <li>
                                                                            <i className="icofont-pen-alt-1" />Edit Post
                                                                            <span>Edit This Post within a Hour</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ban" />Hide Post
                                                                            <span>Hide This Post</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-ui-delete" />Delete Post
                                                                            <span>If inappropriate Post By Mistake</span>
                                                                        </li>
                                                                        <li>
                                                                            <i className="icofont-flag" />Report
                                                                            <span>Inappropriate content</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <ins><a title href="time-line.html">{item.user?.username}</a> </ins>
                                                            <span><i className="icofont-globe" /> published: {DateTime(item.createAt)}</span>
                                                        </div>
                                                        <div className="post-meta">
                                                            <em><a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" title target="_blank">https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538</a></em>

                                                            <figure style={{}}>
                                                                <p style={{ width: '100%' }}>fetched-image</p>
                                                                {item.targetDonation !== 0 ? <button className='btn btn-outline-danger mb-2' onClick={() => {
                                                                    // setActi(item.activityId)
                                                                    formik1.setFieldValue('activityId', item.activityId)
                                                                    openPopup()
                                                                }}>Ủng Hộ</button> : <div></div>}
                                                                <div className="image-gallery">
                                                                    {/* {item.media?.map((image, index) => (
                                                                        <div key={index} className={`image-container ${calculateImageClass(image.length)}`}>
                                                                        <a data-toggle="modal" data-target="#img-comt"
                                                                            href="images/resources/album1.jpg" onClick={() => {
                                                                                setDetail(detailItem)
                                                                            }}>
                                                                            <img src={item.linkMedia} style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                                                                    </div> */}
                                                                    {/* ))} */}
                                                                    {/* {item.media?.map((item, index) => {
                                                                        return <a data-toggle="modal" data-target="#img-comt"
                                                                            href="images/resources/album1.jpg" onClick={() => {
                                                                                setDetail(detailItem)
                                                                            }}>
                                                                            <img src={item.linkMedia} style={{ width: '100%', objectFit: 'cover', height: '400px' }} />
                                                                        </a>
                                                                    })} */}
                                                                    {/* <Media media={item?.media} item={detailItem} dateTime={DateTime} /> */}
                                                                    <div className="image-gallery">
                                                                        {item.media?.map((image, index) => {


                                                                            const imageClass = calculateImageClass(item.media.length);
                                                                            // console.log(imageClass);
                                                                            // console.log(item.media.length);
                                                                            return <div key={index} className={`image-container ${imageClass} `}>
                                                                                <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg" onClick={() => {
                                                                                    setDetail(detailItem)
                                                                                }}>
                                                                                    <img src={image.linkMedia} alt={`Image ${image.id}`} className="gallery-image" />
                                                                                </a>
                                                                            </div>
                                                                        })}
                                                                    </div>
                                                                </div>

                                                            </figure>
                                                            <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" className="post-title" target="_blank">{item.title}</a>
                                                            <p>
                                                                {item.description}
                                                            </p>
                                                            <div className="we-video-info">
                                                                <ul>
                                                                    <li>
                                                                        <span title="views" className="views">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                    </path>
                                                                                    <circle cx={12} cy={12} r={3} />
                                                                                </svg></i>
                                                                            <ins>1.2k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="Comments" className="Recommend">
                                                                            <i>
                                                                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                                </svg></i>
                                                                            <ins>54</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span title="follow" className="Follow">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                    </polygon>
                                                                                </svg></i>
                                                                            <ins>5k</ins>
                                                                        </span>
                                                                    </li>
                                                                    <li>
                                                                        <span className="share-pst" title="Share">
                                                                            <i>
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                    <circle cx={18} cy={5} r={3} />
                                                                                    <circle cx={6} cy={12} r={3} />
                                                                                    <circle cx={18} cy={19} r={3} />
                                                                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                                </svg></i>
                                                                            <ins>205</ins>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                                <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                            </div>
                                                            <div className="stat-tools">
                                                                <div className="" style={{
                                                                    backgroundColor: `${item.commentData[0]?.color}`,
                                                                    borderRadius: '4px',
                                                                    color: '#82828e',
                                                                    display: 'inline-block',
                                                                    fontSize: '13px',
                                                                    padding: '5px 20px',
                                                                    verticalAlign: 'middle',
                                                                    transition: 'all 0.2s linear 0s',
                                                                    cursor: 'pointer'
                                                                }} onClick={() => {
                                                                    handleLikeClick(item.activityId)
                                                                }}>
                                                                    <div className="Like "><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                        {/* <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--haha">
                                                                                    <div className="icon icon--haha" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--wow">
                                                                                    <div className="icon icon--wow" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--sad">
                                                                                    <div className="icon icon--sad" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--angry">
                                                                                    <div className="icon icon--angry" />
                                                                                </div>
                                                                            </div> */}
                                                                    </div>
                                                                </div>
                                                                <div className="box">
                                                                    <div className="Emojis">
                                                                        <div className="Emoji Emoji--like">
                                                                            <div className="icon icon--like" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--love">
                                                                            <div className="icon icon--heart" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--haha">
                                                                            <div className="icon icon--haha" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--wow">
                                                                            <div className="icon icon--wow" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--sad">
                                                                            <div className="icon icon--sad" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--angry">
                                                                            <div className="icon icon--angry" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-to bg " onClick={() => handleCommentClick(item.activityId)}><i className="icofont-comment" /> Comment</div>
                                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                <div className="emoji-state">
                                                                    <div className="popover_wrapper">
                                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                        <div className="popover_content">
                                                                            <span><img alt src="images/smiles/thumb.png" />
                                                                                Likes</span>
                                                                            <ul className="namelist">
                                                                                <li>Jhon Doe</li>
                                                                                <li>Amara Sin</li>
                                                                                <li>Sarah K.</li>
                                                                                <li><span>20+ more</span></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>

                                                                    <p>{item.numberLike}+</p>
                                                                </div>

                                                            </div>
                                                            {item?.commentData[0]?.isCmt ? <div></div> :
                                                                item.comment.map((item, index) => {
                                                                    return <div className="new-comment" style={{ display: 'block' }}>
                                                                        <form method="post">
                                                                            <input type="text" placeholder="write comment" />
                                                                            <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                        </form>
                                                                        <div className="comments-area">
                                                                            <ul>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user1.jpg" />
                                                                                    </figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">{item.userId}</a>
                                                                                        </h5>
                                                                                        <span>{DateTime(item.datetime)}</span>
                                                                                        <p>
                                                                                            {item.commentContent}
                                                                                        </p>
                                                                                        {/* <span>you can view the more detail via
                                                                                                link</span>
                                                                                            <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a> */}
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>

                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })}

                                        <div className="main-wraper">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <em>
                                                            <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                <path fill="#82828e" stroke="#82828e" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                </path>
                                                            </svg></em>
                                                        <img alt src="images/resources/user4.jpg" />
                                                    </figure>
                                                    <div className="friend-name">
                                                        <div className="more">
                                                            <div className="more-post-optns">
                                                                <i className>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                        <circle cx={12} cy={12} r={1} />
                                                                        <circle cx={19} cy={12} r={1} />
                                                                        <circle cx={5} cy={12} r={1} />
                                                                    </svg></i>
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-pen-alt-1" />Edit Post
                                                                        <span>Edit This Post within a Hour</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ban" />Hide Post
                                                                        <span>Hide This Post</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ui-delete" />Delete Post
                                                                        <span>If inappropriate Post By Mistake</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-flag" />Report
                                                                        <span>Inappropriate content</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ins><a title href="time-line.html">Saim turan</a> added image
                                                            album</ins>
                                                        <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <figure>
                                                            <div className="img-bunch">
                                                                <div className="row">
                                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                                        <figure>
                                                                            <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                                                                                <img src="images/resources/album1.jpg" alt />
                                                                            </a>
                                                                        </figure>
                                                                        <figure>
                                                                            <a data-toggle="modal" data-target="#img-comt" href="images/resources/album2.jpg"><img src="images/resources/album2.jpg" alt />
                                                                            </a>
                                                                        </figure>
                                                                    </div>
                                                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                                                        <figure>
                                                                            <a data-toggle="modal" data-target="#img-comt" href="images/resources/album6.jpg"><img src="images/resources/album6.jpg" alt />
                                                                            </a>
                                                                        </figure>
                                                                        <figure>
                                                                            <a data-toggle="modal" data-target="#img-comt" href="images/resources/album5.jpg"><img src="images/resources/album5.jpg" alt />
                                                                            </a>
                                                                        </figure>
                                                                        <figure>
                                                                            <a data-toggle="modal" data-target="#img-comt" href="images/resources/album4.jpg"><img src="images/resources/album4.jpg" alt />
                                                                            </a>
                                                                            <div className="more-photos">
                                                                                <span>+15</span>
                                                                            </div>
                                                                        </figure>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </figure>
                                                        <a href="post-detail.html" className="post-title">Supervision as a
                                                            Personnel Development Device</a>
                                                        <p>
                                                            Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                                            condimentum rhoncus, sem quam semper libero.
                                                        </p>
                                                        <div className="we-video-info">
                                                            <ul>
                                                                <li>
                                                                    <span title="views" className="views">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                </path>
                                                                                <circle cx={12} cy={12} r={3} />
                                                                            </svg></i>
                                                                        <ins>1.2k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span title="Comments" className="Recommend">
                                                                        <i>
                                                                            <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                            </svg></i>
                                                                        <ins>54</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span title="follow" className="Follow">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                </polygon>
                                                                            </svg></i>
                                                                        <ins>5k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="share-pst" title="Share">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                <circle cx={18} cy={5} r={3} />
                                                                                <circle cx={6} cy={12} r={3} />
                                                                                <circle cx={18} cy={19} r={3} />
                                                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                            </svg></i>
                                                                        <ins>205</ins>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                        </div>
                                                        <div className="stat-tools">
                                                            <div className="box">
                                                                <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                    <div className="Emojis">
                                                                        <div className="Emoji Emoji--like">
                                                                            <div className="icon icon--like" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--love">
                                                                            <div className="icon icon--heart" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--haha">
                                                                            <div className="icon icon--haha" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--wow">
                                                                            <div className="icon icon--wow" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--sad">
                                                                            <div className="icon icon--sad" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--angry">
                                                                            <div className="icon icon--angry" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="box">
                                                                <div className="Emojis">
                                                                    <div className="Emoji Emoji--like">
                                                                        <div className="icon icon--like" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--love">
                                                                        <div className="icon icon--heart" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--haha">
                                                                        <div className="icon icon--haha" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--wow">
                                                                        <div className="icon icon--wow" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--sad">
                                                                        <div className="icon icon--sad" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--angry">
                                                                        <div className="icon icon--angry" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                            <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                            <div className="emoji-state">
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/thumb.png" />
                                                                            Likes</span>
                                                                        <ul className="namelist">
                                                                            <li>Jhon Doe</li>
                                                                            <li>Amara Sin</li>
                                                                            <li>Sarah K.</li>
                                                                            <li><span>20+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <p>50+</p>
                                                            </div>
                                                            <div className="new-comment" style={{ display: 'none' }}>
                                                                <form method="post">
                                                                    <input type="text" placeholder="write comment" />
                                                                    <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                </form>
                                                                <div className="comments-area">
                                                                    <ul>
                                                                        <li>
                                                                            <figure><img alt src="images/resources/user1.jpg" />
                                                                            </figure>
                                                                            <div className="commenter">
                                                                                <h5><a title href="#">Jack Carter</a>
                                                                                </h5>
                                                                                <span>2 hours ago</span>
                                                                                <p>
                                                                                    i think that some how, we learn who we
                                                                                    really are and then live with that
                                                                                    decision, great post!
                                                                                </p>
                                                                                <span>you can view the more detail via
                                                                                    link</span>
                                                                                <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                            </div>
                                                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                        </li>
                                                                        <li>
                                                                            <figure><img alt src="images/resources/user2.jpg" />
                                                                            </figure>
                                                                            <div className="commenter">
                                                                                <h5><a title href="#">Ching xang</a></h5>
                                                                                <span>2 hours ago</span>
                                                                                <p>
                                                                                    i think that some how, we learn who we
                                                                                    really are and then live with that
                                                                                    decision, great post!
                                                                                </p>
                                                                            </div>
                                                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* share image album */}

                                        <div className="main-wraper">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <em>
                                                            <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                </path>
                                                            </svg></em>
                                                        <img alt src="images/resources/user2.jpg" />
                                                    </figure>
                                                    <div className="friend-name">
                                                        <div className="more">
                                                            <div className="more-post-optns">
                                                                <i className>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                        <circle cx={12} cy={12} r={1} />
                                                                        <circle cx={19} cy={12} r={1} />
                                                                        <circle cx={5} cy={12} r={1} />
                                                                    </svg></i>
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-pen-alt-1" />Edit Post
                                                                        <span>Edit This Post within a Hour</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ban" />Hide Post
                                                                        <span>Hide This Post</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ui-delete" />Delete Post
                                                                        <span>If inappropriate Post By Mistake</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-flag" />Report
                                                                        <span>Inappropriate content</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ins><a title href="time-line.html">Maria k.</a> Shared
                                                            Link</ins>
                                                        <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <em><a href="https://www.youtube.com/embed/zdow47FQRfQ" title target="_blank">https://www.youtube.com/embed/zdow47FQRfQ</a>
                                                        </em>
                                                        <iframe height={285} src="https://www.youtube.com/embed/zdow47FQRfQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                        <p>
                                                            Cookie? Biscuit? Bikkie? They all mean the same thing! Our
                                                            lovely English teachers will quickly show you some pronunciation
                                                            and vocabulary differences from Australia, America, and England!
                                                        </p>
                                                        <div className="we-video-info">
                                                            <ul>
                                                                <li>
                                                                    <span title="views" className="views">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                </path>
                                                                                <circle cx={12} cy={12} r={3} />
                                                                            </svg></i>
                                                                        <ins>1.2k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span title="Comments" className="Recommend">
                                                                        <i>
                                                                            <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                            </svg></i>
                                                                        <ins>54</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span title="follow" className="Follow">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                </polygon>
                                                                            </svg></i>
                                                                        <ins>5k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="share-pst" title="Share">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                <circle cx={18} cy={5} r={3} />
                                                                                <circle cx={6} cy={12} r={3} />
                                                                                <circle cx={18} cy={19} r={3} />
                                                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                            </svg></i>
                                                                        <ins>205</ins>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                        </div>
                                                        <div className="stat-tools">
                                                            <div className="box">
                                                                <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                    <div className="Emojis">
                                                                        <div className="Emoji Emoji--like">
                                                                            <div className="icon icon--like" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--love">
                                                                            <div className="icon icon--heart" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--haha">
                                                                            <div className="icon icon--haha" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--wow">
                                                                            <div className="icon icon--wow" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--sad">
                                                                            <div className="icon icon--sad" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--angry">
                                                                            <div className="icon icon--angry" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="box">
                                                                <div className="Emojis">
                                                                    <div className="Emoji Emoji--like">
                                                                        <div className="icon icon--like" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--love">
                                                                        <div className="icon icon--heart" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--haha">
                                                                        <div className="icon icon--haha" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--wow">
                                                                        <div className="icon icon--wow" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--sad">
                                                                        <div className="icon icon--sad" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--angry">
                                                                        <div className="icon icon--angry" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                            <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                            <div className="emoji-state">
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/thumb.png" />
                                                                            Likes</span>
                                                                        <ul className="namelist">
                                                                            <li>Jhon Doe</li>
                                                                            <li>Amara Sin</li>
                                                                            <li>Sarah K.</li>
                                                                            <li><span>20+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/heart.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/heart.png" />
                                                                            Love</span>
                                                                        <ul className="namelist">
                                                                            <li>Amara Sin</li>
                                                                            <li>Jhon Doe</li>
                                                                            <li><span>10+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/smile.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/smile.png" />
                                                                            Happy</span>
                                                                        <ul className="namelist">
                                                                            <li>Sarah K.</li>
                                                                            <li>Jhon Doe</li>
                                                                            <li>Amara Sin</li>
                                                                            <li><span>100+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/weep.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/weep.png" />
                                                                            Dislike</span>
                                                                        <ul className="namelist">
                                                                            <li>Danial Carbal</li>
                                                                            <li>Amara Sin</li>
                                                                            <li>Sarah K.</li>
                                                                            <li><span>15+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p>20+</p>
                                                            </div>
                                                            <div className="new-comment" style={{ display: 'none' }}>
                                                                <form method="post">
                                                                    <input type="text" placeholder="write comment" />
                                                                    <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                </form>
                                                                <div className="comments-area">
                                                                    <ul>
                                                                        <li>
                                                                            <figure><img alt src="images/resources/user1.jpg" />
                                                                            </figure>
                                                                            <div className="commenter">
                                                                                <h5><a title href="#">Jack Carter</a>
                                                                                </h5>
                                                                                <span>2 hours ago</span>
                                                                                <p>
                                                                                    i think that some how, we learn who we
                                                                                    really are and then live with that
                                                                                    decision, great post!
                                                                                </p>
                                                                                <span>you can view the more detail via
                                                                                    link</span>
                                                                                <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                            </div>
                                                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                        </li>
                                                                        <li>
                                                                            <figure><img alt src="images/resources/user2.jpg" />
                                                                            </figure>
                                                                            <div className="commenter">
                                                                                <h5><a title href="#">Ching xang</a></h5>
                                                                                <span>2 hours ago</span>
                                                                                <p>
                                                                                    i think that some how, we learn who we
                                                                                    really are and then live with that
                                                                                    decision, great post!
                                                                                </p>
                                                                            </div>
                                                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* share video */}
                                        <div className="main-wraper">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <em>
                                                            <svg style={{ verticalAlign: 'middle' }} xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24">
                                                                <path fill="#7fba00" stroke="#7fba00" d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z">
                                                                </path>
                                                            </svg></em>
                                                        <img alt src="images/resources/user2.jpg" />
                                                    </figure>
                                                    <div className="friend-name">
                                                        <div className="more">
                                                            <div className="more-post-optns">
                                                                <i className>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                        <circle cx={12} cy={12} r={1} />
                                                                        <circle cx={19} cy={12} r={1} />
                                                                        <circle cx={5} cy={12} r={1} />
                                                                    </svg></i>
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-pen-alt-1" />Edit Post
                                                                        <span>Edit This Post within a Hour</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ban" />Hide Post
                                                                        <span>Hide This Post</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ui-delete" />Delete Post
                                                                        <span>If inappropriate Post By Mistake</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-flag" />Report
                                                                        <span>Inappropriate content</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ins><a title href="time-line.html">Maria k.</a> Shared
                                                            Link</ins>
                                                        <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <img className="gif" src="images/giphy.png" data-gif="images/giphy-sample.gif" alt />
                                                        <div className="we-video-info">
                                                            <ul>
                                                                <li>
                                                                    <span title="views" className="views">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye">
                                                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z">
                                                                                </path>
                                                                                <circle cx={12} cy={12} r={3} />
                                                                            </svg></i>
                                                                        <ins>1.2k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span title="Comments" className="Recommend">
                                                                        <i>
                                                                            <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
                                                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                                                            </svg></i>
                                                                        <ins>54</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span title="follow" className="Follow">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                                                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                                                                                </polygon>
                                                                            </svg></i>
                                                                        <ins>5k</ins>
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    <span className="share-pst" title="Share">
                                                                        <i>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                                <circle cx={18} cy={5} r={3} />
                                                                                <circle cx={6} cy={12} r={3} />
                                                                                <circle cx={18} cy={19} r={3} />
                                                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                                            </svg></i>
                                                                        <ins>205</ins>
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                            <a href="post-detail.html" title className="reply">Reply <i className="icofont-reply" /></a>
                                                        </div>
                                                        <div className="stat-tools">
                                                            <div className="box">
                                                                <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                    <div className="Emojis">
                                                                        <div className="Emoji Emoji--like">
                                                                            <div className="icon icon--like" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--love">
                                                                            <div className="icon icon--heart" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--haha">
                                                                            <div className="icon icon--haha" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--wow">
                                                                            <div className="icon icon--wow" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--sad">
                                                                            <div className="icon icon--sad" />
                                                                        </div>
                                                                        <div className="Emoji Emoji--angry">
                                                                            <div className="icon icon--angry" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="box">
                                                                <div className="Emojis">
                                                                    <div className="Emoji Emoji--like">
                                                                        <div className="icon icon--like" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--love">
                                                                        <div className="icon icon--heart" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--haha">
                                                                        <div className="icon icon--haha" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--wow">
                                                                        <div className="icon icon--wow" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--sad">
                                                                        <div className="icon icon--sad" />
                                                                    </div>
                                                                    <div className="Emoji Emoji--angry">
                                                                        <div className="icon icon--angry" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a title href="#" className="comment-to"><i className="icofont-comment" /> Comment</a>
                                                            <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                            <div className="emoji-state">
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/thumb.png" />
                                                                            Likes</span>
                                                                        <ul className="namelist">
                                                                            <li>Jhon Doe</li>
                                                                            <li>Amara Sin</li>
                                                                            <li>Sarah K.</li>
                                                                            <li><span>20+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/heart.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/heart.png" />
                                                                            Love</span>
                                                                        <ul className="namelist">
                                                                            <li>Amara Sin</li>
                                                                            <li>Jhon Doe</li>
                                                                            <li><span>10+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/smile.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/smile.png" />
                                                                            Happy</span>
                                                                        <ul className="namelist">
                                                                            <li>Sarah K.</li>
                                                                            <li>Jhon Doe</li>
                                                                            <li>Amara Sin</li>
                                                                            <li><span>100+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div className="popover_wrapper">
                                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/weep.png" /></a>
                                                                    <div className="popover_content">
                                                                        <span><img alt src="images/smiles/weep.png" />
                                                                            Dislike</span>
                                                                        <ul className="namelist">
                                                                            <li>Danial Carbal</li>
                                                                            <li>Amara Sin</li>
                                                                            <li>Sarah K.</li>
                                                                            <li><span>15+ more</span></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <p>20+</p>
                                                            </div>
                                                            <div className="new-comment" style={{ display: 'none' }}>
                                                                <form method="post">
                                                                    <input type="text" placeholder="write comment" />
                                                                    <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                </form>
                                                                <div className="comments-area">
                                                                    <ul>
                                                                        <li>
                                                                            <figure><img alt src="images/resources/user1.jpg" />
                                                                            </figure>
                                                                            <div className="commenter">
                                                                                <h5><a title href="#">Jack Carter</a>
                                                                                </h5>
                                                                                <span>2 hours ago</span>
                                                                                <p>
                                                                                    i think that some how, we learn who we
                                                                                    really are and then live with that
                                                                                    decision, great post!
                                                                                </p>
                                                                                <span>you can view the more detail via
                                                                                    link</span>
                                                                                <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                            </div>
                                                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                        </li>
                                                                        <li>
                                                                            <figure><img alt src="images/resources/user2.jpg" />
                                                                            </figure>
                                                                            <div className="commenter">
                                                                                <h5><a title href="#">Ching xang</a></h5>
                                                                                <span>2 hours ago</span>
                                                                                <p>
                                                                                    i think that some how, we learn who we
                                                                                    really are and then live with that
                                                                                    decision, great post!
                                                                                </p>
                                                                            </div>
                                                                            <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                            <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* gif image post */}
                                        <div className="main-wraper">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <img alt src="images/resources/sponsor.png" />
                                                    </figure>
                                                    <div className="friend-name">
                                                        <div className="more">
                                                            <div className="more-post-optns">
                                                                <i className>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                                                        <circle cx={12} cy={12} r={1} />
                                                                        <circle cx={19} cy={12} r={1} />
                                                                        <circle cx={5} cy={12} r={1} />
                                                                    </svg></i>
                                                                <ul>
                                                                    <li>
                                                                        <i className="icofont-pen-alt-1" />Edit Post
                                                                        <span>Edit This Post within a Hour</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ban" />Hide Post
                                                                        <span>Hide This Post</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-ui-delete" />Delete Post
                                                                        <span>If inappropriate Post By Mistake</span>
                                                                    </li>
                                                                    <li>
                                                                        <i className="icofont-flag" />Report
                                                                        <span>Inappropriate content</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ins><a title href="time-line.html">Sponsors Ads</a></ins>
                                                        <span><i className="icofont-globe" /> Sponsor</span>
                                                    </div>
                                                    <div className="post-meta">
                                                        <ul className="sponsored-caro">
                                                            <li>
                                                                <figure><img src="images/resources/sponsor-prod1.jpg" alt /></figure>
                                                                <div className="sponsor-prod-name">
                                                                    <a href="#" title>Aloevera Juice 1 liter</a>
                                                                    <span>$24</span>
                                                                </div>
                                                                <a href="#" title className="shop-btn">Shop Now</a>
                                                                <div className="share-info">
                                                                    <span>50 shares</span>
                                                                    <span>20k Likes</span>
                                                                </div>
                                                                <div className="stat-tools">
                                                                    <div className="box">
                                                                        <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box">
                                                                        <div className="Emojis">
                                                                            <div className="Emoji Emoji--like">
                                                                                <div className="icon icon--like" />
                                                                            </div>
                                                                            <div className="Emoji Emoji--love">
                                                                                <div className="icon icon--heart" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/sponsor-prod5.jpg" alt /></figure>
                                                                <div className="sponsor-prod-name">
                                                                    <a href="#" title>Beauty Cosmetics</a>
                                                                    <span>$24</span>
                                                                </div>
                                                                <a href="#" title className="shop-btn">Shop Now</a>
                                                                <div className="share-info">
                                                                    <span>50 shares</span>
                                                                    <span>20k Likes</span>
                                                                </div>
                                                                <div className="stat-tools">
                                                                    <div className="box">
                                                                        <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box">
                                                                        <div className="Emojis">
                                                                            <div className="Emoji Emoji--like">
                                                                                <div className="icon icon--like" />
                                                                            </div>
                                                                            <div className="Emoji Emoji--love">
                                                                                <div className="icon icon--heart" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/sponsor-prod4.jpg" alt /></figure>
                                                                <div className="sponsor-prod-name">
                                                                    <a href="#" title>Overtime For Men</a>
                                                                    <span>$24</span>
                                                                </div>
                                                                <a href="#" title className="shop-btn">Shop Now</a>
                                                                <div className="share-info">
                                                                    <span>50 shares</span>
                                                                    <span>20k Likes</span>
                                                                </div>
                                                                <div className="stat-tools">
                                                                    <div className="box">
                                                                        <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box">
                                                                        <div className="Emojis">
                                                                            <div className="Emoji Emoji--like">
                                                                                <div className="icon icon--like" />
                                                                            </div>
                                                                            <div className="Emoji Emoji--love">
                                                                                <div className="icon icon--heart" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/sponsor-prod3.jpg" alt /></figure>
                                                                <div className="sponsor-prod-name">
                                                                    <a href="#" title>Redish Baby Items</a>
                                                                    <span>$24</span>
                                                                </div>
                                                                <a href="#" title className="shop-btn">Shop Now</a>
                                                                <div className="share-info">
                                                                    <span>50 shares</span>
                                                                    <span>20k Likes</span>
                                                                </div>
                                                                <div className="stat-tools">
                                                                    <div className="box">
                                                                        <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box">
                                                                        <div className="Emojis">
                                                                            <div className="Emoji Emoji--like">
                                                                                <div className="icon icon--like" />
                                                                            </div>
                                                                            <div className="Emoji Emoji--love">
                                                                                <div className="icon icon--heart" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/sponsor-prod2.jpg" alt /></figure>
                                                                <div className="sponsor-prod-name">
                                                                    <a href="#" title>Potato Baby Fider</a>
                                                                    <span>$24</span>
                                                                </div>
                                                                <a href="#" title className="shop-btn">Shop Now</a>
                                                                <div className="share-info">
                                                                    <span>50 shares</span>
                                                                    <span>20k Likes</span>
                                                                </div>
                                                                <div className="stat-tools">
                                                                    <div className="box">
                                                                        <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box">
                                                                        <div className="Emojis">
                                                                            <div className="Emoji Emoji--like">
                                                                                <div className="icon icon--like" />
                                                                            </div>
                                                                            <div className="Emoji Emoji--love">
                                                                                <div className="icon icon--heart" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <figure><img src="images/resources/sponsor-prod3.jpg" alt /></figure>
                                                                <div className="sponsor-prod-name">
                                                                    <a href="#" title>Baby items fider</a>
                                                                    <span>$24</span>
                                                                </div>
                                                                <a href="#" title className="shop-btn">Shop Now</a>
                                                                <div className="share-info">
                                                                    <span>50 shares</span>
                                                                    <span>20k Likes</span>
                                                                </div>
                                                                <div className="stat-tools">
                                                                    <div className="box">
                                                                        <div className="Like"><a className="Like__link"><i className="icofont-like" /> Like</a>
                                                                            <div className="Emojis">
                                                                                <div className="Emoji Emoji--like">
                                                                                    <div className="icon icon--like" />
                                                                                </div>
                                                                                <div className="Emoji Emoji--love">
                                                                                    <div className="icon icon--heart" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="box">
                                                                        <div className="Emojis">
                                                                            <div className="Emoji Emoji--like">
                                                                                <div className="icon icon--like" />
                                                                            </div>
                                                                            <div className="Emoji Emoji--love">
                                                                                <div className="icon icon--heart" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* advertisment carousel */}
                                        <div className="loadmore">
                                            <div className="sp sp-bars" />
                                            <a href="#" title data-ripple>Load More..</a>
                                        </div>{/* loadmore buttons */}
                                    </div>
                                    <div className="col-lg-3">
                                        <aside className="sidebar static right">
                                            <div className="widget">
                                                <h4 className="widget-title">Your Groups</h4>
                                                <ul className="ak-groups">
                                                    <li>
                                                        <figure><img src="images/resources/your-group1.jpg" alt /></figure>
                                                        <div className="your-grp">
                                                            <h5><a href="group-detail.html" title>Good Group</a></h5>
                                                            <a href="#" title><i className="icofont-bell-alt" />Notifilactions
                                                                <span>13</span></a>
                                                            <a href="group-feed.html" title className="promote">view feed</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img src="images/resources/your-group2.jpg" alt /></figure>
                                                        <div className="your-grp">
                                                            <h5><a href="group-detail.html" title>E-course Group</a></h5>
                                                            <a href="#" title><i className="icofont-bell-alt" />Notifilactions
                                                                <span>13</span></a>
                                                            <a href="group-feed.html" title className="promote">view feed</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* Your groups */}
                                            <div className="widget">
                                                <h4 className="widget-title">Suggested Group</h4>
                                                <div className="sug-caro">
                                                    <div className="friend-box">
                                                        <figure>
                                                            <img alt src="images/resources/sidebar-info.jpg" />
                                                            <span>Members: 505K</span>
                                                        </figure>
                                                        <div className="frnd-meta">
                                                            <img alt src="images/resources/frnd-figure2.jpg" />
                                                            <div className="frnd-name">
                                                                <a title href="#">Social Research</a>
                                                                <span>@biolabest</span>
                                                            </div>
                                                            <a className="main-btn2" href="#" title>Join Community</a>
                                                        </div>
                                                    </div>
                                                    <div className="friend-box">
                                                        <figure>
                                                            <img alt src="images/resources/sidebar-info2.jpg" />
                                                            <span>Members: 505K</span>
                                                        </figure>
                                                        <div className="frnd-meta">
                                                            <img alt src="images/resources/frnd-figure3.jpg" />
                                                            <div className="frnd-name">
                                                                <a title href="#">Bio Labest Group</a>
                                                                <span>@biolabest</span>
                                                            </div>
                                                            <a className="main-btn2" href="#" title>Join Community</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>{/* suggested group */}
                                            <div className="widget">
                                                <h4 className="widget-title">Giải Trí</h4>
                                                <div className="ask-question">
                                                    <i className="icofont-question-circle" />
                                                    <h6>Trò Chơi Xúc Xắc</h6>
                                                    <NavLink to='/game' >Chơi Game</NavLink>
                                                </div>
                                            </div>{/* ask question widget */}
                                            <div className="widget">
                                                <h4 className="widget-title">Explor Events <a className="see-all" href="#" title>See All</a></h4>
                                                <div className="rec-events bg-purple">
                                                    <i className="icofont-gift" />
                                                    <h6><a title href>BZ University good night event in columbia</a>
                                                    </h6>
                                                    <img alt src="images/clock.png" />
                                                </div>
                                                <div className="rec-events bg-blue">
                                                    <i className="icofont-microphone" />
                                                    <h6><a title href>The 3rd International Conference 2020</a></h6>
                                                    <img alt src="images/clock.png" />
                                                </div>
                                            </div>{/* event widget */}
                                            <div className="widget">
                                                <span><i className="icofont-globe" /> Sponsored</span>
                                                <ul className="sponsors-ad">
                                                    <li>
                                                        <figure><img src="images/resources/sponsor.jpg" alt /></figure>
                                                        <div className="sponsor-meta">
                                                            <h5><a href="#" title>IQ Options Broker</a></h5>
                                                            <a href="#" title target="_blank">www.iqvie.com</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img src="images/resources/sponsor2.jpg" alt /></figure>
                                                        <div className="sponsor-meta">
                                                            <h5><a href="#" title>BM Fashion Designer</a></h5>
                                                            <a href="#" title target="_blank">www.abcd.com</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* sponsord */}
                                            <div className="widget stick-widget">
                                                <h4 className="widget-title">Who's follownig</h4>
                                                <ul className="followers">
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar.jpg" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Kelly Bill</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar2.jpg" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Issabel</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar3.jpg" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Andrew</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar4.jpg" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Sophia</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar5.jpg" />
                                                        </figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Allen</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>{/* whos following */}
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/* content */}
            <figure className="bottom-mockup"><img src="images/footer.png" alt /></figure>
            <div className="bottombar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className>© copyright All rights reserved by socimo 2020</span>
                        </div>
                    </div>
                </div>
            </div>{/* bottombar */}
            <div className="wraper-invite">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                    </path>
                                    <polyline points="22,6 12,13 2,6" />
                                </svg></i> Invite Colleagues</h5>
                        </div>
                        <div className="invitation-meta">
                            <p>
                                Enter an email address to invite a colleague or co-author to join you on socimo. They will
                                receive an email and, in some cases, up to two reminders.
                            </p>
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Enter Email" />
                                <button type="submit" className="main-btn">Invite</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* invite colleague popup */}
            <div className="popup-wraper">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg></i> Send Message</h5>
                        </div>
                        <div className="send-message">
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Enter Name.." />
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Write Message" defaultValue={""} />
                                <div className="uploadimage">
                                    <i className="icofont-file-jpg" />
                                    <label className="fileContainer">
                                        <input type="file" />Attach file
                                    </label>
                                </div>
                                <button type="submit" className="main-btn">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* send message popup */}
            <div className="side-slide">
                <span className="popup-closed"><i className="icofont-close" /></span>
                <div className="slide-meta">
                    <ul className="nav nav-tabs slide-btns">
                        <li className="nav-item"><a className="active" href="#messages" data-toggle="tab">Messages</a></li>
                        <li className="nav-item"><a className href="#notifications" data-toggle="tab">Notifications</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active fade show" id="messages">
                            <h4><i className="icofont-envelope" /> messages</h4>
                            <a href="#" className="send-mesg" title="New Message" data-toggle="tooltip"><i className="icofont-edit" /></a>
                            <ul className="new-messages">
                                <li>
                                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Ibrahim Ahmed</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Fatima J.</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Fawad Ahmed</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Saim Turan</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>Helo dear i wanna talk to you</a>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" title className="main-btn" data-ripple>view all</a>
                        </div>
                        <div className="tab-pane fade" id="notifications">
                            <h4><i className="icofont-bell-alt" /> notifications</h4>
                            <ul className="notificationz">
                                <li>
                                    <figure><img src="images/resources/user5.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>recommend your post</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user4.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>share your post <strong>a good time today!</strong></a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user2.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>recommend your post</a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user1.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>share your post <strong>a good time today!</strong></a>
                                    </div>
                                </li>
                                <li>
                                    <figure><img src="images/resources/user3.jpg" alt /></figure>
                                    <div className="mesg-info">
                                        <span>Alis wells</span>
                                        <a href="#" title>recommend your post</a>
                                    </div>
                                </li>
                            </ul>
                            <a href="#" title className="main-btn" data-ripple>view all</a>
                        </div>
                    </div>
                </div>
            </div>{/* side slide message & popup */}

            {create === true ?
                <div className="post-new-popup" style={popupStyle}>
                    <div className="popup" style={{ width: 800 }}>
                        <span className="popup-closed" onClick={handleClick}><i className="icofont-close" /></span>
                        <div className="popup-meta">
                            <div className="popup-head">
                                <h5><i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                        <line x1={12} y1={5} x2={12} y2={19} />
                                        <line x1={5} y1={12} x2={19} y2={12} />
                                    </svg></i>Create New Post</h5>
                            </div>
                            <div className="post-new">
                                <div className="post-newmeta">
                                    <ul className="post-categoroes">

                                        {/* <li><i className="icofont-camera" /> Photo / Video</li>
                                        <li><i className="icofont-google-map" /> Post Location</li>
                                        <li><i className="icofont-file-gif" /> Post Gif</li>
                                        <li><i className="icofont-ui-tag" /> Tag to Friend</li>
                                        <li><i className="icofont-users" /> Share in Group</li>
                                        <li><i className="icofont-link" /> Share Link</li>
                                        <li><i className="icofont-video-cam" /> Go Live</li>
                                        <li><i className="icofont-sale-discount" /> Post Online Course</li>
                                        <li><i className="icofont-read-book" /> Post A Book</li>
                                        <li><i className="icofont-globe" /> Post an Ad</li> */}
                                    </ul>
                                    {/* <form method="post" className="dropzone dz-clickable" action="/upload-target">
                                        <div className="fallback">
                                            <input name="file" type="file" />
                                        </div>
                                    </form> */}
                                    <div style={{ overflow: 'auto', cursor: 'pointer', minHeight: '100px', maxHeight: '300px' }}>
                                        {/* <FilePond
                                            files={files}
                                            onupdatefiles={handleFilePondUpdate}
                                            allowMultiple={true}
                                            maxFiles={50}
                                            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'

                                        /> */}

                                        {/* <FilePond
                                            // ...
                                            onChange={(e) => { handleFileUpload(e) }}
                                        /> */}
                                        {/* {downloadURL && <p>Download URL: {downloadURL}</p>} */}
                                    </div>

                                </div>
                                <form method="post" onSubmit={formik.handleSubmit} className="c-form">
                                    <div style={{ display: 'flex' }}>
                                        <div>
                                            <div>
                                                <h2>Tiêu Đề</h2>
                                                <input type='text' name='title' onChange={formik.handleChange} />
                                            </div>
                                            <div>
                                                <h2>Chi Tiết</h2>
                                                <input type='text' name='description' onChange={formik.handleChange} />
                                            </div>
                                        </div>
                                        <div>
                                            <div>
                                                <h2>Địa Điễm</h2>
                                                <input type='text' name='location' onChange={formik.handleChange} />
                                            </div>

                                            {configActivity === true ?
                                                <div>
                                                    <input type="checkbox" onChange={toggleTextInput} /> Nhận Ủng Hộ
                                                    {isTextInputVisible === "true" && <div>
                                                        <h2>Mục Tiêu</h2>
                                                        <input type='text' name='targetDonation' onChange={formik.handleChange} />
                                                    </div>
                                                    }
                                                </div>
                                                :

                                                <div>

                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <input type='file' onChange={uploadFile} />
                                    {files !== '' ? <img src={files} style={{ height: '300px' }} /> : <div></div>}
                                    {/* <textarea id="emojionearea1" placeholder="What's On Your Mind?" defaultValue={""} /> */}
                                    {/* <div className="activity-post">
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox" defaultChecked />
                                            <label htmlFor="checkbox"><span>Activity Feed</span></label>
                                        </div>
                                        <div className="checkbox">
                                            <input type="checkbox" id="checkbox2" defaultChecked />
                                            <label htmlFor="checkbox2"><span>My Story</span></label>
                                        </div>
                                    </div>
                                    <div className="select-box">
                                        <div className="select-box__current" tabIndex={1}>
                                            <div className="select-box__value"><input className="select-box__input" type="radio" id={0} defaultValue={1} name="Ben" defaultChecked="checked" />
                                                <p className="select-box__input-text"><i className="icofont-globe-alt" /> Public</p>
                                            </div>
                                            <div className="select-box__value"><input className="select-box__input" type="radio" id={1} defaultValue={2} name="Ben" defaultChecked="checked" />
                                                <p className="select-box__input-text"><i className="icofont-lock" /> Private</p>
                                            </div>
                                            <div className="select-box__value"><input className="select-box__input" type="radio" id={2} defaultValue={3} name="Ben" defaultChecked="checked" />
                                                <p className="select-box__input-text"><i className="icofont-user" /> Specific Friend
                                                </p>
                                            </div>
                                            <div className="select-box__value"><input className="select-box__input" type="radio" id={3} defaultValue={4} name="Ben" defaultChecked="checked" />
                                                <p className="select-box__input-text"><i className="icofont-star" /> Only Friends</p>
                                            </div>
                                            <div className="select-box__value"><input className="select-box__input" type="radio" id={4} defaultValue={5} name="Ben" defaultChecked="checked" />
                                                <p className="select-box__input-text"><i className="icofont-users-alt-3" /> Joined
                                                    Groups</p>
                                            </div>
                                            <img className="select-box__icon" src="images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true" />
                                        </div>
                                        <ul className="select-box__list">
                                            <li><label className="select-box__option" htmlFor={0}><i className="icofont-globe-alt" />
                                                Public</label></li>
                                            <li><label className="select-box__option" htmlFor={1}><i className="icofont-lock" />
                                                Private</label></li>
                                            <li><label className="select-box__option" htmlFor={2}><i className="icofont-user" /> Specific
                                                Friend</label></li>
                                            <li><label className="select-box__option" htmlFor={3}><i className="icofont-star" /> Only
                                                Friends</label></li>
                                            <li><label className="select-box__option" htmlFor={4}><i className="icofont-users-alt-3" />
                                                Joined Groups</label></li>
                                        </ul>
                                    </div>
                                    <input className="schedule-btn" type="text" id="datetimepicker" readOnly />
                                    <input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&t=56s" /> */}
                                    <button type="submit" className="main-btn">Publish</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
                :
                <div></div>
            }



            <div className="new-question-popup">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle">
                                    <circle cx={12} cy={12} r={10} />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <line x1={12} y1={17} x2="12.01" y2={17} />
                                </svg></i> Ask Question</h5>
                        </div>
                        <div className="post-new">
                            <form method="post" className="c-form">
                                <input type="text" placeholder="Question Title" />
                                <textarea placeholder="Write Question" defaultValue={""} />
                                <select>
                                    <option>Select Your Question Type</option>
                                    <option>Article</option>
                                    <option>Book</option>
                                    <option>Chapter</option>
                                    <option>Code</option>
                                    <option>conference Paper</option>
                                    <option>Cover Page</option>
                                    <option>Data</option>
                                    <option>Exprement Finding</option>
                                    <option>Method</option>
                                    <option>Poster</option>
                                    <option>Preprint</option>
                                    <option>Technicial Report</option>
                                    <option>Thesis</option>
                                    <option>Research</option>
                                </select>
                                <div className="uploadimage">
                                    <i className="icofont-eye-alt-alt" />
                                    <label className="fileContainer">
                                        <input type="file" />Upload File
                                    </label>
                                </div>
                                <button type="submit" className="main-btn">Post</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* ask question */}
            {/* <div className="auto-popup">
                    <div className="popup-innner">
                        <div className="popup-head">
                            <h4>We want to hear from you!</h4>
                        </div>
                        <div className="popup-meta">
                            <span>What are you struggling with right now? what we can help you with?</span>
                            <form method="post" className="inquiry-about">
                                <input type="text" placeholder="Your Answer" />
                                <h5>How did you hear about us?</h5>
                                <label><input type="radio" name="hear" /> Facebook</label>
                                <label><input type="radio" name="hear" /> instagram</label>
                                <label><input type="radio" name="hear" /> Google Search</label>
                                <label><input type="radio" name="hear" /> Twitter</label>
                                <label><input type="radio" name="hear" /> Whatsapp</label>
                                <label><input type="radio" name="hear" /> Other</label>
                                <input type="text" placeholder="Writh Other" />
                                <button type="submit" className="primary button">Submit</button>
                                <button className="canceled button outline-primary" type="button">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div> */}
            {/* auto popup */}
            <div className="share-wraper">
                <div className="share-options">
                    <span className="close-btn"><i className="icofont-close-circled" /></span>
                    <h5><i>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1={12} y1={2} x2={12} y2={15} />
                        </svg></i>Share To!</h5>
                    <form method="post">
                        <textarea placeholder="Write Something" defaultValue={""} />
                    </form>
                    <ul>
                        <li><a title href="#">Your Timeline</a></li>
                        <li className="friends"><a title href="#">To Friends</a></li>
                        <li className="socialz"><a className="active" title href="#">Social Media</a></li>
                    </ul>
                    <div style={{ display: 'block' }} className="social-media">
                        <ul>
                            <li><a title href="#" className="facebook"><i className="icofont-facebook" /></a></li>
                            <li><a title href="#" className="twitter"><i className="icofont-twitter" /></a></li>
                            <li><a title href="#" className="instagram"><i className="icofont-instagram" /></a></li>
                            <li><a title href="#" className="pinterest"><i className="icofont-pinterest" /></a></li>
                            <li><a title href="#" className="youtube"><i className="icofont-youtube" /></a></li>
                            <li><a title href="#" className="dribble"><i className="icofont-dribbble" /></a></li>
                            <li><a title href="#" className="behance"><i className="icofont-behance-original" /></a></li>
                        </ul>
                    </div>
                    <div style={{ display: 'none' }} className="friends-to">
                        <div className="follow-men">
                            <figure><img className="mCS_img_loaded" src="images/resources/user1.jpg" alt /></figure>
                            <div className="follow-meta">
                                <h5><a href="#" title>Jack Carter</a></h5>
                                <span>family member</span>
                            </div>
                            <a href="#" title>Share</a>
                        </div>
                        <div className="follow-men">
                            <figure><img className="mCS_img_loaded" src="images/resources/user2.jpg" alt /></figure>
                            <div className="follow-meta">
                                <h5><a href="#" title>Xang Ching</a></h5>
                                <span>Close Friend</span>
                            </div>
                            <a href="#" title>Share</a>
                        </div>
                        <div className="follow-men">
                            <figure><img className="mCS_img_loaded" src="images/resources/user3.jpg" alt /></figure>
                            <div className="follow-meta">
                                <h5><a href="#" title>Emma Watson</a></h5>
                                <span>Matul Friend</span>
                            </div>
                            <a href="#" title>Share</a>
                        </div>
                    </div>
                    <button type="submit" className="main-btn">Publish</button>
                </div>
            </div>{/* share post */}
            <div className="cart-product">
                <a href="product-cart.html" title="View Cart" data-toggle="tooltip"><i className="icofont-cart-alt" /></a>
                <span>03</span>
            </div>{/* view cart button */}
            <div className="chat-live">
                <a className="chat-btn" href="#" title="Start Live Chat" data-toggle="tooltip"><i className="icofont-facebook-messenger" /></a>
                <span>07</span>
            </div>{/* chat button */}
            <div className="chat-box">
                <div className="chat-head">
                    <h4>New Messages</h4>
                    <span className="clozed"><i className="icofont-close-circled" /></span>
                    <form method="post">
                        <input type="text" placeholder="To.." />
                    </form>
                </div>
                <div className="user-tabs">
                    <ul className="nav nav-tabs">
                        <li className="nav-item"><a className="active" href="#link1" data-toggle="tab">All Friends</a></li>
                        <li className="nav-item"><a className href="#link2" data-toggle="tab">Active</a><em>3</em></li>
                        <li className="nav-item"><a className href="#link3" data-toggle="tab">Groups</a></li>
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                        <div className="tab-pane active fade show " id="link1">
                            <div className="friend">
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user1.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Oliver</span>
                                    <i className><img src="images/resources/user1.jpg" alt /></i>
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user2.jpg" alt />
                                        <span className="status away" />
                                    </figure>
                                    <span>Amelia</span>
                                    <i className="icofont-check-circled" />
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user3.jpg" alt />
                                        <span className="status offline" />
                                    </figure>
                                    <span>George</span>
                                    <i className><img src="images/resources/user3.jpg" alt /></i>
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user4.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Jacob</span>
                                    <i className="icofont-check-circled" />
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user5.jpg" alt />
                                        <span className="status away" />
                                    </figure>
                                    <span>Poppy</span>
                                    <i className="icofont-check-circled" />
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user6.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Sophia</span>
                                    <i className><img src="images/resources/user6.jpg" alt /></i>
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user7.jpg" alt />
                                        <span className="status away" />
                                    </figure>
                                    <span>Leo king</span>
                                    <i className><img src="images/resources/user7.jpg" alt /></i>
                                </a>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="link2">
                            <div className="friend">
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user1.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Samu Jane</span>
                                    <i className><img src="images/resources/user1.jpg" alt /></i>
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user6.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Tina Mark</span>
                                    <i className><img src="images/resources/user6.jpg" alt /></i>
                                </a>
                                <a href="#" title>
                                    <figure>
                                        <img src="images/resources/user7.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Ak William</span>
                                    <i className><img src="images/resources/user7.jpg" alt /></i>
                                </a>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="link3">
                            <div className="friend">
                                <a href="#" title>
                                    <figure className="group-chat">
                                        <img src="images/resources/user5.jpg" alt />
                                        <img className="two" src="images/resources/user3.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>Boys World</span>
                                    <i className="icofont-check-circled" />
                                </a>
                                <a href="#" title>
                                    <figure className="group-chat">
                                        <img src="images/resources/user2.jpg" alt />
                                        <img className="two" src="images/resources/user3.jpg" alt />
                                        <span className="status online" />
                                    </figure>
                                    <span>KK university Fellows</span>
                                    <i className="icofont-check-circled" />
                                </a>
                                <a href="#" title>
                                    <figure className="group-chat">
                                        <img src="images/resources/user3.jpg" alt />
                                        <img className="two" src="images/resources/user2.jpg" alt />
                                        <span className="status away" />
                                    </figure>
                                    <span>Education World</span>
                                    <i className="icofont-check-circled" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chat-card">
                    <div className="chat-card-head">
                        <img src="images/resources/user13.jpg" alt />
                        <h6>George Floyd</h6>
                        <div className="frnd-opt">
                            <div className="more">
                                <div className="more-post-optns">
                                    <i className>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal">
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                            <circle cx={5} cy={12} r={1} />
                                        </svg></i>
                                    <ul>
                                        <li>
                                            <i className="icofont-pen-alt-1" />Edit Post
                                            <span>Edit This Post within a Hour</span>
                                        </li>
                                        <li>
                                            <i className="icofont-ban" />Hide Chat
                                            <span>Hide This Post</span>
                                        </li>
                                        <li>
                                            <i className="icofont-ui-delete" />Delete Chat
                                            <span>If inappropriate Post By Mistake</span>
                                        </li>
                                        <li>
                                            <i className="icofont-flag" />Report
                                            <span>Inappropriate Chat</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <span className="close-mesage"><i className="icofont-close" /></span>
                        </div>
                    </div>
                    <div className="chat-list">
                        <ul>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <div className="chat-message-item">
                                        <figure><img src="images/resources/album5.jpg" alt /></figure>
                                        <div className="caption">4.5kb <i className="icofont-download" title="Download" /></div>
                                    </div>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                            8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the
                                        gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                            8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="you">
                                <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the
                                        gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                            8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the
                                        gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at
                                            8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <form className="text-box">
                            <textarea placeholder="Write Mesage..." defaultValue={""} />
                            <div className="add-smiles">
                                <span><img src="images/smiles/happy-3.png" alt /></span>
                            </div>
                            <div className="smiles-bunch">
                                <i><img src="images/smiles/thumb.png" alt /></i>
                                <i><img src="images/smiles/angry-1.png" alt /></i>
                                <i><img src="images/smiles/angry.png" alt /></i>
                                <i><img src="images/smiles/bored-1.png" alt /></i>
                                <i><img src="images/smiles/confused-1.png" alt /></i>
                                <i><img src="images/smiles/wink.png" alt /></i>
                                <i><img src="images/smiles/weep.png" alt /></i>
                                <i><img src="images/smiles/tongue-out.png" alt /></i>
                                <i><img src="images/smiles/suspicious.png" alt /></i>
                                <i><img src="images/smiles/crying-1.png" alt /></i>
                                <i><img src="images/smiles/crying.png" alt /></i>
                                <i><img src="images/smiles/embarrassed.png" alt /></i>
                                <i><img src="images/smiles/emoticons.png" alt /></i>
                                <i><img src="images/smiles/happy-2.png" alt /></i>
                            </div>
                            <button type="submit"><i className="icofont-paper-plane" /></button>
                        </form>
                    </div>
                </div>
            </div>{/* chat box */}
            <div className="createroom-popup">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head text-center">
                            <h5 className="only-icon"><i className="icofont-video-cam" /></h5>
                        </div>
                        <div className="room-meta">
                            <h4>Create Your Room</h4>
                            <ul>
                                <li>
                                    <i className="icofont-hand" />
                                    <div>
                                        <h6>Room Activity</h6>
                                        <span>Jack's Room</span>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox3" />
                                        <label htmlFor="checkbox3" />
                                    </div>
                                </li>
                                <li>
                                    <i className="icofont-clock-time" />
                                    <div>
                                        <h6>Start Time</h6>
                                        <span>Now</span>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox4" />
                                        <label htmlFor="checkbox4" />
                                    </div>
                                </li>
                                <li>
                                    <i className="icofont-users-alt-4" />
                                    <div>
                                        <h6>Invite to All Friends</h6>
                                        <span>Allow All friends to see this room</span>
                                    </div>
                                    <div className="checkbox">
                                        <input type="checkbox" id="checkbox5" />
                                        <label htmlFor="checkbox5" />
                                    </div>
                                </li>
                            </ul>
                            <span>Your room isn't visible until you invite people after you've created it.</span>
                            <a href="#" title className="main-btn full-width">Create Room</a>
                        </div>
                    </div>
                </div>
            </div>{/* create new room */}
            <DetailActivity item={detail} dateTime={DateTime} />

            <div className="modal fade" id="popupModal" tabIndex="-1" role="dialog" aria-labelledby="popupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <form className="modal-content" method='post' onSubmit={formik1.handleSubmit}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="popupModalLabel">Ủng Hộ</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="name">Tiêu Đề:</label>
                                    <input type="text" id="name" name="title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Số Tiền:</label>
                                    <input type="text" id="amount" name="amount" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email:</label>
                                    <input type="text" id="email" name="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Số Điện Thoại:</label>
                                    <input type="text" id="phone" name="phone" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Họ Tên:</label>
                                    <input type="text" id="name" name="name" />
                                </div>
                                <button type="submit" className="">Submit</button>
                            </form>
                        </div>
                    </form>
                </div>
            </div>
            {
                isPopupOpen && (
                    <div className="popup-overlay">
                        <div className="popup-container">
                            <h2>Popup Form</h2>
                            <button className="close-button" onClick={closePopup}>&times;</button>
                            <form onSubmit={formik1.handleSubmit} method='post'>
                                <div className="form-group">
                                    <label htmlFor="name">Tiêu Đề:</label>
                                    <input type="text" id="name" name="title" onChange={formik1.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Số Tiền:</label>
                                    <input type="number" id="amount" name="amount" onChange={formik1.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Email:</label>
                                    <input type="text" id="email" name="email" onChange={formik1.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Số Điện Thoại:</label>
                                    <input type="text" id="phone" name="phone" onChange={formik1.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Họ Tên:</label>
                                    <input type="text" id="name" name="name" onChange={formik1.handleChange} />
                                </div>
                                <button type="submit" className="">Submit</button>
                            </form>
                        </div>
                    </div>
                )
            }
        </Fragment >
    )
}
