import { createSlice } from "@reduxjs/toolkit";
import data from '../../DatVe/danhSachGhe.json'

const initialState = {
    data: data,
    user: [],
}

export const { reducer: btDatVeReducer, actions: btDatVeActions } = createSlice({
    name: 'btDatVe',
    initialState,
    reducers: {
        chooseToCheck: (state, { payload: { info, hang } }) => {
            let index = state.user.findIndex(item => item.soGhe === info.soGhe)
            let check = state.data.findIndex(item2 => item2.hang == hang)
            let check2 = state.data[check].danhSachGhe.findIndex(item3 => item3.soGhe == info.soGhe)
            state.data[check].danhSachGhe[check2] = { ...info, check: true }
            if (index === -1) {
                state.user.push({ ...info, hang: hang })
            }
        },
        deleteChoose: (state, { payload }) => {
            state.user = state.user.filter(item => item.soGhe != payload.soGhe)
            let check = state.data.findIndex(item2 => item2.hang == payload.hang)
            let check2 = state.data[check].danhSachGhe.findIndex(item3 => item3.soGhe == payload.soGhe)
            state.data[check].danhSachGhe[check2] = { ...this, check: '' }
        },
        acceptChoose: (state, actions) => {
            state.user.forEach(item => {
                let check = state.data.findIndex(item2 => item2.hang == item.hang)
                let check2 = state.data[check].danhSachGhe.findIndex(item3 => item3.soGhe == item.soGhe)
                state.data[check].danhSachGhe[check2] = { ...state.data[check].danhSachGhe[check2], daDat: true }
            })
            state.user = []
        }

    }
})