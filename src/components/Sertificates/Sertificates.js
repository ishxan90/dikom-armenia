import React, { useCallback, useRef, useState } from "react"
import "./Sertificates.css";


export const Sertificates = (props) => {

  const [lessMore, setLessMore] = useState(false)

  const toggleLessMore = useCallback(() => {
      setLessMore(prev => !prev)
  }, [])

  const parentRef = useRef()

    return (
      <div id='sertificates' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>{props.t('Сертификаты')}</h2>
            {/* <p>{props.t('Вся продукция компании ДиКом безопасна и сделана из материалов высшего качества, что подтверждается сертификатами соответствия требованиям технического регламента Евразийского экономического союза ТР ЕАЭС 042/2017 «О безопасности оборудования для детских игровых площадок».')}</p> */}
          </div>
          <div className='row'>
             <div  className='col-md-3'>
                <div className='service-desc'>
                    <img src="https://ppkdikom.ru/images/docs/doc1-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div  className='col-md-3'>
                <div className='service-desc'>
                    <img src="https://ppkdikom.ru/images/docs/doc2-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div  className='col-md-3'>
                <div className='service-desc'>
                    <img src="https://ppkdikom.ru/images/docs/doc7-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div  className='col-md-3'>
                <div className='service-desc'>
                    <img src="https://ppkdikom.ru/images/docs/doc4-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 content'
                style={lessMore ? {
                height:parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                    <img src="https://ppkdikom.ru/images/docs/doc3-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 content'
                style={lessMore ? {
                height:parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <img src="https://ppkdikom.ru/images/docs/doc5-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 content'
                style={lessMore ? {
                height:parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <img src="https://ppkdikom.ru/images/docs/doc6-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 content'
                style={lessMore ? {
                height:parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <img src="https://ppkdikom.ru/images/docs/doc8-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 content'
                style={lessMore ? {
                height:parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <img src="https://ppkdikom.ru/images/docs/doc9-min.jpg" alt="сертификат"/>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 content'
                style={lessMore ? {
                height:parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <img src="https://ppkdikom.ru/images/docs/doc10-min.jpg" alt="сертификат"/>
                </div>
              </div>
          </div>
          <button onClick={toggleLessMore} className='btn btn-custom btn-lg page-scroll' style={{marginTop:'10px'}}>
            {lessMore ? props.t('показать меньше') : props.t('показать больше')}
          </button>{' '}
        </div>
      </div>
    )
  }