import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button_custom from '../../components/Button';
import Input_custom from '../../components/Input';
import LeftAnimated from './../../components/animation/SetLeftAnimated';

const PresentForm = () => {

  const navigate = useNavigate();

  const [entrance, setEntrance] = useState('');
  const [left, setLeft] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalCode, setNationalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleFormSubmit = () => {
    const data = {
      entrance: entrance,
      left: left,
      name: name,
      lastName: lastName,
      nationalCode: nationalCode,
      phoneNumber: phoneNumber
    }

    navigate('/secondPrPage', { state: { data: data } });
  }

  return (
    <LeftAnimated motion_div_className={'bg-background_color w-full h-dvh flex justify-center overflow-hidden pt-24'}>
      <div className='container w-full h-full p-2 overflow-hidden md:w-[50%] lg:w-[40%] xl:w-[35%]' dir='rtl'>

        <div className='navbar createfrom flex items-center' dir='ltr'>

          <Link className='fixed left-6 top-6 z-50'
            to={'/'}
          >

            <md-filled-icon-button id='backButton_Custom'>
              <md-icon>keyboard_arrow_left</md-icon>
            </md-filled-icon-button>

          </Link>

          <Navbar

            titr={' پذیرش 1 '}
          />
        </div>

        <div className='body flex flex-col mt-6 px-2'>

          <Input_custom
            placeholder={' تاریخ ورود '}
            input_label={' تاریخ ورود '}
            value={entrance}
            onChange={(event) => setEntrance(event.target.value)}
          />

          <Input_custom
            placeholder={' تاریخ خروج '}
            input_label={' تاریخ خروج '}
            value={left}
            onChange={(event) => setLeft(event.target.value)}
          />

          <Input_custom
            placeholder={' نام '}
            input_label={' نام '}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Input_custom
            placeholder={' نام خانوادگی '}
            input_label={' نام خانوادگی '}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />

          <Input_custom
            placeholder={' کد ملی '}
            input_label={' کد ملی '}
            type={'number'}
            value={nationalCode}
            onChange={(event) => setNationalCode(event.target.value)}
          />

          <Input_custom
            placeholder={' شماره تماس '}
            input_label={' شماره تماس '}
            type={'number'}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

        </div>

        <div className='flex items-center justify-center fixed bottom-10 left-0 right-0'>

          <Button_custom
            button_text={' تایید '}
            onClick={handleFormSubmit}
          />

        </div>

      </div>
    </LeftAnimated>
  )
}

export default PresentForm