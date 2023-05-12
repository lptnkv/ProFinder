export default function JobItem({job}) {
    return <>
        <h1>{job.name}</h1>
        <p>{job.descr}</p>
    </>;
}
