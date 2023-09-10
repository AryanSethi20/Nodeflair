import { useState } from "react"
import JobListing from "./JobListing"

export default function JobDisplay() {
    const [selected, setSelected] = useState(0)
    const [jobTitle, setJobTitle] = useState("")
    
    const jobs = [
        {
            link: "https://nodeflair.com/jobs/hsbc-senior-software-engineering-manager-digital-business-services-168332?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/HSBC.jfif",
            company: "HSBC",
            rating: "3.8",
            specialisation: "Fullstack",
            jobTitle: "Senior Software Engineering Manager - Digital Business Services",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["Strategy", "Jenkins", "API", "CI", "Git", "Java", "Angular", "JavaScript", "React"],
            activeClass: selected === 1 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/google-software-engineer-backend-scalable-content-moderation-168311?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/Google.png",
            company: "Google",
            rating: "4.5",
            specialisation: "Backend",
            jobTitle: "Software Engineer, Backend, Scalable Content Moderation",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["TensorFlow", "Keras", "Java"],
            activeClass: selected === 2 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/activate-interactive-devops-engineer-hc032-168310?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/Activate.png",
            company: "Activate Interactive",
            rating: "2.6",
            specialisation: "DevOps",
            jobTitle: "DevOps Engineer - HC032",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["Container", "GitLab", "Terraform", "Docker", "Jenkins", "Shell Script", "RHEL", "CI", "Ubuntu", "Shell", "Istio", "Linux", "Kubernetes"],
            activeClass: selected === 3 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/hubble-build-qa-engineer-168308?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/Hubble.png",
            company: "Hubble.Build",
            rating: "3.7",
            specialisation: "QA",
            jobTitle: "QA Engineer",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["API", "Flow", "Gauge"],
            activeClass: selected === 4 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/synthesis-lead-software-engineer-168306?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/Synthesis.png",
            company: "Synthesis",
            rating: "5",
            specialisation: "Fullstack",
            jobTitle: "Lead Software Engineer",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["Strategy", "Dask", "Docker", "Analytics", "Pandas", "Kubernetes", "Python"],
            activeClass: selected === 5 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/tiktok-machine-learning-engineer-tiktok-ecommerce-risk-control-2024-start-168259?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/TikTok.png",
            company: "TikTok",
            rating: "3.6",
            specialisation: "Data Sci",
            jobTitle: "Machine Learning Engineer, TikTok eCommerce (Risk Control) - 2024 Start",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["Graph", "Storm", "Hive", "Spark", "Linux", "Hadoop"],
            activeClass: selected === 6 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/hsbc-senior-software-engineering-manager-digital-business-services-168332?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/National University of Singapore.png",
            company: "National University of Singapore",
            rating: "4.1",
            specialisation: "Cybersec Eng",
            jobTitle: "Infrastructure Engineer, National Cybersecurity R&D Lab - School of Computing",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["AWS", "CentOS", "Ubuntu", "KVM", "VMware", "Java", "Linux", "Ansible", "Python", "openstack"],
            activeClass: selected === 7 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/shopee-senior-system-quality-assurance-engineer-168207?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/Shopee.jpg",
            company: "Shopee",
            rating: "3.8",
            specialisation: "QA",
            jobTitle: "Senior System Quality Assurance Engineer",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["Go", "API", "Java", "SQL", "Python"],
            activeClass: selected === 8 ? 'active' : ''
        },
        {
            link: "https://nodeflair.com/jobs/asus-software-architect-168205?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "/Companies/ASUS.png",
            company: "Asus",
            rating: "3.7",
            specialisation: "Fullstack",
            jobTitle: "Software Architect",
            recency: "2 days ago",
            country: "Singapore",
            techStack: ["Analytics", "Rancher", "Kubernetes", "Typescript", "JavaScript", "PostgreSQL", "Redis", "MongoDB", "Python"],
            activeClass: selected === 9 ? 'active' : ''
        }
    ]

    return (
        <div className="jobs-display d-flex">
            <div className="jobs-display-left">
                <JobListing
                    data={jobs[0]}
                    onClick={() => {setSelected(1); setJobTitle(jobs[0].jobTitle)}}
                />
                <JobListing
                    data={jobs[1]}
                    onClick={() => {setSelected(2); setJobTitle(jobs[1].jobTitle)}}
                />
                <JobListing
                    data={jobs[2]}
                    onClick={() => {setSelected(3); setJobTitle(jobs[2].jobTitle)}}
                />
                <JobListing
                    data={jobs[3]}
                    onClick={() => {setSelected(4); setJobTitle(jobs[3].jobTitle)}}
                />
                <JobListing
                    data={jobs[4]}
                    onClick={() => {setSelected(5); setJobTitle(jobs[4].jobTitle)}}
                />
                <JobListing
                    data={jobs[5]}
                    onClick={() => {setSelected(6); setJobTitle(jobs[5].jobTitle)}}
                />
                <JobListing
                    data={jobs[6]}
                    onClick={() => {setSelected(7); setJobTitle(jobs[6].jobTitle)}}
                />
                <JobListing
                    data={jobs[7]}
                    onClick={() => {setSelected(8); setJobTitle(jobs[7].jobTitle)}}
                />
                <JobListing
                    data={jobs[8]}
                    onClick={() => {setSelected(9); setJobTitle(jobs[8].jobTitle)}}
                />
            </div>

            <div className="jobs-display-right">
                <h2 className="heading">
                    {jobTitle}
                </h2>
            </div>
        </div>
    )
}