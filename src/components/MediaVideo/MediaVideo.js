import "./MediaVideo.css";

export const MediaVideo = (props) => {
    return (
        <div id="mediavideo">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3 className="block_title mb-4">{props.t('Видео с производства')}</h3>
                    </div>
                        <iframe src="https://www.youtube.com/embed/82Fa08hIYYE?modestbranding=1&amp;playsinline=1&amp;color=white&amp;iv_load_policy=3&amp;start=16"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div> 
            </div>
        </div>

    );
  };















// export const About = (props) => {
//     return (
//       <div id="about">
//         <div className="container">
//           <div className="row">
//             <div className="col-xs-12 col-md-6">
//               {" "}
//               <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
//             </div>
//             <div className="col-xs-12 col-md-6">
//               <div className="about-text">
//                 <p>{props.t("Готовые детские площадки и малые архитектурные формы МАФ от компании ДиКом – это всевозможные конструкции: карусели, песочницы, шведские стенки, качели самых разнообразных цветов, форм и размеров по доступным ценам. Мы также делаем профессиональные спортивные покрытия, хоккейные коробки")}</p>
//                 <h5>{props.t("Компания «ДиКом» предлагает широкий выбор всевозможных игровых конструкций для детей. Это увлекательные детские площадки, включающие:")}</h5>
//                 <div className="list-style">
//                   <div className="col-lg-6 col-sm-6 col-xs-12">
//                     <ul>
//                       {props.data
//                         ? props.data.Why.map((d, i) => (
//                             <li key={`${d}-${i}`}>{props.t(d)}</li>
//                           ))
//                         : "loading"}
//                     </ul>
//                   </div>
//                   <div className="col-lg-6 col-sm-6 col-xs-12">
//                     <ul>
//                       {props.data
//                         ? props.data.Why2.map((d, i) => (
//                             <li key={`${d}-${i}`}>{props.t(d)}</li>
//                           ))
//                         : "loading"}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  