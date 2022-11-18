import "./Header.css";


export const Header = (props) => {

    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row logo'>
                <img className="logo__image d-none d-lg-block" style={{width:'43vw'}} src="img/logoDikom/logoDiKom.svg" alt="Логотип Диком"/>
              </div>
              <div className='row'>
                <div className='col-md-12 col-md-offset-0 intro-text bigText'>
                  <h1 style={{fontSize:'4vw', color:'#F1F6F9', lineHeight:'6vw'}}>
                    {props.t(props.data ? props.data.title : 'Loading')}
                    <span></span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }