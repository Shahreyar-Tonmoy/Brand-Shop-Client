import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
    
};

const divStyle = {

    
};
const slideImages = [
    {
        url: "https://i.ibb.co/CVzPtWM/Ultraboost-1896x800.jpg",
        
    },
    {
        url: "https://i.ibb.co/kxdxt3X/Screenshot-2023-10-20-140821.png",
        
    },
    {
        url: "https://i.ibb.co/s1RbpjB/Hn-M-cover.webp",
        
    },
    {
        url: "https://i.ibb.co/71t5tkL/BANNER-ZARA.jpg",
        
    },
    {
        url: "https://i.ibb.co/DQbBTjV/download.jpg",
        
    },
    {
        url: "https://i.ibb.co/vct49WC/banner-that-lung-gucci-cua-nuoc-nao-chinh-hang-chia-se-tu-gucci-vietnam.jpg",
        
    },
];

const BodySlider = () => {
    return (
        <div>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div className="bg-contain bg-no-repeat flex justify-center items-center lg:bg-cover h-64 lg:h-[640px]"
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