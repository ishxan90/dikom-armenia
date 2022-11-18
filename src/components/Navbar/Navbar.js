import LanguageIcon from '@mui/icons-material/Language';
import BasicModal from '../BasicModal/BasicModal';

export const Navbar = ({lngs, t, i18n}) => {


  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" style={{minHeight: '75px'}}>
       <div className="container-fluid">
          <div className="navbar-header">      
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" style={{marginTop: '20px'}}>
              <span className="sr-only"></span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
              <span className="icon-bar"> </span>
            </button>
              <a className="navbar-brand" href="#">
                <img className="logo__image d-none d-lg-block" style={{width:'170px'}} src="https://ppkdikom.ru/templates/template/images/logo.svg" alt="Логотип Диком"></img>
              </a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a href="#">{t('Завод игрового')}<br/> {t('и спортивного оборудования')}</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href='#contact'> +374 (55) 99-02-12<br/>
                                        {t("info@ppkdikom.ru")}
                    </a>
                </li>
                <li>
                  <a href='#contact' style={{marginRight:"40px"}}> 
                      +7 (960) 569-03-84<br/>
                            {/* {t('Бесплатно для регионов РФ')} */}
                  </a>      
                </li>
                <li>
                  <BasicModal t={t}/>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    <LanguageIcon style={{fontSize:'40px', color:'#005387'}}/>{t('РУС')}
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" style={{backgroundColor:'inherit', textAlign:'center', position:'reletive'}}>
                    <li>
                    {Object.keys(lngs).map((lng) => (
                          <div key={lng} onClick={() => i18n.changeLanguage(lng)} disabled={i18n.resolvedLanguage === lng}>
                            <b style={{color:"black", cursor:'pointer'}}>{lngs[lng].title}</b>
                            <div style={{display:'inline-block', marginLeft: lngs[lng].marg, textAlign:'center'}}>
                              <img src={lngs[lng].flag} alt='Glob'style={{width:'30px', height:'18px', cursor:'pointer', margin:'3px',marginLeft:'10px'}}/>
                            </div>
                          </div>
                        ))
                    }
                    </li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>
     </nav>
  )
}