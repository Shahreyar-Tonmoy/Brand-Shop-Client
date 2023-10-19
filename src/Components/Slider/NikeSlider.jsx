import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bgImg1 from '../../assets/Slider1.png';
import bgImg2 from '../../assets/Slider2.png';
import bgImg3 from '../../assets/Slider3.png';

const spanStyle = {
   
};

const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "700px",
};
const slideImages = [
    {
        url: `${bgImg1}`,
        
    },
    {
        url: `${bgImg2}`,
        
    },
    {
        url: `${bgImg3}`,
        
    },
];

const NikeSlider = () => {
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

export default NikeSlider;