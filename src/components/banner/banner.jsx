import "./banner.scss"

function Banner ({imageSrc, imageAlt, text=""}) {
    return (<header className="banner-container">
    <img className="banner-img" src={imageSrc} alt={imageAlt} />
    <blockquote className="banner-text">{text}</blockquote>
  </header>)
}

export default Banner;