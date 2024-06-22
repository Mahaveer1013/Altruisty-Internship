import default_poster from '../images/default_hackathon_poster.jpg'

export default function Hackathon(props) {
    
    return (
        <div className="hackathon-comp">
            <div className="hackathon-comp-poster">
                <img src={props.img} alt={default_poster} />
                <div className="poster-title">
                    <h3>{props.title}</h3>
                </div>
            </div>
            <div className="hackathon-comp-dets">
                <div className="title">
                    <h3>{props.title}</h3>
                </div>
                <div className="company-name">
                    <span className="material-symbols-outlined">
                        build
                    </span>
                    <p>{ props.company_name }</p>
                </div>
                <div className='time-n-mode'>
                    <div className="timeline">
                        <div className="circle"></div>
                        <p>{props.timeline}</p>
                    </div>
                    <div className="mode">
                        <span className="material-symbols-outlined">
                            Public
                        </span>
                        <p>{props.mode}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}