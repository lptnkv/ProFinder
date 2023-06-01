import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function SingleJobPage() {
    const dispatch = useDispatch();
    const { jobId } = useParams();
    const [job, setJob] = useState(useSelector(state => {
        // return state.jobs
        return state.jobs.find(job => job.id == jobId);
    }));
    useEffect(() => {
        if (job == null) {
            const jobUrl = `http://127.0.0.1:3001/jobs/${jobId}`
            const jobConfig = {
                method: "get", 
                url: jobUrl
            }
            axios(jobConfig).then(jobFetchResult => {
                console.log(jobFetchResult);
                setJob(jobFetchResult.data);
                dispatch({type: 'jobs/addJob', payload: jobFetchResult.data});
            })
        }
    }, [])
    console.log(job);
    return (
        <div>
            <h1>{job.name}</h1>
            <p>{job.descr}</p>
            <p>Цена: {job.price}</p>
            <p>Позвонить: <a href={"tel:" + job.phone_number}>{job.phone_number}</a></p>
        </div>
    )
}