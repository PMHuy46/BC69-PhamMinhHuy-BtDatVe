import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { btDatVeActions } from "../store/btDatVe/slice";

export const Render = (props) => {
  const { hangGhe } = props;
  const { data } = useSelector((state) => state.btDatVeReducer);
  const dispatch = useDispatch();
  const index = data.findIndex((item) => item.hang == hangGhe);
  // const { user } = useSelector((state) => state.btDatVeReducer);
  return (
    <div className="flex gap-5 items-center h-[60px]">
      <p className="w-[55px] text-white text-center text-[20px] font-bold">
        {hangGhe}
      </p>

      {data[index].danhSachGhe.map((item, index) => {
        return (
          <div
            className={cn(
              "rounded-md border-4 border-yellow-400   w-[50px] h-[50px] text-center text-[30px] font-bold ",
              {
                "bg-yellow-400 text-yellow-400": item.daDat,
                "bg-green-600": item.check,
                'bg-white ':!item.check
              }
            )}
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispatch(
                btDatVeActions.chooseToCheck({
                  info: item,
                  hang: hangGhe,
                })
              );
            }}
            key={index}
          >
            {index + 1}
          </div>
        );
      })}
    </div>
  );
};
