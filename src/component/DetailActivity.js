import React, { useState } from 'react'
import Slider from 'react-slick';
import styles from './style.module.css';
export default function DetailActivity (props) {
    const { item, dateTime } = props;
    console.log(props.item.media);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const slides = props.item.media?.map((item, index) => {
        return <div className={styles['carousel-item']} key={index}>
            <img src={item.linkMedia} alt="Slide 1" />
        </div>
    })

    // [
    //     <div className={styles['carousel-item']} key={1}>
    //         <img src="https://picsum.photos/id/1/200/200" alt="Slide 1" />
    //     </div>,
    //     <div className={styles['carousel-item']} key={2}>
    //         <img src="https://picsum.photos/id/2/200/200" alt="Slide 2" />
    //     </div>,
    //     <div className={styles['carousel-item']} key={3}>
    //         <img src="https://picsum.photos/id/3/200/200" alt="Slide 3" />
    //     </div>,
    //     // Add more slides as needed
    // ];
    return (
        <div className="modal fade" id="img-comt">
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        <div className="row merged">
                            <div className="col-lg-9">
                                <div className='pop-image'>
                                    <div className="pop-item">
                                        <div className="action-block">
                                            <a className="action-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag">
                                                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                                                    <line x1={7} y1={7} x2="7.01" y2={7} />
                                                </svg>
                                            </a>
                                            <a className="action-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin">
                                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                    <circle cx={12} cy={10} r={3} />
                                                </svg>
                                            </a>
                                            <a className="action-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down">
                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                    <polyline points="19 12 12 19 5 12" />
                                                </svg>
                                            </a>
                                            <a className="action-button">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                                    <circle cx={12} cy={12} r={1} />
                                                    <circle cx={12} cy={5} r={1} />
                                                    <circle cx={12} cy={19} r={1} />
                                                </svg>
                                            </a>
                                        </div>

                                        {/* <div>
                                            <figure><img src={props.item.media && props.item.media[0] && props.item.media[0].linkMedia} alt width={100} /></figure>
                                        </div> */}
                                        <Slider {...settings} className={styles['slick-slider']}>{slides}</Slider>

                                        <div className="stat-tools">
                                            <div className="box">
                                                <div className="Like"><a className="Like__link"><i className="icofont-like" />
                                                    Like</a>

                                                </div>
                                            </div>

                                            <a title href="#" className="share-to"><i className="icofont-share-alt" />
                                                Share</a>
                                            <div className="emoji-state">
                                                <div className="popover_wrapper">
                                                    <a className="popover_title" href="#" title><img alt src="images/smiles/thumb.png" /></a>
                                                    <div className="popover_content">
                                                        <span><img alt src="images/smiles/thumb.png" /> Likes</span>
                                                        <ul className="namelist">
                                                            <li>Jhon Doe</li>
                                                            <li>Amara Sin</li>
                                                            <li>Sarah K.</li>
                                                            <li><span>20+ more</span></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <p>{props.item.numberLike}+</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="commentbar">
                                    <div className="user">
                                        <figure><img src="images/resources/user1.jpg" alt /></figure>
                                        <div className="user-information">
                                            <h4><a href="#" title>{props.item.user?.username}</a></h4>
                                            <span>{dateTime(item.createAt)}</span>
                                        </div>
                                        <a href="#" title="Follow" data-ripple>Follow</a>
                                    </div>
                                    <div className="we-video-info">
                                        <ul>
                                            <li>
                                                <span title="Comments" className="liked">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
                                                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3">
                                                            </path>
                                                        </svg></i>
                                                    <ins>52</ins>
                                                </span>
                                            </li>
                                            <li>
                                                <span title="Comments" className="comment">
                                                    <i>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z">
                                                            </path>
                                                        </svg></i>
                                                    <ins>52</ins>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <a title="Share" href="#" className>
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2">
                                                                <circle cx={18} cy={5} r={3} />
                                                                <circle cx={6} cy={12} r={3} />
                                                                <circle cx={18} cy={19} r={3} />
                                                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                                            </svg></i>
                                                    </a>
                                                    <ins>20</ins>
                                                </span>
                                            </li>
                                        </ul>
                                        <div className="users-thumb-list">
                                            <a href="#" title data-toggle="tooltip" data-original-title="Anderw">
                                                <img src="images/resources/userlist-1.jpg" alt />
                                            </a>
                                            <a href="#" title data-toggle="tooltip" data-original-title="frank">
                                                <img src="images/resources/userlist-2.jpg" alt />
                                            </a>
                                            <a href="#" title data-toggle="tooltip" data-original-title="Sara">
                                                <img src="images/resources/userlist-1.jpg" alt />
                                            </a>
                                            <a href="#" title data-toggle="tooltip" data-original-title="Amy">
                                                <img src="images/resources/userlist-2.jpg" alt />
                                            </a>
                                            <span><strong>You</strong>, <b>Sarah</b> and <a title href="#">24+
                                                more</a> liked</span>
                                        </div>
                                    </div>
                                    <div className="new-comment" style={{ display: 'block' }}>
                                        <form method="post">
                                            <input type="text" placeholder="write comment" />
                                            <button type="submit"><i className="icofont-paper-plane" /></button>
                                        </form>
                                        <div className="comments-area">
                                            <ul>
                                                {item.comment?.map((item, index) => {
                                                    return <li>
                                                        <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">{item.userId}</a></h5>
                                                            <span>{dateTime(item.datetime)}</span>
                                                            <p>
                                                                {item.commentContent}
                                                            </p>
                                                            <span></span>
                                                            <a title href="#"></a>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                })}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
