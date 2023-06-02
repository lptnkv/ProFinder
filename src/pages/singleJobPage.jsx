import { useSelector, useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";

export default function SingleJobPage() {
    const dispatch = useDispatch();
    const { jobId } = useParams();
    console.log(jobId);
    const [job, setJob] = useState(useSelector(state => {
        // return state.jobs
        return state.jobs.find(job => job.id == jobId);
    }));
    console.log("job", job);
    useEffect(() => {
        if (job == undefined) {
            const jobUrl = `http://127.0.0.1:3001/jobs/${jobId}`;
            console.log(jobUrl);
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
            <h1>{job?.name || 'Название'}</h1>
            <p>{job?.descr || 'Описание'}</p>
            <p>Цена: {job?.price || "Цена"}</p>
            <p>Позвонить: <a href={"tel:" + job?.phone_number || 'номер'}>{job?.phone_number || 'номер'}</a></p>
            <Link to={"/users/" + job?.creator_id}>Профиль специалиста</Link>
        </div>
    )
}