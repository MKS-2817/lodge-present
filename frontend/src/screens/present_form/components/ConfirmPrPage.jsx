import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Input_custom from '../../../components/Input';
import Button_custom from '../../../components/Button';
import LeftAnimated from '../../../components/animation/SetLeftAnimated';
import Navbar from '../../../components/Navbar';
import { AppContext } from './../../../contexts/AppContext';
import axios from 'axios';
import { apiURLs } from '../../../services/apiURL';

const ConfirmPrPage = () => {

  const { setSaveFiled } = useContext(AppContext);
  const location = useLocation();
  const { data } = location.state || {};
  const navigate = useNavigate();

  const [entrance, setEntrance] = useState('');
  const [left, setLeft] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationalCode, setNationalCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [liveCity, setLiveCity] = useState('');
  const [job, setJob] = useState('');
  const [education, setEducation] = useState('');
  const [favorite, setFavorite] = useState('');
  const [reservationRoom, setReservationRoom] = useState('');
  const [birthday, setBirthday] = useState('');


  const handleFormSubmit = async () => {
    const newData = {
      entrance: entrance,
      left: left,
      name: name,
      lastName: lastName,
      nationalCode: nationalCode,
      birthday: birthday,
      phoneNumber: phoneNumber,
      liveCity: liveCity,
      job: job,
      education: education,
      favorite: favorite,
      reservationRoom: reservationRoom
    };

    try {
      const headres = {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '1',
      }
      const response = await axios.post(
        `${apiURLs.serverURL}/create-passengers`,
        newData,
        {
          headers: headres
        }
      );

      if (response.status === 201) {
        setSaveFiled(prev => [...prev, newData]);
        navigate('/');
      } else {
        alert(' نتتو چک کن! ');
      }


    } catch (error) {
      console.error('Error updating Excel file:', error);
    }
  };

  useEffect(() => {
    setEntrance(data.entrance);
    setLeft(data.left);
    setName(data.name);
    setLastName(data.lastName);
    setNationalCode(data.nationalCode);
    setBirthday(data.birthday);
    setPhoneNumber(data.phoneNumber);
    setLiveCity(data.liveCity);
    setJob(data.job);
    setEducation(data.education);
    setFavorite(data.favorites);
    setReservationRoom(data.reservationRoom);
  }, []);

  return (
    <LeftAnimated motion_div_className={'bg-background_color w-full h-dvh flex justify-center overflow-hidden pt-24'}>
      <div className='bg-background_color w-full h-full overflow-hidden px-2 md:w-[50%] lg:w-[40%] xl:w-[35%]' dir='rtl'>

        <div className='navbar createfrom flex items-center' dir='ltr'>
          <Link className='fixed left-6 top-6 z-50'
            to={'/secondPrPage'}
          >

            <md-filled-icon-button id='backButton_Custom'>
              <md-icon>keyboard_arrow_left</md-icon>
            </md-filled-icon-button>

          </Link>


          <Navbar
            titr={' تایید اطلاعات '}
          />

        </div>

        <div className='scroll_hide body w-full h-full pb-20 px-2 overflow-y-scroll'>

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
            value={nationalCode}
            onChange={(event) => setNationalCode(event.target.value)}
          />

          <Input_custom
            placeholder={' شماره تماس '}
            input_label={' شماره تماس '}
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />

          <Input_custom
            placeholder={' شهر سکونت '}
            input_label={' شهر سکونت '}
            value={liveCity}
            onChange={(event) => setLiveCity(event.target.value)}
          />

          <Input_custom
            placeholder={' شغل '}
            input_label={' شغل '}
            value={job}
            onChange={(event) => setJob(event.target.value)}
          />

          <Input_custom
            placeholder={' تحصیلات '}
            input_label={' تحصیلات '}
            value={education}
            onChange={(event) => setEducation(event.target.value)}
          />

          <Input_custom
            placeholder={' علایق '}
            input_label={' علایق '}
            value={favorite}
            onChange={(event) => setFavorite(event.target.value)}
          />

          <Input_custom
            placeholder={' اتاق رزرو '}
            input_label={' اتاق رزرو '}
            value={reservationRoom}
            onChange={(event) => setReservationRoom(event.target.value)}
          />

          <div className='flex items-center justify-center mb-4 mt-16'>

            <Button_custom
              button_text={' تایید '}
              onClick={handleFormSubmit}
            />

          </div>

        </div>

      </div>
    </LeftAnimated>
  )
}

export default ConfirmPrPage
