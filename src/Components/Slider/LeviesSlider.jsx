import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
    
};

const divStyle = {
    
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

export default LeviesSlider;