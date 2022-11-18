import { Trans } from "react-i18next";
import "./About.css";

export const About = (props) => {

    return (
      <div className="container about" id='about1'>
        <h2 style={{textAlign:'center',  marginTop:'1vw'}}>
          {props.t('О нас')}
        </h2>
        <div className="container-fluid ">
          <div className="row">
              <div className="col-md-6 backFon" style={{minHeight:'646px', color:'white'}}>
                  <h1 className="h1 mb-lg-5">{props.t('ДиКом')}:<br/> {props.t('детские площадки, спортивное оборудование, скейт-парки')}</h1>
                  <p className="lead">{props.t('Компания «ДиКом» предлагает широкий выбор всевозможных игровых конструкций для детей...')}</p>
                  {/* <p className="lead">{props.t('Это увлекательные детские площадки, включающие:')}</p> */}
                  <br/>
                  <ul className="lead">
                      <li>{props.t('игровые комплексы')}</li>
                      <li>{props.t('качалки')}</li>
                      <li>{props.t('шведские стенки')}</li>
                      <li>{props.t('столики')}</li>
                      <li>{props.t('песочницы')}</li>
                      <li>{props.t('и многое другое.')}</li>
                  </ul>
                  <br/>
                  <p>{props.t('Изделия для детских площадок изготовлены из экологически чистых материалов, которые не выгорают на солнце и не деформируются под воздействием перепада температур.')}</p>
              </div>
              <div className="col-md-6 backGr" style={{minHeight:'646px'}}>
              </div>
            </div>
        </div>
        <div className="container-fluid">
          <div className="row">
              <div className="col-md-6 backGr2" style={{minHeight:'503px'}}>
              </div>
              <div className="col-md-6 backFon" style={{minHeight:'503px',color:'white'}}>
              <h1 className="h1 mb-lg-5">{props.t('Вся продукция компании Диком прошла сертификацию')}</h1>
                  <p className="lead">
                    <Trans>
                      {props.t('<br/> <br/> На предприятии действует система менеджмента качества, <br/> отвечающая требованиям международного стандарта качества <br/>')} 
                      <br/>
                      ISO9001.
                    </Trans>
                  </p>
                  <div className="btn btn-custom btn-lg page-scroll" style={{marginBottom:'2vw', marginTop:"50px"}}>{props.t('Сертификат')} ISO9001</div>
              </div>
            </div>
        </div>
      </div>
    )
  }