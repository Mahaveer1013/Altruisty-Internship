import { Link } from "react-router-dom";

export default function Hackathon(props) {

    return (
        <div className="hackathon-comp">
            <div className="title">
                <h3>{props.title}</h3>
            </div>
            <div className="company-name">
                <span className="material-symbols-outlined">
                    build
                </span>
                <p>{props.company_name}</p>
            </div>
            <div className="problem-statement">
                <p className='problem-heading'>Problem Statement:</p>
                <p className='problem'>&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quibusdam dicta sint est neque animi, aut quia, deserunt optio officiis voluptas laborum excepturi fugit vel quisquam nam eveniet molestiae. Dolor, saepe blanditiis odit distinctio quod nostrum! Eius quos quaerat, aspernatur, harum deleniti consectetur illo ad officiis mollitia esse saepe eveniet. </p>
            </div>
            <div className='time-n-view'>
                <div className="timeline">
                    <div className="circle"></div>
                    <p>{props.timeline}</p>
                </div>
                <Link to={`/hackathons/${props.id}`} className="view-btn">
                    View Details
                    <span className="material-symbols-outlined">
                        arrow_forward
                    </span>
                </Link>
            </div>
        </div>
    )
}