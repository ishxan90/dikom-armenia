import { FormControl } from '../FormControl/FormControl'

const date = new Date()
const year = date.getFullYear()

export const Contact = (props) => {

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>{props.t('СВЯЗАТЬСЯ')}</h2>
                <p>
                  {props.t('Пожалуйста, заполните форму ниже, чтобы отправить нам электронное письмо, и мы свяжемся с вами как можно скорее.')} 
                </p>
              </div>
              <FormControl t={props.t}/>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>{props.t('Контактная информация')}</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> {props.t('Адрес')}
                </span>
                {props.data ? props.t(props.data.address) : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> {props.t('Телефон')}
                </span>{' '}
                {props.data ? props.t(props.data.phone) : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> {props.t('Эл. адрес')}
                </span>{' '}
                {props.data ? props.t(props.data.email) : 'loading'}
              </p>
            </div>
            {/* <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-globe'></i> {props.t('Официальный сайт')}
                </span>{' '}
                {props.data ? props.t(props.data.website) : 'loading'}
              </p>
            </div> */}
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            &copy; 2012-{year} ДиКом.{' '}
            <br/>
            {props.t('Все права защищены.')}
          </p>
        </div>
      </div>
    </div>
  )
}