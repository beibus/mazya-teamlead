import React, { useEffect, useState } from "react";
import { Button, Form, Input, Upload, } from "antd";
import { createLogin, setModalState, editProducts, setEditProduct } from '../store/actions';
import { PlusOutlined,MailOutlined,LockOutlined   } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import Item from "antd/lib/list/Item";
import salad from '../../Images/salad.png'
import 'antd/dist/antd.css'


const MidContainer = () => {


  const dispatch = useDispatch();
  const editProduct = useSelector((store) => store.editProduct)
  const isModalOpen = useSelector((store) => store.isModalOpen)
  const isModalCreate = useSelector((store) => store.isModalCreate)
  const [form] = Form.useForm()


  useEffect(() => {
    if (!editProduct) return
    form.setFieldsValue(editProduct)

  }, [form, editProduct])




  const showModal = () => {
    dispatch(setModalState(true));

  };

  const closeModal = () => {
    dispatch(setModalState(false));
    
    form.resetFields()
  }



  const onFinish = (values) => {
      dispatch(createLogin(values))
    dispatch(setModalState(false))

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


 
  










  const title = 'Зарегистрироваться'
  const modalTitle = 'Регистрация'

  return (
    <div className='Mid-container'>
        <div className='Mid-content'>
          <div className='Content-title'>
            <h2>Удобно и Вкусно</h2>
          </div>
          <div className='Content-description'>
            <h3>
              Мы являемся каталогом <span className='Green'>Chtopoest</span> ресторанов/кафе/баров/кофеен Бишкека.
              Уникальность продукта заключается в том, что каталог позволяет найти все
              заведения города на одной платформе
            </h3>
          </div>
        </div>
        <div className='Mid-image'><img src={salad} alt="" /></div>



        <Button type="primary" onClick={showModal}>
        Создать Аккаунт
        </Button>
        <Modal
        footer={null} title={modalTitle} open={isModalOpen} onCancel={closeModal}>
        <Form
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          

        > 
          <Form.Item
            // label="Адрес электронной почты"
            name="email"
            

            rules={[
              {
                required: true,
                message: "Пожалуйста введите электронную почту!",
              },
            ]}
          >
            <Input
            prefix={<MailOutlined className='input-icon'/> }
            type="email"
            placeholder="Почта"/>
          </Form.Item>

          <Form.Item
            // label="Пароль"

            name="password"

            rules={[
              {
                required: true,
                message: "Пожалуйста введите пароль!",
              },
            ]}
          >
            <Input 
            prefix={<LockOutlined className='input-icon'/>}
             type="password"
             placeholder="Пароль"/>
          </Form.Item>
          <Form.Item
            // label="Потвердить пароль"

            name="confirm_password"

            rules={[
              {
                required: true,
                message: "Пожалуйста введите пароль для потверждения!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
    
                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                },
              }),
            ]}
          >
            <Input 
            prefix={<LockOutlined className='input-icon'/>}
            type="password"
            placeholder="Повторить пароль"/>
          </Form.Item>

          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {title}
            </Button>
          </Form.Item>
        </Form>
      </Modal>




      </div>
  )
}

export default MidContainer