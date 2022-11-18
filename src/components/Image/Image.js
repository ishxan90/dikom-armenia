import "./Image.css";

export const Image = ({ title, largeImage, smallImage }) => {
    return (
      <div className='portfolio-item'>
        <div className='hover-bg'>
          {' '}
          <a
            href={largeImage}
            title={title}
            data-lightbox-gallery='gallery1'
          >
            <img
              src={smallImage}
              className='img-responsive'
              alt={title}
              style={{width: '130px'}}
            />{' '}
          </a>{' '}
        </div>
      </div>
    )
  }