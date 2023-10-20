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
        url: "https://i.ibb.co/4JQ9NLw/Brown-Minimalist-Fashion-Sale-Banner.png",
        
    },
    {
        url: "https://i.ibb.co/8b8fND3/Brown-and-Beige-Minimalist-Fashion-Banner.png",
       
    },
    {
        url: "https://i.ibb.co/WvWp6sx/Beige-Brown-Minimalist-Casual-Style-Banner-Landscape.png",
        
    },
];

const LeviesSlider = () => {
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

export default LeviesSlider;