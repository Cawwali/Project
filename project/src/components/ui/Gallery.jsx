import "./gallery.css"

export default function Gallery() {
    const galleryItems = [
        "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/batman-2-robert-pattinson.jpg",
        "https://cdn.akamai.steamstatic.com/steam/apps/208650/capsule_616x353.jpg?t=1694042300",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRinXZVFWPxGkogxmGgzratgEsJx_dmPVXJTg&usqp=CAU",
        "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=650%2Cq=40%2Csharpen=1%2Cwidth=956/wp-content/uploads/batman-day1-scaled.jpg",
        "https://images.mid-day.com/images/images/2022/nov/Batman-aa_d.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJgrrNLBAdIcypGCaEYADSqXcgEhkkb_pGw37hMFnZr0ZxxTiHLkpEGxYrpXcsiE9wmw&usqp=CAU",
        "https://www.gamersdecide.com/sites/default/files/styles/news_images/public/main_107.jpg",

    ]
    return (
        <div className="container">
            <h2>Image Gallery</h2>
            <div className="gallery-wrapper">
                {
                    galleryItems.map((item) => {
                       return (<img className="gallery-item" src={item} />)
                    })
                }
            </div>
        </div>
    )
}