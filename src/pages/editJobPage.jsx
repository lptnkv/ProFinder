import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../styles/editJob.module.css";

const currentUserSelector = (state) => state.auth;

export default function EditJobPage() {
    const [jobName, setJobName] = useState("");
    const [jobPrice, setPrice] = useState(0);
    const [jobDescr, setDescr] = useState("");
    const [err, setErr] = useState(null);
    const dispatch = useDispatch();
    const currUser = useSelector((state) => state.auth);
    const creator = useSelector(currentUserSelector);
    console.log(creator);
    const { jobId } = useParams();
    const [job, setJob] = useState(
        useSelector((state) => {
            return state.jobs.find((job) => job.id == jobId);
        })
    );
    console.log("job", job);
    useEffect(() => {
        if (job == undefined) {
            const jobUrl = `http://127.0.0.1:3001/jobs/${jobId}`;
            console.log(jobUrl);
            const jobConfig = {
                method: "get",
                url: jobUrl,
            };
            axios(jobConfig)
                .then((jobFetchResult) => {
                    console.log(jobFetchResult);
                    setJob(jobFetchResult.data);
                    dispatch({
                        type: "jobs/addJob",
                        payload: jobFetchResult.data,
                    });
                })
                .catch((err) => {
                    console.log(err);
                    setErr(err);
                });
        }
    }, []);
    function handleSubmit(event) {
        event.preventDefault();
        const configuration = {
            method: "PATCH",
            url: "http://127.0.0.1:3001/editJob",
            data: {
                jobName,
                jobPrice,
                jobDescr,
                creatorId: creator.id,
            },
        };
        axios(configuration)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                error = new Error();
                console.log(error);
            });
    }
    console.log(job);
    return (
        <>
            <h1>Редактирование</h1>
            <form action="/editJob" method="PATCH" className={styles.form}>
                <input
                    type="text"
                    name="jobName"
                    id="jobName"
                    placeholder="Название"
                    className={styles.jobNameInput}
                    onChange={(e) => setJobName(e.target.value)}
                />
                <textarea
                    name="jobDescr"
                    id="jobDescr"
                    cols="30"
                    rows="10"
                    placeholder="Описание"
                    onChange={(e) => setDescr(e.target.value)}
                ></textarea>
                <input
                    type="number"
                    name="jobPrice"
                    id="jobPrice"
                    placeholder="Цена"
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="submit"
                    value="Изменить"
                    onClick={(e) => handleSubmit(e)}
                />
            </form>
        </>
    );
}
