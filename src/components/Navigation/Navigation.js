import "./Navigation.css";

export const Navigation = ({t}) => {

  return (
    <nav className="navbar-default" style={{marginTop:'75px', backgroundColor:'#333333'}}>
       <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <a href="#" style={{fontSize:'30px', color:'#B1A59A'}}>{t('Разделы')}</a>
            </ul>  
            <ul className="nav navbar-nav" style={{marginLeft:'6vw'}}>
                <li><a href='#about1'style={{color:'#B1A59A'}}>{t('О нас')}</a>{' '}</li>
                <li><a href='#sertificates'style={{color:'#B1A59A'}}>{t('Сертификаты')}</a>{' '}</li>
                <li><a href='#portfolio'style={{color:'#B1A59A'}} >{t('Галерея')}</a>{' '}</li>
                <li><a href='#models3D'style={{color:'#B1A59A'}} >{t('3D-проекты')}</a>{' '}</li>
                <li><a href='#contact' style={{color:'#B1A59A'}}>{t('СВЯЗАТЬСЯ')}</a>{' '}</li>
            </ul> 
          </div>
        </div>
     </nav>
  )
}