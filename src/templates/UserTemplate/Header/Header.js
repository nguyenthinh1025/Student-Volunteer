import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom'

export default function Header () {
    return (
        <header className>
            <div className="topbar stick">
                <NavLink to='/home' className="logo"><img src="images/logo.png" alt /><span>Socimo</span></NavLink>
                <div className="searches">
                    <form method="post">
                        <input type="text" placeholder="Search..." />
                        <button type="submit"><i className="icofont-search" /></button>
                        <span className="cancel-search"><i className="icofont-close" /></span>
                        <div className="recent-search">
                            <h4 className="recent-searches">Your's Recent Search</h4>
                            <ul className="so-history">
                                <li>
                                    <div className="searched-user">
                                        <figure><img src="images/resources/user1.jpg" alt /></figure>
                                        <span>Danial Carabal</span>
                                    </div>
                                    <span className="trash"><i className="icofont-close-circled" /></span>
                                </li>
                                <li>
                                    <div className="searched-user">
                                        <figure><img src="images/resources/user2.jpg" alt /></figure>
                                        <span>Maria K</span>
                                    </div>
                                    <span className="trash"><i className="icofont-close-circled" /></span>
                                </li>
                                <li>
                                    <div className="searched-user">
                                        <figure><img src="images/resources/user3.jpg" alt /></figure>
                                        <span>Fawad Khan</span>
                                    </div>
                                    <span className="trash"><i className="icofont-close-circled" /></span>
                                </li>
                                <li>
                                    <div className="searched-user">
                                        <figure><img src="images/resources/user4.jpg" alt /></figure>
                                        <span>Danial Sandos</span>
                                    </div>
                                    <span className="trash"><i className="icofont-close-circled" /></span>
                                </li>
                                <li>
                                    <div className="searched-user">
                                        <figure><img src="images/resources/user5.jpg" alt /></figure>
                                        <span>Jack Carter</span>
                                    </div>
                                    <span className="trash"><i className="icofont-close-circled" /></span>
                                </li>
                            </ul>
                        </div>
                    </form>
                </div>
                <ul className="web-elements">
                    <li>
                        <div className="user-dp">
                            <NavLink to="/profile" title>
                                <img alt src="images/resources/user.jpg" />
                                <div className="name">
                                    <h4>Danial Cardos</h4>
                                </div>
                            </NavLink>
                        </div>
                    </li>
                    <li className="go-live">
                        <a href="live-stream.html" title="Go Live" data-toggle="tooltip">
                            <i>
                                <svg fill="#f00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18px" height="18px">
                                    <path d="M 6.1015625 6.1015625 C 3.5675625 8.6345625 2 12.134 2 16 C 2 19.866 3.5675625 23.365437 6.1015625 25.898438 L 7.5195312 24.480469 C 5.3465312 22.307469 4 19.308 4 16 C 4 12.692 5.3465312 9.6925313 7.5195312 7.5195312 L 6.1015625 6.1015625 z M 25.898438 6.1015625 L 24.480469 7.5195312 C 26.653469 9.6925312 28 12.692 28 16 C 28 19.308 26.653469 22.307469 24.480469 24.480469 L 25.898438 25.898438 C 28.432437 23.365437 30 19.866 30 16 C 30 12.134 28.432437 8.6345625 25.898438 6.1015625 z M 9.6367188 9.6367188 C 8.0077188 11.265719 7 13.515 7 16 C 7 18.485 8.0077187 20.734281 9.6367188 22.363281 L 11.052734 20.947266 C 9.7847344 19.680266 9 17.93 9 16 C 9 14.07 9.7847344 12.319734 11.052734 11.052734 L 9.6367188 9.6367188 z M 22.363281 9.6367188 L 20.947266 11.052734 C 22.215266 12.319734 23 14.07 23 16 C 23 17.93 22.215266 19.680266 20.947266 20.947266 L 22.363281 22.363281 C 23.992281 20.734281 25 18.485 25 16 C 25 13.515 23.992281 11.265719 22.363281 9.6367188 z M 16 12 A 4 4 0 0 0 16 20 A 4 4 0 0 0 16 12 z" />
                                </svg></i>
                        </a>
                    </li>
                    <li>
                        <a href="index.html" title="Home" data-toggle="tooltip">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg></i>
                        </a>
                    </li>
                    <li>
                        <a className="mesg-notif" href="#" title="Messages" data-toggle="tooltip">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg></i>
                        </a>
                        <span />
                    </li>
                    <li>
                        <a className="mesg-notif" href="#" title="Notifications" data-toggle="tooltip">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                                </svg></i>
                        </a>
                        <span />
                    </li>
                    <li>
                        <a className="create" href="#" title="Add New" data-toggle="tooltip">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                    <line x1={12} y1={5} x2={12} y2={19} />
                                    <line x1={5} y1={12} x2={19} y2={12} />
                                </svg></i>
                        </a>
                    </li>
                    <li className='test'>
                        <a href="#" className="create">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                                    <rect x={3} y={3} width={7} height={7} />
                                    <rect x={14} y={3} width={7} height={7} />
                                    <rect x={14} y={14} width={7} height={7} />
                                    <rect x={3} y={14} width={7} height={7} />
                                </svg>
                            </i>
                        </a>
                        <ul className="dropdown">
                            <li><a href="profile.html" title><i className="icofont-user-alt-3" /> Your Profile</a></li>
                            <li><a href="add-new-course.html" title><i className="icofont-plus" /> New Course</a></li>
                            <li><a className="invite-new" href="#" title><i className="icofont-brand-slideshare" /> Invite
                                Collegue</a></li>
                            <li><a href="pay-out.html" title><i className="icofont-price" /> Payout</a></li>
                            <li><a href="price-plan.html" title><i className="icofont-flash" /> Upgrade</a></li>
                            <li><a href="help-faq.html" title><i className="icofont-question-circle" /> Help</a></li>
                            <li><a href="settings.html" title><i className="icofont-gear" /> Setting</a></li>
                            <li><a href="privacy-n-policy.html" title><i className="icofont-notepad" /> Privacy</a>
                            </li>
                            <li><a className="dark-mod" href="#" title><i className="icofont-moon" /> Dark Mode</a></li>
                            <li className="logout"><NavLink to="/" title><i className="icofont-power" /> Logout</NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}
