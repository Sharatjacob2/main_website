import TitleEffect from "../TitleEffect";
import { ReactComponent as ProjectF } from './PROJECTS f.svg';
import { ReactComponent as ProjectB } from './PROJECTS b.svg';
import { ReactComponent as ProjectCentre } from './Projects Centre.svg';
// import { ReactComponent as Filler } from './Rectangle 44.svg';

import {ReactComponent as FullExplanation} from './Full Explanation.svg';
import {ReactComponent as Kangaroo} from './Kangaroo.svg';
import {ReactComponent as Klarete} from './Klarete.svg';

import './Project.css';
import Footer from "../footer/Footer";

const ProjectItem = (props) => {
    const { title, subtitle, desc, link, linkref, svgName: SvgIcon } = props.item; // Use destructuring, and rename svgName to SvgIcon

    return (
        <div className="project-item">
            <div className="project-text">
                <div className="project-title">{title}</div>
                <div className="project-subtitle">{subtitle}</div>
                <div className="project-desc">{desc}</div>
                <a href={linkref} target="_blank" rel="noopener noreferrer" className="project-link">{link}</a>
            </div>
            <SvgIcon className="project-image"/>
            <div className="project-divider"></div>
        </div>
    );
}


const Project = () => {
    document.body.classList.remove('hide-scrollbars');

    const title = { front: ProjectF, back: ProjectB, centre: ProjectCentre, top: -14.063, right: 0, width: 62.5, height: 54.688 };

    const project_items = [
        { title: "Travelling through Activation Space With a Best-of-N  Jailbreak", subtitle:  "(fellowship)", desc: "Conducted exploratory interpretability research around the Best-of-N jailbreak, discovered by Anthropic, which involved iteratively modifying a harmful prompt (capitalization, swapping, next- letter) until success at the N-th iteration, and visualized activations across layers with 2D and 3D PCA projections. Found that variants of a prompt formed a trajectory in activation space, with the third principal component corresponding to jailbreak tendency, and generalized this across multiple prompts to interpret jailbreak as a perturbation direction.", link: "Report link: Google Doc", linkref: "https://docs.google.com/document/d/1-VCwu-Pgos5N-1sAl97k84IUX3Z1bCi76DA5KPQPXno/edit?usp=sharing", svgName: Klarete, id: 1},

        { title: "LLM SURGERY", subtitle:  "(research hackathon)", desc: "Developed LLM Surgery, aimed to create and utilize LLM agents that could perform various mechanistic interventions on other LLMs. Conducted experiments ranging from an agent unsteering a mechanistically steered model to a neutral state, to an agent performing mechanistic edits to create a custom LLM as per user requirement. Utilized Goodfire’s API along with their pre-defined functions to create the actions the agents would utilize.", link: "Report link: Site Report", linkref: "https://colab.research.google.com/drive/1R_IJgqpEDaRRspKGw7RHsQwSHes_a9iu?usp=sharing", svgName: FullExplanation, id: 2},

        { title: "KANGAROO", subtitle: "(university-funded)", desc: "Developed Kangaroo, an interface using PyTorch, Django, and React which helps the initialization of large language models with the weights of smaller language models to implement interpretability techniques, targeted towards AI alignment researchers.", link: "Notebook link: Google Colab", linkref: "https://colab.research.google.com/drive/1R_IJgqpEDaRRspKGw7RHsQwSHes_a9iu?usp=sharing", svgName: Kangaroo, id: 3},

        { title: "THE FULL EXPLANATION", subtitle: "(self-employed)", desc: "Developed The Full Explanation, an interface using HTML, CSS, JS and Flask, that acts as an wrapper around API calls to Mistral-7B-Instruct, hosted on HuggingFace, which provides explanations for a user’s topics and generates further explanations for complicated terms in any generated explanations recursively. ", link: "Deployed link: Website", linkref: "https://personal-wiki-srgi.onrender.com/", svgName: Klarete, id: 4},

        { title: "APIAYN", subtitle: "(capstone project)", desc: "Covered a systematic review of a type of jailbreak, APIAYN, as part of the BlueDot course, which combined ‘gradually escalating violation’, a Meta-documented jailbreak, and ‘misspellings’, and proved successful in jailbreaking ChatGPT, Meta AI, Mixtral and more.", link: "Post link: Link", linkref: "https://docs.google.com/document/d/1RUVugtgGpXH3TW7glakouRL6eirgfzaWFm7lTujYdus/edit?tab=t.0#heading=h.1zlfsnl8y2zu", svgName: FullExplanation, id: 5},
        
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