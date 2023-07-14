import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {
    render () {
        console.log(this.props);
        let { soDiem, img } = this.props.ListXucXac;
        return (
            <div className='row'>
                <div className='col-4 text-right'>
                    <button className='btn bg-danger'>
                        <div className='display-4 text-white p-3' style={{ borderRadius: '10px', border: 'none' }} onClick={() => {
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: true,
                            };
                            this.props.dispatch(action);
                        }}>Tài</div>
                    </button>
                </div>
                <div className='col-4 text-center'>
                    {this.props.ListXucXac.map((sp, index) => {
                        return <img key={index} src={sp.img} width={50} height={50}></img>

                    })}
                </div>
                <div className='col-4 text-left'>
                    <button className='btn bg-danger '>
                        <div className='display-4 text-white p-3' style={{ borderRadius: '10px', border: 'none' }} onClick={() => {
                            const action = {
                                type: 'DAT_CUOC',
                                banChon: false,
                            };
                            this.props.dispatch(action);
                        }}> Xĩu</div>
                    </button>
                </div >
            </div >
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        ListXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
    }
}

export default connect(mapStateToProps)(XucXac);
