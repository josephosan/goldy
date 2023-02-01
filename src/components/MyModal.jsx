import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import "./myModal.scss";
import Num2persian from "num2persian";


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
            <p className="mt-2"><span>{ parseInt(actualPrice) }</span> تومان</p>
            <p>{ Num2persian(parseInt(actualPrice)) }  تومن</p>
          </div>
          

          <hr />


          <div className="alert alert-warning">
            <h5>قیمتی که فروشنده ممکنه به اشتباه بگه:</h5>
            <p className="mt-2"><span>{ parseInt(fakePrice) }</span> تومان</p>
            <p>{ Num2persian(parseInt(fakePrice)) }  تومن</p>
          </div>
        </div>
      </Modal>
    </>
  );
}