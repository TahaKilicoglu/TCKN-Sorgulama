import React from "react";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { closeModal } from "../store/feature/modal/modal-slide";
import { store } from "../store";
const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div
      className={`fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%]`}
    >
      <div
        className={
          "bg-[#FFD202] max-w-96 w-80 max-h-56 h-48 md:w-[30rem] md:h-[20rem] p-2 rounded-lg shadow-lg text-center flex justify-center items-center"
        }
      >
        <div>
          {store.getState().modal.data.includes("true") ? (
            <h1 style={{ color: "green" }}>Sorgulama Başarılı</h1>
          ) : (
            <h1 style={{ color: "red" }}>Sorgulama Başarısız</h1>
          )}
        </div>

        <button
          className={"absolute top-3 right-3 text-sm md:text-base"}
          onClick={() => dispatch(closeModal())}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default Modal;
