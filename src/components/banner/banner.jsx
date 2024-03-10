import "./banner.scss"

function Banner ({imageSrc, imageAlt, text=""}) {
    return (<div className="banner-container">
    <img className="banner-img" src={imageSrc} alt={imageAlt} style={{ objectFit: 'cover' }} />
    <blockquote className="banner-text">{text}</blockquote>
  </div>)
}

export default Banner;