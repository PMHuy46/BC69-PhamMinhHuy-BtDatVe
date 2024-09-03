import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { btDatVeActions } from "../store/btDatVe/slice";

export const DanhSachChon = () => {
  const { user } = useSelector((state) => state.btDatVeReducer);
  const dispatch = useDispatch()
  console.log(user);
  return (
    <div>
      <h2 className="mb-[20px] font-bold text-[30px] text-white text-center">
        DANH SÁCH GHẾ BẠN CHỌN
      </h2>

      <div className="flex  items-center mb-3">
        <p className="p-30px bg-yellow-500 w-[30px] h-[30px] mr-3 rounded-md"></p>
        <p className="font-bold text-[20px] text-white">Ghế đã đặt</p>
      </div>
      <div className="flex  items-center mb-3">
        <p className="p-30px bg-green-600 w-[30px] h-[30px] mr-3  rounded-md"></p>
        <p className="font-bold text-[20px] text-white">Ghế đang chọn</p>
      </div>
      <div className="flex  items-center mb-3">
        <p className="p-30px bg-white w-[30px] h-[30px] mr-3 rounded-md"></p>
        <p className="font-bold text-[20px] text-white">Ghế chưa đặt</p>
      </div>

      <table className=" w-full">
        <thead>
          <tr className="text-white text-[20px] font-bold">
            <th className="border-2 border-white ">Số ghế</th>
            <th className="border-2 border-white ">Giá tiền</th>
            <th className="border-2 border-white ">Hủy</th>
          </tr>
        </thead>
        <tbody>
          {user.length > 0 ? (
            user.map((item, index) => {
              return (
                <tr key={index} className="text-white text-[25px] font-extrabold ">
                  <td className="border-2 border-white px-3 h-[30px] text-yellow-400">{item.soGhe}</td>
                  <td className="border-2 border-white px-3 text-yellow-400">{item.gia}</td>
                  <td className="border-2 border-white text-red px-3 text-red-700 " style={{cursor:'pointer'}} onClick={()=>{
                    dispatch(btDatVeActions.deleteChoose(item.soGhe))
                  }}>X</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="border-2 border-white h-[30px]"></td>
              <td className="border-2 border-white "></td>
              <td className="border-2 border-white "></td>
            </tr>
          )}
        </tbody>
      </table>
      <button className="bg-red-700 text-yellow-500 px-[15px] py-[10px] mt-3 text-[25px] font-bold rounded-md border-2 border-black" onClick={()=>{
        dispatch(btDatVeActions.acceptChoose(''))
      }}>Đặt vé</button>
    </div>
  );
};
