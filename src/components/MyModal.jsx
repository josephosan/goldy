import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "./myModal.scss";

export default function MyModal({ actualPrice, fakePrice, modalState, onCloseModal }) {
  const [modal, setmodal] = useState(false);

  useEffect(() => {
    setmodal(modalState);
  }, [modalState])


  const handleClose = () => {
    setmodal(false);
    onCloseModal();
  }


  return (
    <>
      <Modal
        className="myModal"
        footer={null}
        closable={true}
        okText="باشه"
        title="قیمت نهایی"
        centered
        open={modal}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <div className="m-3">
          <div className="alert alert-success">
            <h5>قیمت درست و دقیق:</h5>
            <p className="mt-2"><span>{ actualPrice }</span> تومان</p>
          </div>
          

          <hr />


          <div className="alert alert-warning">
            <h5>قیمتی که فروشنده ممکنه به اشتباه بگه:</h5>
            <p className="mt-2"><span>{ fakePrice }</span> تومان</p>
          </div>
        </div>
      </Modal>
    </>
  );
}