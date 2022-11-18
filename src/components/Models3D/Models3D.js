import React, { useCallback, useRef, useState } from "react"
import "./Models3D.css";

export const Models3D = (props) => {

  const [lessMore, setLessMore] = useState(false)
  const toggleLessMore = useCallback(() => {
     setLessMore(prev => !prev)
  }, [])

  const parentRef = useRef()

    return (
      <div id='models3D' className='text-center' style={{marginTop:"14vw"}}>
        <div className='container'>
          <div className='section-title'>
            <h2>{props.t('Готовые 3D-проекты')}</h2>
          </div>
          <div className='row'>
              <div className='col-md-3 img-container'>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/141-3d-proekt-detskoj-ploshchadki-748m2/" target={"blank"}>
                    <img src="https://ppkdikom.ru/cache/tpl_images/ba3cb326e36c0d479cf2a1d409cd4b5d.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div  className='col-md-3 img-container'>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/156-3d-proekt-detskoj-ploshchadki-2014m2/" target={"blank"}>
                    <img src="https://ppkdikom.ru/cache/tpl_images/9396406e0d297b7c717cd64112d83fd3.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div  className='col-md-3 img-container'>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/170-3d-proekt-detskoj-ploshchadki-300m2-2/" target={"blank"}>
                    <img src="https://ppkdikom.ru/cache/tpl_images/5a4c5a4f97d67156a603dad9aaaa9476.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
              <div  className='col-md-3 img-container'>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/164-3d-proekt-detskoj-ploshchadki-450m2-2/" target={"blank"}>
                    <img src="https://ppkdikom.ru/cache/tpl_images/d270847e9bab0ba9a9b76625c6119ec4.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/162-3d-proekt-detskoj-ploshchadki-700m2/" target={"blank"}>
                    <img src="https://ppkdikom.ru/cache/tpl_images/89e8d46baf5ab2e0492bf2bf52b84169.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/128-3d-proekt-detskoj-ploshchadki-525m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/b368822b6266b479cfe0832e1661b2d4.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/144-3d-proekt-detskoj-ploshchadki-392m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/5d2e9be73d1e0a168e0c11faf2d6f653.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/143-3d-proekt-detskoj-ploshchadki-160m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/f27442471a17940288d351a8ddf82157.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/142-3d-proekt-detskoj-ploshchadki-143m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/2df3fcc172a4741af3077140b7dff2ae.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/111-3d-proekt-detskoj-ploshchadki-1200m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/fecf64a818074672349c7f3ab272f4ac.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/137-3d-proekt-detskoj-ploshchadki-440m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/0c184e0b5c0e0694c8f621db516c92bd.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/112-3d-proekt-detskoj-ploshchadki-410m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/d8d9377310a02023bcd6bf18899c37a2.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/167-3d-proekt-detskoj-ploshchadki-560m2-2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/7b19897856f4754b7aee8a386cd89bb3.jpg" alt="3D"style={{width:'100%'}} />
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/165-3d-proekt-detskoj-ploshchadki-294m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/d94505bc9e7fa09dfe34b32aabd469d2.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/168-3d-proekt-detskoj-ploshchadki-300/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/c47f42c0eeb20187829a78a3168dd14b.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
              <div ref={parentRef} className='col-md-3 img-container img-content'
                style={lessMore ? {
                height: parentRef.current.scrollHeight +"px"} : {height:'0px'}}>
                <div className='service-desc'>
                  <a href="https://ppkdikom.ru/ready-projects/169-3d-proekt-detskoj-ploshchadki-300m2/" target={"blank"} >
                    <img src="https://ppkdikom.ru/cache/tpl_images/0cbc978c6192670788404d5687330116.jpg" alt="3D" style={{width:'100%'}}/>
                  </a>
                </div>
              </div>
          </div>
          <button onClick={toggleLessMore} className='btn btn-custom btn-lg page-scroll' style={{marginTop:'2vw'}}>
            {lessMore ? props.t('показать меньше') : props.t('показать больше')}
          </button>{' '}
        </div>
        {/* <br/>
        <div className='col-md-12'>
          <h4>{props.t('Вы также можете ознакомиться с нашей продукцией на нашем российском сайте')}</h4>
          <a href="https://ppkdikom.ru/ready-projects/" target={'blank'} style={{color:"green", textDecoration:'underline'}}><i>ppkdikom.ru</i></a>
        </div>    */}
      </div>
    )
  }