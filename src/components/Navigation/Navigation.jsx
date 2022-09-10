
import './Navigation.css'
import heart from '../../Images/heart.png'
import user from '../../Images/user.png'
import React, { useState, useEffect } from 'react'
import RestarauntCard from '../../components/RestarauntCard/RestarauntCard'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

import { authLogin, setModalStateAuth, } from '../store/actions';
import { PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import Item from "antd/lib/list/Item";


const Navigation = () => {


  

  const dispatch = useDispatch();
  
  
  const editProduct = useSelector((store) => store.editProduct)
  const isModalOpen = useSelector((store) => store.isModalOpen)
  const isModalCreate = useSelector((store) => store.isModalCreate)
  const [form] = Form.useForm()
  const [places, setPlaces] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const navigate=useNavigate()

  useEffect(() => {
    
    form.setFieldsValue(editProduct)

  }, [form, editProduct])

  useEffect(() => {
    fetchData()
  }, [])



  

  const showModal = () => {
    dispatch(setModalStateAuth(true));

  };

  const closeModal = () => {
    dispatch(setModalStateAuth(false));

    form.resetFields()
  }



  const onFinish = (values) => {
    dispatch(authLogin(values))
    dispatch(setModalStateAuth(false))

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const fetchData = async () => {

    setLoading(true)
    const url = "https://restaurantkg.herokuapp.com/category/"

    try {
      const response = await axios.get(url);

      if (response.data.errors) {
        setError(response.data.errors)
        setLoading(false)
        return
      }

      setPlaces(response.data.results)
      // setCatItem(response.data.results[0].restaurants)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
    }

  }
  console.log('places', places)
  // console.log('CatITEM',catItem)
  if (!places) return 'Loading...'




  const handleOptionClick = (e) => {
    const id = e.target.value
    navigate(`/category/${id}`)
    console.log(id)
  }








  const title = 'Зарегистрироваться'
  const modalTitle = 'Авторизация'











  return (
    <div className='Navigation'>
      <div className='Navigation-options'>
        <a className='Option' href='/'>Home</a>


        <select onChange={handleOptionClick} className='Option' name="select" id="selectPlace">
          <option value="" selected disabled hidden>Все заведения</option>
          {places.map(place => (

            <option value={place.id}>
              {/* <Link key={place.id}
              to={`/category/${place.id}`}>
              </Link> */}
              {place.name}
            </option>

          ))}

        </select>










        <a className='Option' href="#/promo">Акции</a>
        <a className='Option' href="#/selection">Подборки</a>
      </div>
      <div className='Navigation-icons'>

        <div className='Option-right'><img src={heart} alt="" /></div>






        <div onClick={showModal} className='Option-right'><img src={user} alt="" />

        </div>



        <Modal
          footer={null} title={modalTitle} open={isModalOpen} onCancel={closeModal}>
          <Form
            name="normal_login"
            className="login-form"
            
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Забыли пароль?
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Войти
              </Button>
              Или<a href="">Зарегистрироваться</a>
            </Form.Item>
          </Form>
        </Modal>



      </div>
    </div>
  )
}

export default Navigation