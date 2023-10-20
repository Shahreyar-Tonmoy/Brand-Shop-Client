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
        url: "https://i.ibb.co/KybqhpG/modern-green-coming-soon-Banner-Landscape.png",
        
    },
    {
        url: "https://i.ibb.co/2jjFdMv/modern-green-coming-soon-Banner-Landscape-1.png",
        
    },
    {
        url: "https://i.ibb.co/f995bFv/modern-green-coming-soon-Banner-Landscape-2.png",
        
    },
];

const GucciSlider = () => {
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

export default GucciSlider;