import React from 'react';
import { FormControl } from "../FormControl/FormControl";
import { Image } from "../Image/Image";

export const Gallery = (props) => {


  return (
    <div id='portfolio' className='container'>
      <div className='container'>
        <div className='section-title' style={{textAlign:'center'}}>
          <h2>{props.t('Каталог')}</h2>
          {/* <p>
            {props.t('Каталог продукции')}
          </p> */}
        </div>
        <div className='row'>
          <div className='col-md-8' style={{borderRight:'solid 0.1px', borderColor:'#d5d5d5'}}>
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-3'>
                  <Image title={d.title} smallImage={d.smallImage} />
                  <p style={{height:"2vw"}}>{d.title}</p>
                </div>
              ))
              : 'Loading...'
            }
          </div>
          <div className='col-md-4'>
            <h3 style={{textAlign:'center', margin:"50px"}}>{props.t('ЗАПРОСИТЬ ПРАЙС')}</h3>
            <FormControl t={props.t}/>
          </div>
        </div>
        <div>
          <a 
            className="btn btn-custom btn-lg page-scroll"
            href='/files/КАТАЛОГ_ДиКом_2022.pdf' download
            style={{marginRight:'3px'}}>
            <i className="fa fa-download"></i>
          </a>
          <a href='/files/КАТАЛОГ_ДиКом_2022.pdf' download
              className='btn btn-custom btn-lg page-scroll'>
              {props.t('Скачать Каталог в формате PDF')}
          </a> {' '}
        </div>
        <br/>
        <div className='col-md-8'>
          <h4 style={{lineHeight:"25px"}}>{props.t("Вы также можете ознакомиться с продукцией компании 'ДиКом' на заводском сайте")}
            <span></span>
            <a href="https://ppkdikom.ru/" target={'blank'} style={{color:"green", textDecoration:'underline', marginLeft:"10px"}}><i>ppkdikom.ru</i></a>
          </h4>
        </div>   
      </div>
    </div>
  )
}