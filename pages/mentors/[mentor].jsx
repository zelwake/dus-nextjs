import Head from 'next/head';

const Mentor = (props) => {

    return (
        <>
            <Head>
                <title>Naše skvělá stránka</title>
            </Head>
            <p>Mentor {props.data.name}</p>
        </>
    );
}

export default Mentor;

export async function getServerSideProps(context) {

    console.log(context.query.mentor)

    const data = await fetch("http://localhost:8080/mentors/" + context.query.mentor).then(res => res.json())

    return {
        props: { data: data }
    };
}