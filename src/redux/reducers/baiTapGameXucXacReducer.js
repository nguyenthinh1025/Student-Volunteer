const stateDefault = {
    banChon: true,
    soBanThang: 0,
    tongSoBanChoi: 0,
    mangXucXac: [
        { soDiem: 1, img: './images/gameXucXac/1.png' },
        { soDiem: 2, img: './images/gameXucXac/2.png' },
        { soDiem: 3, img: './images/gameXucXac/3.png' },
    ]
}


export const baiTapGameXucXacReducer = (state = stateDefault, action) => {


    switch (action.type) {

        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state }
        }


        case 'PLAY_GAME': {

            let xucXacNgauNhien = [];

            for (let i = 1;i <= 3;i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;

                let xxnn = { soDiem: soNgauNhien, img: `./images/gameXucXac/${soNgauNhien}.png` };
                xucXacNgauNhien.push(xxnn);
            }

            state.mangXucXac = xucXacNgauNhien;


            let tongDiem = state.mangXucXac.reduce((diem, xx, index) => {
                return diem += xx.soDiem;
            }, 0);


            if ((tongDiem <= 11 && state.banChon === false) || (tongDiem > 11 && state.banChon === true)) {

                state.soBanThang += 1;
            }


            state.tongSoBanChoi += 1;

            return { ...state }
        }
        default: return state;
    }
}