/** Styles */
import styles from "./style.module.css";

/** Components */
import NavBarAbout from "../../Components/NavBarAbout"

const AboutAuthor = () => {
    return (
        <div className={styles.container_about_app}>
            <NavBarAbout />
            <div className={styles.content}>
                <h2 className={styles.title}>About the Author</h2>
                <p>
                    This app was developed by someone, a self-taught web developer and technical writer.
                </p>
            </div>
        </div>
    );
}

export default AboutAuthor;