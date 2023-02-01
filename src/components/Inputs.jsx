import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import "./inputs.scss";
import MyModal from "./MyModal";
import { actualPrice } from "../logic/calculations";
import Num2persian from "num2persian";

export default function Inputs() {
  const [messageApi, contextHolder] = message.useMessage();
  const [err, setErr] = useState(null);
  const [modalState, setModalState] = useState(false);
  const [actualP, setActualP] = useState(null);
  const [fakeP, setFakeP] = useState(null);

  const onFinish = (values) => {
    let Ap = actualPrice(
      parseFloat(values["gold-weight"]), 
      parseFloat(values["gold-price"]), 
      parseFloat(values["gold-emolument"]), 
      parseFloat(values["gold-benefit"])
    );
    setActualP(Ap);
    setErr(null);
    setModalState(true);
  };
  
  const onFinishFailed = (errorInfo) => {
    messageApi.open({
      type: 'error',
      content: 'لطفا خطا ها را برطرف کنید',
      duration: 2
    });
    setErr(errorInfo);
    setModalState(false);
  };

  const onCloseModal = () => {
    setModalState(false);
  }

  const onWeightBlur = (e) => {
    let w = e.target.value;
    if(parseFloat(w) && (!(parseFloat(w) > 1_000_000) && !(parseFloat(w) < 0))) {
      messageApi.open({
        type: 'success',
        content: Num2persian(parseFloat(e.target.value)) + " گرم",
        duration: 2
      });
    }
  }

  const onPriceBlur = (e) => {
    let p = e.target.value;
    if(parseFloat(p) && (!(parseFloat(p) > 10_000_000) && !(parseFloat(p) < 0))) {
      messageApi.open({
        type: 'success',
        content: Num2persian(parseFloat(e.target.value)) + " تومن",
        duration: 2
      });
    }
  }

  const onEmolumentBlur = (e) => {
    let em = e.target.value;
    if(parseFloat(em) && (!(parseFloat(em) > 100) && !(parseFloat(em) < 0))) {
      messageApi.open({
        type: 'success',
        content: Num2persian(parseFloat(e.target.value)) + " درصد",
        duration: 2
      });
    }
  }

  const onBenefitBlur = e => {
    let b = e.target.value;
    if(parseFloat(b) && (!(parseFloat(b) > 100) && !(parseFloat(b) < 0))) {
      messageApi.open({
        type: 'success',
        content: Num2persian(parseFloat(e.target.value)) + " درصد",
        duration: 2
      });
    }
  }

  return (
    <div>
      {contextHolder}
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if(!value) return Promise.resolve();
                if(!parseFloat(value)) {
                  return Promise.reject(new Error("لطفا فقط عدد وارد کنید"))
                }
                if(value > 1_000_000) {
                  return Promise.reject(new Error("ینی انقدر میخوای طلا بخری تو؟!"));
                }
                if(value < 0) {
                  return Promise.reject(new Error("عدد منفی زدی، ینی میخوای بفروشی؟:)"));
                }
                return Promise.resolve();
              }
            })
          ]}
        >
          <Input placeholder="به گرم (مثلا: ۱۰)" onBlur={onWeightBlur}/>
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if(!value) return Promise.resolve();
                if(!parseFloat(value)) {
                  return Promise.reject(new Error("لطفا فقط عدد وارد کنید"))
                }
                if(value > 10_000_000) {
                  return Promise.reject(new Error("هنوز تورم انقدر نشده، ایشالا دولت بعدی!"));
                }
                if(value < 0) {
                  return Promise.reject(new Error("عدد منفی زدی!"));
                }
                return Promise.resolve();
              }
            })
          ]}
        >
          <Input placeholder="به تومن" onBlur={onPriceBlur}/>
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if(!value) return Promise.resolve();
                if(!parseFloat(value)) {
                  return Promise.reject(new Error("لطفا فقط عدد وارد کنید"))
                }
                if(value > 100) {
                  return Promise.reject(new Error("درصد بیشتر از ۱۰۰ زدی:)"));
                }
                if(value < 0) {
                  return Promise.reject(new Error("عدد منفی زدی! یچیزیم میخواد بده بهت؟"));
                }
                return Promise.resolve();
              }
            })
          ]}
        >
          <Input placeholder="به درصد (مثلا: ۱۰)" onBlur={onEmolumentBlur}/>
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
            ({ getFieldValue }) => ({
              validator(_, value) {
                if(!value) return Promise.resolve();
                if(!parseFloat(value)) {
                  return Promise.reject(new Error("لطفا فقط عدد وارد کنید"))
                }
                if(value > 100) {
                  return Promise.reject(new Error("درصد بیشتر از ۱۰۰ زدی:)"));
                }
                if(value < 0) {
                  return Promise.reject(new Error("عدد منفی زدی!"));
                }
                return Promise.resolve();
              }
            })
          ]}
        >
          <Input placeholder="به درصد (مثلا: ۷)" onBlur={onBenefitBlur}/>
        </Form.Item>
          <br />
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
        <MyModal
          actualPrice={actualP}
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

