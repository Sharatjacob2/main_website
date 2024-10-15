import TitleEffect from "../TitleEffect";
import { ReactComponent as ProjectF } from './PROJECTS f.svg';
import { ReactComponent as ProjectB } from './PROJECTS b.svg';
import { ReactComponent as ProjectCentre } from './Projects Centre.svg';
import { ReactComponent as Filler } from './Rectangle 44.svg';
import './Project.css';
import Footer from "../footer/Footer";

const ProjectItem = (props) => {
    const { title, subtitle, desc, link, svgName: SvgIcon } = props.item; // Use destructuring, and rename svgName to SvgIcon

    return (
        <div className="project-item">
            <div className="project-text">
                <div className="project-title">{title}</div>
                <div className="project-subtitle">{subtitle}</div>
                <div className="project-desc">{desc}</div>
                <div className="project-link">{link}</div>
            </div>
            <div className="project-image">
                <SvgIcon />
            </div>
            <div className="project-divider"></div>
        </div>
    );
}


const Project = () => {
    document.body.classList.remove('hide-scrollbars');

    const title = { front: ProjectF, back: ProjectB, centre: ProjectCentre, top: -14.063, right: 0, width: 62.5, height: 54.688 };

    const project_items = [
        { title: "APIAYN", subtitle: "(capstone project)", desc: "Covered a systematic review of a type of jailbreak, APIAYN, as part of the BlueDot course, which combined ‘gradually escalating violation’, a Meta-documented jailbreak, and ‘misspellings’, and proved successful in jailbreaking ChatGPT, Meta AI, Mixtral and more.", link: "Post link: Link", svgName: Filler, id: 1},
        { title: "KLARETE", subtitle: "(self-employed)", desc: "Developed Klarete, a mobile application using Figma and Flutter which maintains an active database of students and clubs within the college, displays statistical data pertaining to both and helps provide clarity to the first-year batch in college.", svgName: Filler, id: 2},
        { title: "THE FULL EXPLANATION", subtitle: "(self-employed)", desc: "Developed The Full Explanation, an interface using HTML, CSS, JS and Flask, that acts as an wrapper around API calls to Mistral-7B-Instruct, hosted on HuggingFace, which provides explanations for a user’s topics and generates further explanations for complicated terms in any generated explanations recursively. ", svgName: Filler, id: 3},
        { title: "KANGAROO", subtitle: "(university-funded)", desc: "Developed Kangaroo, an interface using PyTorch, Django, and React which helps the initialization of large language models with the weights of smaller language models to implement interpretability techniques, targeted towards AI alignment researchers.", svgName: Filler, id: 4},
    ]
    return (
        <div className="Projects-Page" style={{ backgroundColor: '#D7263D' }}>
            <TitleEffect title={title} />
            {project_items.map((project_item) => (
            <ProjectItem item = {project_item}/>
            ))}
            <Footer color={'#2E294E'} />
        </div>
    );
}

export default Project;