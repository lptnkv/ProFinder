import {useSelector} from "react-redux"
import JobItem from "./JobItem"

const selectJobs = state => state.jobs

export default function JobsList(props) {
    const jobs = useSelector(selectJobs)
    console.log(jobs)

    const renderedJobItems = jobs.map(job => {
        return <JobItem key={job.id} job={job}/>
    })

    return <ul className="jobs-list">{renderedJobItems}</ul>
}