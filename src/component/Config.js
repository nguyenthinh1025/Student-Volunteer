import React from 'react'
import { Fragment } from 'react'

export default function Config () {
    return (
        <Fragment>
            {localStorage.getItem('setError') === 'Đăng nhập thành công!' ?
                <div className='marquee'><span>{localStorage.getItem('setError')}</span></div>
                :
                <div></div>
            }
        </Fragment>
    )
}
