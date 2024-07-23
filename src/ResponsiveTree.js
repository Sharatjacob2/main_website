import { useEffect, useState } from "react";
import WelcomePage from "./landingPage/WelcomePage";
import MobileWelcome from "./mobileWelcome/mobileWelcome";

const ResponsiveComponent = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{width: '100%', height: '100%'}}>
            {width < 900 ? <MobileWelcome /> : <WelcomePage />}
        </div>
    );
};

export default ResponsiveComponent;
