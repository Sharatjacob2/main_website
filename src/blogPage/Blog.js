import TitleEffect from "../TitleEffect";
import {ReactComponent as BlogF} from './BLOG f.svg';
import {ReactComponent as BlogB} from './BLOG b.svg';
import {ReactComponent as BlogCentre} from './Blog Centre.svg';
import './Blog.css';
import Footer from "../footer/Footer";


const BlogItem = (props) => {
    const {title, preview, date} = props.item;
    return (
        <div className="blog-item">
            <div className="blog-title">{title}</div>
            <div className="blog-preview">{preview}</div>
            <div className="blog-date">{date}</div>
            <div className="project-divider"></div>

        </div>
      );
}
 
const Blog = () => {
    document.body.classList.remove('hide-scrollbars');

    const blogitems = [
        {title: "The lethality of training on human feedback", preview: "Human operators are fallible, breakable, and manipulable.  Human raters make systematic errors - regular, compactly describable, predictable errors.  To faithfully learn....", date: "13th JAN 2023"},
        {title: "The lethality of training on human feedback", preview: "Human operators are fallible, breakable, and manipulable.  Human raters make systematic errors - regular, compactly describable, predictable errors.  To faithfully learn....", date: "13th JAN 2023"},
        {title: "The lethality of training on human feedback", preview: "Human operators are fallible, breakable, and manipulable.  Human raters make systematic errors - regular, compactly describable, predictable errors.  To faithfully learn....", date: "13th JAN 2023"}
    ]

    const title = {front: BlogF, back: BlogB, centre: BlogCentre, color: '#C5D86D', top: -11.719, width: 46.875, height: 46.875, right: 27.344};
    return (
        <div className="Blog-Page" style={{backgroundColor: '#C5D86D'}}>
            <TitleEffect className="title-margin" title ={title}/>
            <div className="blog-main-title">POSTS</div>
            <div className="blog-main-title-underline"></div>
            {blogitems.map((blogitem) => (
                <BlogItem item={blogitem}/>
            ))}
            <Footer color = {'#B7A555'}/>
    </div>
      );
}
 
export default Blog;