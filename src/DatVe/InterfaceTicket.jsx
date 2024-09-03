import React from "react";
import { ListLocation } from "./ListLocation";
import { DanhSachChon } from "./DanhSachChon";
import cn from "classnames";
import { useSelector } from "react-redux";

export const InterfaceTicket = () => {
  const { user } = useSelector((state) => state.btDatVeReducer);
  return (
    <div
      className={cn("bg-cover  bg-fixed", {
        "h-[100vh]": user.length < 15,
      })}
      style={{ backgroundImage: `url('./img/bgmovie.jpg')` }}
    >
      <div className="backdrop-sepia-0 bg-black/60  h-full ">
        <p className="text-[50px] font-bold text-center mb-[30px] text-yellow-500">
          Đặt vé xem phim
        </p>
        <div className="flex justify-evenly">
          <div>
            <ListLocation />
          </div>
          <div className="w-[30%]">
            <DanhSachChon />
          </div>
        </div>
      </div>
    </div>
  );
};
