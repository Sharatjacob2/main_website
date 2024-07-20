import './TitleEffect.css';

const TitleEffect = (props) => {
    
    const title = props.title;
    document.body.classList.add('hide-scrollbars');
    return(
        <div className='starter'>
        <title.back className='backTitle'/>
        <title.centre className='centreImage' style={{top: `${title.top}vw`, left: `${title.left}vw`, right: `${title.right}vw`, width: `${title.width}vw`, height: `${title.height}vw`}}/>
        <title.front className='frontTitle' style={{top: `${title.titleTop}vw`}}/>
        <div className="underline-title" style={{display: title.display}}></div>
        </div>
    );
}

export default TitleEffect;