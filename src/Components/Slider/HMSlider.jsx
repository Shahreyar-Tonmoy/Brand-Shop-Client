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
        url: "https://i.ibb.co/7YxWnN2/Grey-Minimalist-Special-Offer-Banner-Landscape.png",
        
    },
    {
        url: "https://i.ibb.co/3dZF4pt/Pink-and-Blue-Modern-Fashion-Banner.png",
        
    },
    {
        url: "https://i.ibb.co/LCnK2z7/Black-Yellow-Bold-Bag-Fashion-Sale-Banner.png",
        
    },
];

const HMSlider = () => {
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

export default HMSlider;