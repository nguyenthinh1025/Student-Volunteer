import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import style from './BaiTapGameXucXac.module.css';
export default class BaiTapGameXucXac extends Component {
    render () {
        return (
            <div style={{ backgroundImage: 'url(./images/gameXucXac/bgGame.png)', width: '100vw', height: '100vh' }} className={`${style.fontGame}`}>
                <h3 className='text-center pt-5 pb-2'> Game Xúc Xắc</h3>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
