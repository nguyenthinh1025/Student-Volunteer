import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQuaTroChoi extends Component {
    render () {
        let { banChon, soBanThang, tongSoBanChoi } = this.props.baiTapGameXucXacReducer;
        return (
            <div className='text-center display-4'>
                <div>Bạn Chọn : <span className='text-danger'>{banChon ? 'TÀI' : 'Xĩu'}</span></div>
                <div>Số Bàn Thắng : <span className='text-success'>{soBanThang}</span></div>
                <div>Tổng Số Bàn Chơi : <span className='text-warning'>{tongSoBanChoi}</span></div>
                <button className='btn btn-success'>
                    <div className='p-2' style={{ fontSize: 25 }} onClick={() => {
                        const action = {
                            type: 'PLAY_GAME',

                        }
                        this.props.dispatch(action);
                    }}>Play Game</div>
                </button>
            </div>
        )
    }
}


const mapStateToProps = (rootReducer) => {

    return {

        baiTapGameXucXacReducer: rootReducer.baiTapGameXucXacReducer
    }
}

export default connect(mapStateToProps)(KetQuaTroChoi);
