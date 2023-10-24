import { useState } from "react"
import "./carousel.css"

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const items = [
        "https://media.cnn.com/api/v1/images/stellar/prod/211227135008-02-the-batman-trailer.jpg?q=h_1406,w_2500,x_0,y_0",
        "https://ca-times.brightspotcdn.com/dims4/default/245ad3b/2147483647/strip/true/crop/6000x4000+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7a%2Ff9%2F6880412a43b6aa82e372c0c782a1%2Fthebatmanzoekravitzrobertpattinson.jpg",
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C0%2C1652%2C826&poi=face&w=1652&h=826&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F08%2F05%2FBen-Affleck-Batman-080423.jpg "
    ]

    const prevSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === 0 ? items.length - 1 : prevSlide - 1)
    }
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === items.length - 1 ? 0 : prevSlide + 1 )
    }
    return (
        <div className="carousel">
            <div onClick={prevSlide} className="prev-button">
                
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item} alt="" />
                
                </div>
            ))}
            <div onClick={nextSlide} className="next-button">
                
            </div>
        </div>
    )
}