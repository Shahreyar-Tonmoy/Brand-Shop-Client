import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
    
};

const divStyle = {
    
};
const slideImages = [
    {
        url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw23-holiday-sets-oct-onsite-mh-mens-d_tcm221-1073260.jpg",
        
    },
    {
        url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw23-holiday-matchingsets-oct-onsite-mh-lg-womens-d_tcm221-1073398.jpg",
        
    },
    {
        url: "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/xcat-fw23-holiday-oct-shoes100andunder-glp-k-large-mh-d_tcm221-1071519.jpg",
        
    },
];

const AdidasSlider = () => {
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

export default AdidasSlider;