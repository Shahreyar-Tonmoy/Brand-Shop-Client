import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
    
};

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    backgroundRepeat  : 'no-repeat',
    height: "640px",
};
const slideImages = [
    {
        url: "https://the-post-assets.sgp1.digitaloceanspaces.com/2021/01/Ultraboost-1896x800.jpg",
        
    },
    {
        url: "https://i.ibb.co/kxdxt3X/Screenshot-2023-10-20-140821.png",
        
    },
    {
        url: "https://i.pinimg.com/originals/a8/95/62/a895623e7bbeb9314e715476f4df9afc.jpg",
        
    },
    {
        url: "https://likeseasons.com/wp-content/uploads/2019/02/BANNER_ZARA.jpg",
        
    },
    {
        url: "https://i.pinimg.com/originals/42/2a/96/422a9607d5a6e13d28b66af569c7188e.jpg",
        
    },
    {
        url: "https://authenticvietnam.vn/wp-content/uploads/banner-that-lung-gucci-cua-nuoc-nao-chinh-hang-chia-se-tu-gucci-vietnam.jpg",
        
    },
];

const BodySlider = () => {
    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div
                                style={{
                                    ...divStyle,
                                    backgroundImage: `url(${ slideImage.url })`,
                                }}
                            >
                                <span style={spanStyle}>{slideImage.caption}</span>
                            </div>
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default BodySlider;