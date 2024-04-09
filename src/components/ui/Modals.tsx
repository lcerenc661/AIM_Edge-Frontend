import React from "react";

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
        <div className="modal-box w-11/12 max-w-6xl">
          <div className="flex flex-col items-center">
            {childrenModal}
            <div className="modal-action self-end">
              <button className="btn" onClick={() => modalRef.current?.close()}>
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modals;
