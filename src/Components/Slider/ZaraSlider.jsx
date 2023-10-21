import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
    
};

const divStyle = {
    
};
const slideImages = [
    {
        url: "https://i.ibb.co/dDSqBp1/Clothing-Rack-Boutique-Fashion-Banner-Landscape.png",
        
    },
    {
        url: "https://i.ibb.co/ZxTFS4f/Grey-Brown-Minimalist-Summer-season-collections-Banner-Landscape.png",
        
    },
    {
        url: "https://i.ibb.co/DD9XnMx/Clothing-Rack-Boutique-Fashion-Banner-Landscape-1.png",
       
    },
];

const ZaraSlider = () => {
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

export default ZaraSlider;