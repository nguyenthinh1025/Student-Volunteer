
import React from 'react'
import { Fragment } from 'react'
export default function Profile () {
    return (
        <Fragment>
            <div className="gap no-gap">
                <div className="top-area mate-black low-opacity">
                    <div className="bg-image" style={{ backgroundImage: 'url(images/resources/top-bg.jpg)' }} />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="post-subject">
                                    <div className="university-tag">
                                        <figure><img src="images/resources/user.jpg" alt /></figure>
                                        <div className="uni-name">
                                            <h4>Georg Peeter </h4>
                                            <span>@Georgofficial</span>
                                        </div>
                                        <ul className="sharing-options">
                                            <li><a title="Invite Colleagues" href="#" data-toggle="tooltip"><i className="icofont-id-card" /></a> </li>
                                            <li><a title="Follow" href="#" data-toggle="tooltip"><i className="icofont-star" /></a> </li>
                                            <li><a title="Share" href="#" data-toggle="tooltip"><i className="icofont-share-alt" /></a> </li>
                                        </ul>
                                        <a data-ripple title href="#" className="invite">Invite Colleagues</a>
                                    </div>
                                    <ul className="nav nav-tabs post-detail-btn">
                                        <li className="nav-item"><a className="active" href="#timeline" data-toggle="tab">Timeline</a></li>
                                        <li className="nav-item"><a className href="#followers" data-toggle="tab">Followers</a><span>23</span></li>
                                        <li className="nav-item"><a className href="#follow" data-toggle="tab">Follow</a><span>100</span></li>
                                        <li className="nav-item"><a className href="#about" data-toggle="tab">About</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* top Head */}
            <section>
                <div className="gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="page-contents" className="row merged20">
                                    <div className="col-lg-8">
                                        <div className="tab-content">
                                            <div className="tab-pane fade active show" id="timeline">
                                                <div className="main-wraper">
                                                    <span className="new-title">Create New Post</span>
                                                    <div className="new-post">
                                                        <form method="post">
                                                            <i className="icofont-pen-alt-1" />
                                                            <input type="text" placeholder="Create New Post" />
                                                        </form>
                                                        <ul className="upload-media">
                                                            <li>
                                                                <i><img src="images/image.png" alt /></i>
                                                                <span>Photo/Video</span>
                                                            </li>
                                                            <li>
                                                                <i><img src="images/activity.png" alt /></i>
                                                                <span>Feeling/Activity</span>
                                                            </li>
                                                            <li>
                                                                <i><img src="images/live-stream.png" alt /></i>
                                                                <span>Live Stream</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>{/* create new post */}
                                                <div className="main-wraper">
                                                    <div className="user-post">
                                                        <div className="friend-info">
                                                            <figure>
                                                                <img alt src="images/resources/user1.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Jack Carter</a> Share Post</ins>
                                                                <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                            </div>
                                                            <div className="post-meta">
                                                                <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                </p>
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                                                <ul className="namelist">
                                                                                    <li>Danial Carbal</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>15+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>10+</p>
                                                                    </div>
                                                                    <div className="new-comment" style={{ display: 'none' }}>
                                                                        <form method="post">
                                                                            <input type="text" placeholder="write comment" />
                                                                            <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                        </form>
                                                                        <div className="comments-area">
                                                                            <ul>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="https://www.youtube.com/watch?v=HpZgwHU1GcI" target="_blank">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                </div>{/* share post without image */}
                                                <div className="main-wraper">
                                                    <div className="user-post">
                                                        <div className="friend-info">
                                                            <figure>
                                                                <img alt src="images/resources/user2.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Maria k.</a> Premium Product</ins>
                                                                <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                            </div>
                                                            <div className="post-meta">
                                                                <figure className="premium-post"><img src="images/resources/book5.jpg" alt /></figure>
                                                                <div className="premium">
                                                                    <a href="book-detail.html" className="post-title">Technicial words 2020 Book world</a>
                                                                    <p>
                                                                        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                    </p>
                                                                    <a className="main-btn purchase-btn" title href="book-detail.html"><i className="icofont-cart-alt" /> Buy Now</a>
                                                                </div>
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                                                <ul className="namelist">
                                                                                    <li>Danial Carbal</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>15+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>10+</p>
                                                                    </div>
                                                                    <div className="new-comment" style={{ display: 'block' }}>
                                                                        <form method="post">
                                                                            <input type="text" placeholder="write comment" />
                                                                            <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                        </form>
                                                                        <div className="comments-area">
                                                                            <ul>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                </div>{/* post sell book */}
                                                <div className="main-wraper">
                                                    <div className="wraper-title">
                                                        <span><i className="icofont-video-alt" /> Videos Play List</span>
                                                        <a href="videos.html" title>See all Videos</a>
                                                    </div>
                                                    <div className="videos-caro">
                                                        <div className="item-video" data-merge={2}>
                                                            <a className="owl-video" href="https://www.youtube.com/watch?v=8iZTb9NWbz8" />
                                                            <div className="posted-user">
                                                                <img src="images/resources/user4.jpg" alt />
                                                                <span>Frank J.</span>
                                                            </div>
                                                            <div className="vid-info">
                                                                <span>1 year ago</span>
                                                                <span><i className="icofont-eye-open" /> 3.1k</span>
                                                            </div>
                                                        </div>
                                                        <div className="item-video" data-merge={2}>
                                                            <a className="owl-video" href="https://www.youtube.com/watch?v=8itUNRIWVIs" />
                                                            <div className="posted-user">
                                                                <img src="images/resources/user2.jpg" alt />
                                                                <span>Maria K.</span>
                                                            </div>
                                                            <div className="vid-info">
                                                                <span>2 weeks ago</span>
                                                                <span><i className="icofont-eye-open" /> 1.1k</span>
                                                            </div>
                                                        </div>
                                                        <div className="item-video" data-merge={2}>
                                                            <a className="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ" />
                                                            <div className="posted-user">
                                                                <img src="images/resources/user1.jpg" alt />
                                                                <span>Jack Carter</span>
                                                            </div>
                                                            <div className="vid-info">
                                                                <span>4 weeks ago</span>
                                                                <span><i className="icofont-eye-open" /> 20k</span>
                                                            </div>
                                                        </div>
                                                        <div className="item-video" data-merge={2}>
                                                            <a className="owl-video" href="https://www.youtube.com/watch?v=WNeLUngb-Xg" />
                                                            <div className="posted-user">
                                                                <img src="images/resources/user3.jpg" alt />
                                                                <span>Fawad Jan</span>
                                                            </div>
                                                            <div className="vid-info">
                                                                <span>1 Month ago</span>
                                                                <span><i className="icofont-eye-open" /> 8k</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>{/* video playlist carousel */}
                                                <div className="main-wraper">
                                                    <div className="user-post">
                                                        <div className="friend-info">
                                                            <figure>
                                                                <img alt src="images/resources/user3.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Turgut Alp</a> Create Post</ins>
                                                                <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                            </div>
                                                            <div className="post-meta">
                                                                <figure>
                                                                    <a data-toggle="modal" data-target="#img-comt" href="images/resources/album1.jpg">
                                                                        <img src="images/resources/study.jpg" alt />
                                                                    </a>
                                                                </figure>
                                                                <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                </p>
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                                                <ul className="namelist">
                                                                                    <li>Danial Carbal</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>15+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>30+</p>
                                                                    </div>
                                                                    <div className="new-comment" style={{ display: 'none' }}>
                                                                        <form method="post">
                                                                            <input type="text" placeholder="write comment" />
                                                                            <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                        </form>
                                                                        <div className="comments-area">
                                                                            <ul>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                </div>{/* share image with post */}
                                                <div className="main-wraper">
                                                    <div className="user-post">
                                                        <div className="friend-info">
                                                            <figure>
                                                                <img alt src="images/resources/user4.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Saim turan</a> added image album</ins>
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
                                                                <a href="post-detail.html" className="post-title">Supervision as a Personnel Development Device</a>
                                                                <p>
                                                                    Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
                                                                </p>
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                                                <ul className="namelist">
                                                                                    <li>Danial Carbal</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>15+ more</span></li>
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
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                                <img alt src="images/resources/user5.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Andrew Jhon</a> Shared Link</ins>
                                                                <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                            </div>
                                                            <div className="post-meta">
                                                                <em><a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" title target="_blank">https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538</a></em>
                                                                <figure>
                                                                    <span>fetched-image</span>
                                                                    <img src="images/resources/laptop.png" alt />
                                                                </figure>
                                                                <a href="https://themeforest.net/item/winku-social-network-toolkit-responsive-template/22363538" className="post-title" target="_blank">Winku Social Network with Company Pages Theme</a>
                                                                <p>
                                                                    “Winku” is a social community mobile app kit with features. user can use this app for sharing blog, posts, timeline, create Group, Create Pages, chat/Messages, Movies sharing, QA, and Much More.
                                                                </p>
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                                                <ul className="namelist">
                                                                                    <li>Danial Carbal</li>
                                                                                    <li>Amara Sin</li>
                                                                                    <li>Sarah K.</li>
                                                                                    <li><span>15+ more</span></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <p>10+</p>
                                                                    </div>
                                                                    <div className="new-comment" style={{ display: 'block' }}>
                                                                        <form method="post">
                                                                            <input type="text" placeholder="write comment" />
                                                                            <button type="submit"><i className="icofont-paper-plane" /></button>
                                                                        </form>
                                                                        <div className="comments-area">
                                                                            <ul>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                </div>{/* share link */}
                                                <div className="main-wraper">
                                                    <div className="user-post">
                                                        <div className="friend-info">
                                                            <figure>
                                                                <img alt src="images/resources/user2.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Maria k.</a> Shared Link</ins>
                                                                <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                            </div>
                                                            <div className="post-meta">
                                                                <em><a href="https://www.youtube.com/embed/zdow47FQRfQ" title target="_blank">https://www.youtube.com/embed/zdow47FQRfQ</a>
                                                                </em>
                                                                <iframe height={285} src="https://www.youtube.com/embed/zdow47FQRfQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                                <p>
                                                                    Cookie? Biscuit? Bikkie? They all mean the same thing! Our lovely English teachers will quickly show you some pronunciation and vocabulary differences from Australia, America, and England!
                                                                </p>
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
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
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                                <img alt src="images/resources/user2.jpg" />
                                                            </figure>
                                                            <div className="friend-name">
                                                                <div className="more">
                                                                    <div className="more-post-optns">
                                                                        <i className>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                                                <ins><a title href="time-line.html">Maria k.</a> Shared Link</ins>
                                                                <span><i className="icofont-globe" /> published: Sep,15 2020</span>
                                                            </div>
                                                            <div className="post-meta">
                                                                <img className="gif" src="images/giphy.png" data-gif="images/giphy-sample.gif" alt />
                                                                <div className="we-video-info">
                                                                    <ul>
                                                                        <li>
                                                                            <span title="views" className="views">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx={12} cy={12} r={3} /></svg></i>
                                                                                <ins>1.2k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="Comments" className="Recommend">
                                                                                <i>
                                                                                    <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={16} width={16} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                                                <ins>54</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span title="follow" className="Follow">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></i>
                                                                                <ins>5k</ins>
                                                                            </span>
                                                                        </li>
                                                                        <li>
                                                                            <span className="share-pst" title="Share">
                                                                                <i>
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                                                <span><img alt src="images/smiles/thumb.png" /> Likes</span>
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
                                                                                <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                                                <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                                                <span><img alt src="images/smiles/weep.png" /> Dislike</span>
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
                                                                                    <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Jack Carter</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
                                                                                        </p>
                                                                                        <span>you can view the more detail via link</span>
                                                                                        <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                                                    </div>
                                                                                    <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                                                    <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                                                </li>
                                                                                <li>
                                                                                    <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                                                    <div className="commenter">
                                                                                        <h5><a title href="#">Ching xang</a></h5>
                                                                                        <span>2 hours ago</span>
                                                                                        <p>
                                                                                            i think that some how, we learn who we really are and then live with that decision, great post!
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
                                                <div className="sp sp-bars" />
                                            </div>
                                            <div className="tab-pane fade" id="followers">
                                                <div className="row col-xs-6 merged-10">
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-1.jpg" alt /></figure>
                                                            <span><a href="#" title>Amy Watson</a></span>
                                                            <ins>Bz University, Pakistan</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-2.jpg" alt /></figure>
                                                            <span><a href="#" title>Muhammad Khan</a></span>
                                                            <ins>Oxford University, UK</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-3.jpg" alt /></figure>
                                                            <span><a href="#" title>Sadia Gill</a></span>
                                                            <ins>Wb University, USA</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-4.jpg" alt /></figure>
                                                            <span><a href="#" title>Rjapal</a></span>
                                                            <ins>Km University, India</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-5.jpg" alt /></figure>
                                                            <span><a href="#" title>Amy watson</a></span>
                                                            <ins>Oxford University, UK</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-6.jpg" alt /></figure>
                                                            <span><a href="#" title>Bob Frank</a></span>
                                                            <ins>WB University, Canada</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-7.jpg" alt /></figure>
                                                            <span><a href="#" title>Amy Watson</a></span>
                                                            <ins>Bz University, Pakistan</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-8.jpg" alt /></figure>
                                                            <span><a href="#" title>Muhammad Khan</a></span>
                                                            <ins>Oxford University, UK</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-9.jpg" alt /></figure>
                                                            <span><a href="#" title>Sadia Gill</a></span>
                                                            <ins>WB University, USA</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="sp sp-bars" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="follow">
                                                <div className="row merged-10 col-xs-6">
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-10.jpg" alt /></figure>
                                                            <span><a href="#" title>Amy Watson</a></span>
                                                            <ins>Bz University, Pakistan</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" />Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-11.jpg" alt /></figure>
                                                            <span><a href="#" title>Muhammad Khan</a></span>
                                                            <ins>Oxford University, UK</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-12.jpg" alt /></figure>
                                                            <span><a href="#" title>Sadia Gill</a></span>
                                                            <ins>WB University, USA</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-4.jpg" alt /></figure>
                                                            <span><a href="#" title>Rjapal</a></span>
                                                            <ins>Km University, India</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-1.jpg" alt /></figure>
                                                            <span><a href="#" title>Amy watson</a></span>
                                                            <ins>Oxford University, UK</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-2.jpg" alt /></figure>
                                                            <span><a href="#" title>Bob Frank</a></span>
                                                            <ins>WB University, Canada</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-5.jpg" alt /></figure>
                                                            <span><a href="#" title>Amy Watson</a></span>
                                                            <ins>Bz University, Pakistan</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-7.jpg" alt /></figure>
                                                            <span><a href="#" title>Muhammad Khan</a></span>
                                                            <ins>Oxford University, UK</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-6">
                                                        <div className="friendz">
                                                            <figure><img src="images/resources/speak-10.jpg" alt /></figure>
                                                            <span><a href="#" title>Sadia Gill</a></span>
                                                            <ins>WB University, USA</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Unfollow</a>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="sp sp-bars" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade " id="about">
                                                <div className="main-wraper">
                                                    <h3 className="main-title">About Engin</h3>
                                                    <div className="lang">
                                                        <h6>Languages</h6>
                                                        <span>English, Turkish</span>
                                                    </div>
                                                    <div className="dis-n-exp">
                                                        <h6>Discipliens</h6>
                                                        <span>educational leadership</span>
                                                        <span>educational assesment</span>
                                                        <span>educational management</span>
                                                        <span>Social Psychology</span>
                                                        <span>organizational Psychology</span>
                                                        <span>Qualitative social research</span>
                                                        <span>Qualitative Psychology</span>
                                                    </div>
                                                    <div className="dis-n-exp">
                                                        <h6>Skills &amp; Experties </h6>
                                                        <span>educational leadership</span>
                                                        <span>educational assesment</span>
                                                        <span>educational management</span>
                                                        <span>Social Psychology</span>
                                                        <span>organizational Psychology</span>
                                                        <span>Qualitative social research</span>
                                                        <span>Qualitative Psychology</span>
                                                    </div>
                                                </div>
                                                <div className="main-wraper">
                                                    <h3 className="main-title">Professional Experience</h3>
                                                    <div className="exp-col">
                                                        <div className="exp-meta">
                                                            <h5><i className="icofont-university" /> Oxford university</h5>
                                                            <p>Sep-2012 Sep-2013</p>
                                                            <span>Position</span>
                                                            <ins>Professor Associate</ins>
                                                        </div>
                                                        <img src="images/resources/uni1.jpg" alt />
                                                    </div>
                                                    <div className="exp-col">
                                                        <div className="exp-meta">
                                                            <h5><i className="icofont-university" /> university of cambridge</h5>
                                                            <p>Sep-2012 Sep-2013</p>
                                                            <span>Position</span>
                                                            <ins>Professor Associate</ins>
                                                        </div>
                                                        <img src="images/resources/uni3.jpg" alt />
                                                    </div>
                                                    <div className="exp-col">
                                                        <div className="exp-meta">
                                                            <h5><i className="icofont-university" /> university of cambridge</h5>
                                                            <p>Sep-2012 Sep-2013</p>
                                                            <span>Position</span>
                                                            <ins>Professor Associate</ins>
                                                        </div>
                                                        <img src="images/resources/uni4.jpg" alt />
                                                    </div>
                                                </div>
                                                <div className="main-wraper">
                                                    <h3 className="main-title">Researches Image &amp; PDF</h3>
                                                    <div className="row merged-10">
                                                        <div className="col-lg-4">
                                                            <figure className="research-avatar">
                                                                <a className="uk-inline" href="images/resources/image1.jpg" data-fancybox>
                                                                    <img src="images/resources/image1.jpg" alt />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <figure className="research-avatar">
                                                                <a className="uk-inline" href="images/resources/image1.jpg" data-fancybox>
                                                                    <img src="images/resources/image2.jpg" alt />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <figure className="research-avatar">
                                                                <a className="uk-inline" href="images/resources/image1.jpg" data-fancybox>
                                                                    <img src="images/resources/image3.jpg" alt />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <figure className="research-avatar">
                                                                <a className="uk-inline" href="images/resources/image1.jpg" data-fancybox>
                                                                    <img src="images/resources/image4.jpg" alt />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <figure className="research-avatar">
                                                                <a className="uk-inline" href="images/resources/image1.jpg" data-fancybox>
                                                                    <img src="images/resources/image5.jpg" alt />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <figure className="research-avatar">
                                                                <a className="uk-inline" href="images/resources/image1.jpg" data-fancybox>
                                                                    <img src="images/resources/image6.jpg" alt />
                                                                </a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="main-wraper">
                                            <div className="user-post">
                                                <div className="friend-info">
                                                    <figure>
                                                        <i className="icofont-learn" />
                                                    </figure>
                                                    <div className="friend-name">
                                                        <ins><a title href="time-line.html">Suggested</a></ins>
                                                        <span><i className="icofont-runner-alt-1" /> Follow similar Research People</span>
                                                    </div>
                                                    <ul className="suggested-caro">
                                                        <li>
                                                            <figure><img src="images/resources/speak-1.jpg" alt /></figure>
                                                            <span>Amy Watson</span>
                                                            <ins>Department of Socilolgy</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/speak-2.jpg" alt /></figure>
                                                            <span>Muhammad Khan</span>
                                                            <ins>Department of Socilolgy</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/speak-3.jpg" alt /></figure>
                                                            <span>Sadia Gill</span>
                                                            <ins>Department of Socilolgy</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </li>
                                                        <li>
                                                            <figure><img src="images/resources/speak-4.jpg" alt /></figure>
                                                            <span>Aykash verma</span>
                                                            <ins>Department of Socilolgy</ins>
                                                            <a href="#" title data-ripple><i className="icofont-star" /> Follow</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>{/* suggested friends */}
                                    </div>
                                    <div className="col-lg-4">
                                        <aside className="sidebar static right">
                                            <div className="widget">
                                                <h4 className="widget-title">Post Analytics</h4>
                                                <ul className="widget-analytics">
                                                    <li>Reads <span>56</span></li>
                                                    <li>Recommendations <span>3</span></li>
                                                    <li>Shares <span>22</span></li>
                                                    <li>References <span>17</span></li>
                                                </ul>
                                            </div>
                                            <div className="widget">
                                                <h4 className="widget-title">Ask Research Question?</h4>
                                                <div className="ask-question">
                                                    <i className="icofont-question-circle" />
                                                    <h6>Ask questions in Q&amp;A to get help from experts in your field.</h6>
                                                    <a className="ask-qst" href="#" title>Ask a question</a>
                                                </div>
                                            </div>
                                            <div className="widget">
                                                <h4 className="widget-title">Explor Events <a className="see-all" href="#" title>See All</a></h4>
                                                <div className="rec-events bg-purple">
                                                    <i className="icofont-gift" />
                                                    <h6><a title href>BZ University good night event in columbia</a></h6>
                                                    <img alt src="images/clock.png" />
                                                </div>
                                                <div className="rec-events bg-blue">
                                                    <i className="icofont-microphone" />
                                                    <h6><a title href>The 3rd International Conference 2020</a></h6>
                                                    <img alt src="images/clock.png" />
                                                </div>
                                            </div>
                                            <div className="widget stick-widget">
                                                <h4 className="widget-title">Who's follownig</h4>
                                                <ul className="followers">
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar.jpg" /></figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Kelly Bill</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar2.jpg" /></figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Issabel</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar3.jpg" /></figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Andrew</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar4.jpg" /></figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Sophia</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/friend-avatar5.jpg" /></figure>
                                                        <div className="friend-meta">
                                                            <h4>
                                                                <a title href="time-line.html">Allen</a>
                                                                <span>Dept colleague</span>
                                                            </h4>
                                                            <a className="underline" title href="#">Follow</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></i> Invite Colleagues</h5>
                        </div>
                        <div className="invitation-meta">
                            <p>
                                Enter an email address to invite a colleague or co-author to join you on socimo. They will receive an email and, in some cases, up to two reminders.
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
                                <svg className="feather feather-message-square" strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="currentColor" fill="none" viewBox="0 0 24 24" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i> Send Message</h5>
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
            <div className="post-new-popup">
                <div className="popup" style={{ width: 800 }}>
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></i>Create New Post</h5>
                        </div>
                        <div className="post-new">
                            <div className="post-newmeta">
                                <ul className="post-categoroes">
                                    <li><i className="icofont-camera" /> Photo / Video</li>
                                    <li><i className="icofont-google-map" /> Post Location</li>
                                    <li><i className="icofont-file-gif" /> Post Gif</li>
                                    <li><i className="icofont-ui-tag" /> Tag to Friend</li>
                                    <li><i className="icofont-users" /> Share in Group</li>
                                    <li><i className="icofont-link" /> Share Link</li>
                                    <li><i className="icofont-video-cam" /> Go Live</li>
                                    <li><i className="icofont-sale-discount" /> Post Online Course</li>
                                    <li><i className="icofont-read-book" /> Post A Book</li>
                                    <li><i className="icofont-globe" /> Post an Ad</li>
                                </ul>
                                <form method="post" className="dropzone" action="/upload-target">
                                    <div className="fallback">
                                        <input name="file" type="file" multiple />
                                    </div>
                                </form>
                            </div>
                            <form method="post" className="c-form">
                                <textarea id="emojionearea1" placeholder="What's On Your Mind?" defaultValue={""} />
                                <div className="activity-post">
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
                                            <p className="select-box__input-text"><i className="icofont-user" /> Specific Friend</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={3} defaultValue={4} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-star" /> Only Friends</p>
                                        </div>
                                        <div className="select-box__value"><input className="select-box__input" type="radio" id={4} defaultValue={5} name="Ben" defaultChecked="checked" />
                                            <p className="select-box__input-text"><i className="icofont-users-alt-3" /> Joined Groups</p>
                                        </div>
                                        <img className="select-box__icon" src="images/arrow-down.svg" alt="Arrow Icon" aria-hidden="true" />
                                    </div>
                                    <ul className="select-box__list">
                                        <li><label className="select-box__option" htmlFor={0}><i className="icofont-globe-alt" /> Public</label></li>
                                        <li><label className="select-box__option" htmlFor={1}><i className="icofont-lock" /> Private</label></li>
                                        <li><label className="select-box__option" htmlFor={2}><i className="icofont-user" /> Specific Friend</label></li>
                                        <li><label className="select-box__option" htmlFor={3}><i className="icofont-star" /> Only Friends</label></li>
                                        <li><label className="select-box__option" htmlFor={4}><i className="icofont-users-alt-3" /> Joined Groups</label></li>
                                    </ul>
                                </div>
                                <input className="schedule-btn" type="text" id="datetimepicker" readOnly />
                                <input type="text" placeholder="https://www.youtube.com/watch?v=vgvsuiFlA-Y&t=56s" />
                                <button type="submit" className="main-btn">Publish</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>{/* New post popup */}
            <div className="new-question-popup">
                <div className="popup">
                    <span className="popup-closed"><i className="icofont-close" /></span>
                    <div className="popup-meta">
                        <div className="popup-head">
                            <h5><i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-help-circle"><circle cx={12} cy={12} r={10} /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1={12} y1={17} x2="12.01" y2={17} /></svg></i> Ask Question</h5>
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
            <div className="share-wraper">
                <div className="share-options">
                    <span className="close-btn"><i className="icofont-close-circled" /></span>
                    <h5><i>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1={12} y1={2} x2={12} y2={15} /></svg></i>Share To!</h5>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg></i>
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
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="you">
                                <div className="chat-thumb"><img src="images/resources/chatlist2.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
                                        <i><img src="images/d-tick.png" alt /></i>
                                    </span>
                                </div>
                            </li>
                            <li className="me">
                                <div className="chat-thumb"><img src="images/resources/chatlist1.jpg" alt /></div>
                                <div className="notification-event">
                                    <span className="chat-message-item">
                                        Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks
                                    </span>
                                    <span className="notification-date">
                                        <time dateTime="2004-07-24T18:18" className="entry-date updated">Yesterday at 8:10pm</time>
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
                                    <div className="pop-image">
                                        <div className="pop-item">
                                            <div className="action-block">
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2="7.01" y2={7} /></svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx={12} cy={10} r={3} /></svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-down"><line x1={12} y1={5} x2={12} y2={19} /><polyline points="19 12 12 19 5 12" /></svg>
                                                </a>
                                                <a className="action-button">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                                                </a>
                                            </div>
                                            <figure><img src="images/resources/blog-detail.jpg" alt /></figure>
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
                                                <a title href="#" className="share-to"><i className="icofont-share-alt" /> Share</a>
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
                                                    <div className="popover_wrapper">
                                                        <a className="popover_title" href="#" title><img alt src="images/smiles/heart.png" /></a>
                                                        <div className="popover_content">
                                                            <span><img alt src="images/smiles/heart.png" /> Love</span>
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
                                                            <span><img alt src="images/smiles/smile.png" /> Happy</span>
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
                                                            <span><img alt src="images/smiles/weep.png" /> Dislike</span>
                                                            <ul className="namelist">
                                                                <li>Danial Carbal</li>
                                                                <li>Amara Sin</li>
                                                                <li>Sarah K.</li>
                                                                <li><span>15+ more</span></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <p>10+</p>
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
                                                <h4><a href="#" title>Danile Walker</a></h4>
                                                <span>2 hours ago</span>
                                            </div>
                                            <a href="#" title="Follow" data-ripple>Follow</a>
                                        </div>
                                        <div className="we-video-info">
                                            <ul>
                                                <li>
                                                    <span title="Comments" className="liked">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg></i>
                                                        <ins>52</ins>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span title="Comments" className="comment">
                                                        <i>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></i>
                                                        <ins>52</ins>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <a title="Share" href="#" className>
                                                            <i>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg></i>
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
                                                <span><strong>You</strong>, <b>Sarah</b> and <a title href="#">24+ more</a> liked</span>
                                            </div>
                                        </div>
                                        <div className="new-comment" style={{ display: 'block' }}>
                                            <form method="post">
                                                <input type="text" placeholder="write comment" />
                                                <button type="submit"><i className="icofont-paper-plane" /></button>
                                            </form>
                                            <div className="comments-area">
                                                <ul>
                                                    <li>
                                                        <figure><img alt src="images/resources/user1.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Jack Carter</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                            </p>
                                                            <span>you can view the more detail via link</span>
                                                            <a title href="#">https://www.youtube.com/watch?v=HpZgwHU1GcI</a>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/user2.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Ching xang</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                            </p>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/user3.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Danial Comb</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
                                                            </p>
                                                        </div>
                                                        <a title="Like" href="#"><i className="icofont-heart" /></a>
                                                        <a title="Reply" href="#" className="reply-coment"><i className="icofont-reply" /></a>
                                                    </li>
                                                    <li>
                                                        <figure><img alt src="images/resources/user4.jpg" /></figure>
                                                        <div className="commenter">
                                                            <h5><a title href="#">Jack Carter</a></h5>
                                                            <span>2 hours ago</span>
                                                            <p>
                                                                i think that some how, we learn who we really are and then live with that decision, great post!
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
                    </div>
                </div>
            </div>{/* The Scrolling Modal image with comment */}
        </Fragment>
    )
}

