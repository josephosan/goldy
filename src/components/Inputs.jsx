import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import "./inputs.scss";
import MyModal from "./MyModal";

export default function Inputs() {
  const [err, setErr] = useState(null);
  const [modalState, setModalState] = useState(false);

  const onFinish = (values) => {
    setErr(null);
    console.log(values);
    setModalState(true);
  };
  
  const onFinishFailed = (errorInfo) => {
    setErr(errorInfo);
    setModalState(false);
  };

  const onCloseModal = () => {
    setModalState(false);
  }

  return (
    <div>
      <Form
        className="form"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="وزن طلا"
          name="gold-weight"
          rules={[
            {
              required: true,
              message: 'فیلد وزن اجباریست',
            },
          ]}
        >
          <Input placeholder="(مثلا: ۵۰)"/>
        </Form.Item>
          <br />
        <Form.Item
          label="قیمت طلا"
          name="gold-price"
          rules={[
            {
              required: true,
              message: 'فیلد قیمت اجباریست',
            },
          ]}
        >
          <Input placeholder="به تومن"/>
        </Form.Item>
      
          <br />
        <Form.Item
          label="اجرت طلا"
          name="gold-emolument"
          rules={[
            {
              required: true,
              message: 'فیلد اجرت اجباریست!',
            },
          ]}
        >
          <Input placeholder="به درصد (مثلا: ۱۰)"/>
        </Form.Item>
          <br />
        <Form.Item
          label="سود طلا"
          name="gold-benefit"
          rules={[
            {
              required: true,
              message: 'فیلد سود اجباریست',
            },
          ]}
        >
          <Input placeholder="به درصد (مثلا: ۷)"/>
        </Form.Item>
          <br />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <MyModal
          actualPrice={"100"}
          fakePrice={"100"}
          modalState={modalState}
          onCloseModal={onCloseModal} />
      
        <Button
          className="d-flex jusitfy-content-center"
          type="primary"
          htmlType="submit" >
        محاسبه
        </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

