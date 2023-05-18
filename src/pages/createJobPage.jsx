import { useState } from "react"
import { Axios } from "axios"

export default function CreateJobPage({props}) {
    const [jobName, setJobName] = useState("")
    const [price, setPrice] = useState(0)
    const [descr, setDescr] = useState("")
    return (
        <>
        <h1>
            Добавить услугу
        </h1>
        <form action="/addJob" method="POST">
            <input type="text" name="jobName" id="jobName" placeholder="Название"/>
        </form>
        </>
    )
}