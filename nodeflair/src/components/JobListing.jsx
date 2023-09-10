import React from 'react'
import Location from '../assets/Location.jsx'
import TechStack from './TechStack.jsx'

export default function JobListing(props){
    const details = props.data

    function rowTechStack(){
        return details.techStack.map((tech, id) => {
            return (
                <>
                    <TechStack key={id} tech={tech}/>
                </>
            )
        })
    }

    return (
        <>
            <a href={details.link} className="job-listing-link" target="_blank">
            </a>
            <div className="job-listing-container" onClick={props.onClick}>
                <div className={"job-listing card " + details.activeClass}>
                    <div className="job-listing-top-portion">
                        <div className="job-listing-top d-flex">
                            <div className="job-listing-img-container">
                                <img className="logo" src={details.logo} alt="Trust Wallet logo" />
                            </div>

                            <div className="job-listing-desc-container">
                                <p className="job-listing-para paragraph">
                                    <span>{details.company}</span>
                                    <span>{details.rating}&nbsp;★</span>
                                </p>

                                <h2 className="job-listing-title heading">
                                    {details.jobTitle}
                                </h2>
                            </div>

                            <div className="job-listing-specialisation-container">
                                <div className="job-listing-specialisation-tag">
                                    <span> {details.specialisation} </span>
                                </div>
                            </div>
                        </div>

                        <div className="job-listing-middle d-flex">
                            <div className="job-listing-recency-container">
                                <span>
                                    {details.recency}
                                </span>
                            </div>

                            <div className="job-listing-country">
                                <Location />
                                <span> {details.country} </span>
                            </div>
                        </div>
                    </div>

                    <div className="job-listing-bottom-portion">

                        <div className="job-listing-bottom">
                            {rowTechStack()}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}