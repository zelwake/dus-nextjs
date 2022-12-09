import { useRouter } from 'next/router';

const Project = () => {

    const query = useRouter()

    console.log(query.query.project)

    return (
        <p>Projekt {query.query.project}</p>
    );
}

export default Project;