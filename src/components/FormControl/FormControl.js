import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import SimpleSnackbar from '../Snack/Snack';


export const FormControl = (props) => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if(form.current[0].value && form.current[1].value) {

    emailjs
    .sendForm(
      'service_b8zp6pu', 
      'template_x7hmv7q', 
      form.current, 
      'dEDMFNOb0FTgTQlU6'
      )
      .then((result) => {
          console.log(result.text);
          setOpen(!open)
      }, (error) => {
          console.log(error.text);
      });
      form.current[0].value=''
      form.current[1].value=''
      form.current[2].value=''
      form.current[3].value=''
  }};

  return (
    <>
      <form ref={form} onSubmit={sendEmail} name='sentMessage'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group'>
              <input
                type='text'
                id='name'
                name="user_name"
                className='form-control'
                placeholder={props.t('Имя')}   
                />
                <p className='help-block text-danger'></p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='number'
                  id='telnumber'
                  name='user_telnumber'
                  className='form-control'
                  placeholder={props.t('номер телефона')}     
                />
                <p className='help-block text-danger'></p>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group'>
                <input
                  type='email'
                  id='email'
                  name='user_email'
                  className='form-control'
                  placeholder={props.t('Эл. адрес')}
                />
                <p className='help-block text-danger'></p>
              </div>
            </div>
            <div className='col-md-12'>
              <div className='form-group'>
                <textarea
                  name="massage"
                  id='message'
                  className='form-control'
                  rows='4'
                  placeholder={props.t('Сообщение')}>
                </textarea>
                <p className='help-block text-danger'></p>
              </div>
            </div>
            <div id='success'></div>
              <button type='submit' className='btn btn-custom btn-lg' style={{marginLeft:'15px'}}
                onClick={sendEmail}>{props.t('Отправить сообщение')}
              </button>
        </div>
      </form>
      <SimpleSnackbar open={open} t={props.t} setOpen={setOpen}/>
  </>
  );
};