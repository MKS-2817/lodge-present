import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Button_custom from '../../../components/Button';
import Input_custom from '../../../components/Input';
import LeftAnimated from '../../../components/animation/SetLeftAnimated';

const SecondPrPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { data: firstPageData } = location.state || {};

  const [liveCity, setLiveCity] = useState('');
  const [job, setJob] = useState('');
  const [education, setEducation] = useState('');
  const [favorite, setFavorite] = useState('');
  const [reservationRoom, setReservationRoom] = useState('');


  const handleFormSubmit = () => {
    const newData = {
      liveCity: liveCity,
      job: job,
      education: education,
      favorites: favorite,
      reservationRoom: reservationRoom
    }

    const newItem = {
      ...firstPageData,
      ...newData
    }

    navigate('/confirmPrPage', { state: { data: newItem } });

  }


  return (
    <LeftAnimated motion_div_className={'bg-background_color w-full h-dvh flex justify-center overflow-hidden pt-16'}>
      <div className='container bg-background_color w-full h-full p-2 overflow-hidden md:w-[50%] lg:w-[40%] xl:w-[35%]' dir='rtl'>

        <div className='navbar createfrom flex items-center' dir='ltr'>
          <Link className='fixed left-6 top-6 z-50'
            to={'/createfrom'}
          >

            <md-filled-icon-button id='backButton_Custom'>
              <md-icon>keyboard_arrow_left</md-icon>
            </md-filled-icon-button>

          </Link>

          <Navbar
            titr={' پذیرش 2 '}
          />
        </div>


        <div className='body flex flex-col mt-12 px-2'>


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


        </div>

        <div className='flex items-center justify-center absolute bottom-10 left-0 right-0'>

          <Button_custom
            button_text={' تایید '}
            onClick={handleFormSubmit}
          />

        </div>

      </div>
    </LeftAnimated>
  )
}

export default SecondPrPage