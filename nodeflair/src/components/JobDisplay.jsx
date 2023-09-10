import React, { useState } from "react"
import JobListing from "./JobListing"

export default function JobDisplay() {
    const [selected, setSelected] = useState(0)
    const [jobTitle, setJobTitle] = useState("")
    
    const jobs = [
        {
            link: "https://nodeflair.com/jobs/hsbc-senior-software-engineering-manager-digital-business-services-168332?utm_campaign=job_search&utm_medium=listing&utm_source=nodeflair_jobs",
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaFNVIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a9d9b93acb189e9701c943ac33be01959ecfee9d/HSBC.jfif",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2lRIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--590123e5bd64aa4659e1e5a9722daadeccab5d1a/Google.png",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaUNNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bf5543844b8a4f1806dd63281ebc037e90dfa818/Activate.png",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbTZPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--30dca1c135863d0829508580fd4fe8c887fd19a2/Hubble.png",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBb0tLIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--dffb95d7d10b6659b5fb584bdb82c9196f9d6d20/Synthesis.png",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaE9IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--fab611d616c47fae83fb2ff5668957c35bf0d222/TikTok.png",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbmFIIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--1df3f1687ec436068819a14888bf8700b4c35e6c/National%20University%20of%20Singapore.png",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdGJnIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b40b7f0573f72d510e44d66f7100a29046ff9e86/Shopee.jpg",
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
            logo: "https://nodeflair.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVdPIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9176d9da214bbfbd41af9a9a5b333134bf50a5c6/ASUS.png",
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