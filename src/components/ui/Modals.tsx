import React from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  childrenModal: React.ReactNode;
  childrenButton: React.ReactNode;
  modalKey: string;
}

const Modals = ({ childrenModal, childrenButton, modalKey }: Props) => {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <>
      <button onClick={openModal}>
        {childrenButton}
      </button>
      <dialog id={modalKey} className="modal" ref={modalRef}>
        <div className="modal-box w-11/12 max-w-6xl relative">
          <div className="flex flex-col items-center">
            {childrenModal}
            <div className="modal-action self-end absolute top-0 right-5">
              <button className="text-red-800 border-red-800 rounded-full border-2 p-1 " onClick={() => modalRef.current?.close()}>
                <IoCloseOutline />
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modals;
