import "./Slider.css";

export const Slider = (props) => {
    return (
      <div id='#slider' className="text-center">
        <div className="col-md-12">
          <div id="dws-slider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#dws-slider" data-slide-to="0" className="active"></li>
              <li data-target="#dws-slider" data-slide-to="1"></li>
              <li data-target="#dws-slider" data-slide-to="2"></li>
              <li data-target="#dws-slider" data-slide-to="3"></li>
              <li data-target="#dws-slider" data-slide-to="4"></li>
              <li data-target="#dws-slider" data-slide-to="5"></li>
            </ol>

            <div className="carousel-inner" role="listbox" style={{backgroundColor:'white'}}>
              <div className="item active"><img src="https://ppkdikom.ru/images/slide/dikom/slide_1.jpg" alt="Картинка 1" className="img-responsive center-block"/>
                <div className="carousel-caption">
                  <h3 className="text-uppercase">{props.t('Особая серия детских игровых площадок')}</h3>
                  <p>{props.t('Необыкновенный современный дизайн площадок учитывает мировые тенденции в проектировании, что позволяет гармонично вписываться в благоустройство современной городской среды')}</p>
                </div>
              </div>
              <div className="item"><img src="https://ppkdikom.ru/images/slide/dikom/slide_2.jpg" alt="Картинка 2" className="img-responsive center-block"/>
                <div className="carousel-caption">
                  <h3 className="text-uppercase">{props.t('Особая серия детских игровых площадок')}</h3>
                  <p>{props.t('Необыкновенный современный дизайн площадок учитывает мировые тенденции в проектировании, что позволяет гармонично вписываться в благоустройство современной городской среды')}</p>
                </div>
              </div>
              <div className="item"><img src="https://ppkdikom.ru/images/slide/dikom/slide_3.jpg" alt="Картинка 3" className="img-responsive center-block"/>
                <div className="carousel-caption">
                    <h3 className="text-uppercase">{props.t('Особая серия детских игровых площадок')}</h3>
                    <p>{props.t('Необыкновенный современный дизайн площадок учитывает мировые тенденции в проектировании, что позволяет гармонично вписываться в благоустройство современной городской среды')}</p>
                </div>
              </div>
              <div className="item"><img src="https://ppkdikom.ru/images/slide/dikom/slide_4.jpg" alt="Картинка 3" className="img-responsive center-block"/>
                <div className="carousel-caption">
                    <h3 className="text-uppercase">{props.t('Особая серия детских игровых площадок')}</h3>
                    <p>{props.t('Необыкновенный современный дизайн площадок учитывает мировые тенденции в проектировании, что позволяет гармонично вписываться в благоустройство современной городской среды')}</p>
                </div>
              </div>
              <div className="item"><img src="https://ppkdikom.ru/images/slide/dikom/slide_5.jpg" alt="Картинка 3" className="img-responsive center-block"/>
                <div className="carousel-caption">
                    <h3 className="text-uppercase">{props.t('Особая серия детских игровых площадок')}</h3>
                    <p>{props.t('Необыкновенный современный дизайн площадок учитывает мировые тенденции в проектировании, что позволяет гармонично вписываться в благоустройство современной городской среды')}</p>
                </div>
              </div>
              <div className="item"><img src="https://ppkdikom.ru/images/slide/dikom/slide_6.jpg" alt="Картинка 3" className="img-responsive center-block"/>
                <div className="carousel-caption">
                    <h3 className="text-uppercase">{props.t('Особая серия детских игровых площадок')}</h3>
                    <p>{props.t('Необыкновенный современный дизайн площадок учитывает мировые тенденции в проектировании, что позволяет гармонично вписываться в благоустройство современной городской среды')}</p>
                </div>
              </div>
            </div>

            <a className="left carousel-control" href="#dws-slider" role="button" data-slide="prev">
              <i className="glyphicon glyphicon-chevron-left fa fa-long-arrow-left" aria-hidden="true" style={{color:'#1E1E1E'}}></i>
              {/* <span className="sr-only">Previous</span> */}
            </a>
            <a className="right carousel-control" href="#dws-slider" role="button" data-slide="next">
              <i className="glyphicon glyphicon-chevron-right fa fa-long-arrow-right" aria-hidden="true" style={{color:'#1E1E1E'}}></i>
              {/* <span className="sr-only">Next</span> */}
            </a>
          </div>
        </div>
      </div>
    )
  }