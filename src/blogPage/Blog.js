import TitleEffect from "../TitleEffect";
import {ReactComponent as BlogF} from './BLOG f.svg';
import {ReactComponent as BlogB} from './BLOG b.svg';
import {ReactComponent as BlogCentre} from './Blog Centre.svg';
import './Blog.css';

const Blog = () => {
    const title = {front: BlogF, back: BlogB, centre: BlogCentre, color: '#C5D86D', top: -150};

    return (
        <div className="Blog-Page" style={{backgroundColor: '#C5D86D'}}>
            <TitleEffect title ={title}/>
    </div>
      );
}
 
export default Blog;