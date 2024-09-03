import React from "react";
import { useSelector } from "react-redux";
import { btDatVeReducer } from "../store/btDatVe/slice";
import { Render } from "./Render";

export const ListLocation = () => {
  const { data } = useSelector((state) => state.btDatVeReducer);
  return (
    <div>
      <div className="w-full h-[50px] bg-yellow-400 text-[30px] text-center font-bold">
        Màn hình
      </div>
      <div className="flex gap-5 items-center h-[60px]">
        <p className="w-[55px] text-white text-center text-[20px] font-bold">
          {data[0].hang}
        </p>
        {data[0].danhSachGhe.map((item) => {
          return (
            <div className="w-[50px] h-[50px] text-center text-[30px] font-bold text-white" key={item.soGhe}>
              {item.soGhe}
            </div>
          );
        })}
      </div>

      {data.map((item) => {
        if (item.hang != "") {

          return (
            <div key={item.hang}>
              <Render hangGhe={item} />
            </div>
          );
        }
      })}
    </div>
  );
};
