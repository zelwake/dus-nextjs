import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Layout.module.css"

const Layout = ({ children }) => {
    return (
        <header>
            <Head>
                <title>Naše super stránka</title>
            </Head>

            <nav className={styles.navigation}>
                <Link href="/">Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/mentors">Mentors</Link>
                <Link href="/students">Students</Link>
            </nav>
            {children}
        </header>
    )

}

export default Layout;