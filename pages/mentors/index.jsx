import Link from 'next/link';
import { useState, useEffect } from 'react';

const Mentors = () => {

    const [mentors, setMentors] = useState([])

    const fetchData = async () => {
        const res = await fetch("http://localhost:8080/mentors")
        const data = await res.json()
        setMentors(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h2>Mentors</h2>
            {mentors.map(mentor => <p key={mentor.id}><Link href={`/mentors/${mentor.id}`}>{mentor.name}</Link></p>)}
        </>
    );
}

export default Mentors;