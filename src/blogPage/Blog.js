import TitleEffect from "../TitleEffect";
import {ReactComponent as BlogF} from './BLOG f.svg';
import {ReactComponent as BlogB} from './BLOG b.svg';
import {ReactComponent as BlogCentre} from './Blog Centre.svg';
import './Blog.css';
import Footer from "../footer/Footer";

const Blog = () => {
    const title = {front: BlogF, back: BlogB, centre: BlogCentre, color: '#C5D86D', top: -11.719, width: 46.875, height: 46.875, right: 27.344};
    return (
        <div className="Blog-Page" style={{backgroundColor: '#C5D86D'}}>
            <TitleEffect title ={title}/>
            <Footer color = {'#B7A555'}/>

    </div>
      );
}
 
export default Blog;