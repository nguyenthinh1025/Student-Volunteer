import React from 'react'

export default function ResponsiveHeader () {
    return (

        <div className="responsive-header">
            <div className="logo res"><img src="images/logo.png" alt /><span>Socimo</span></div>
            <div className="user-avatar mobile">
                <a href="profile.html" title="View Profile"><img alt src="images/resources/user.jpg" /></a>
                <div className="name">
                    <h4>Danial Cardos</h4>
                    <span>Ontario, Canada</span>
                </div>
            </div>
            <div className="right-compact">
                <div className="sidemenu">
                    <i>
                        <svg id="side-menu2" xmlns="http://www.w3.org/2000/svg" width={26} height={26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
                            <line x1={3} y1={12} x2={21} y2={12} />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <line x1={3} y1={18} x2={21} y2={18} />
                        </svg></i>
                </div>
                <div className="res-search">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
                            <circle cx={11} cy={11} r={8} />
                            <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg></span>
                </div>
            </div>
            <div className="restop-search">
                <span className="hide-search"><i className="icofont-close-circled" /></span>
                <form method="post">
                    <input type="text" placeholder="Search..." />
                </form>
            </div>
        </div>
    )
}
