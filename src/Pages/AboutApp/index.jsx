/** Style */
import styles from "./style.module.css";

/** Components */
import NavBarAbout from "../../Components/NavBarAbout";

const AboutApp = () => {
    return (
        <div className={styles.container_about_app}>
            <NavBarAbout />
            <div className={styles.content}>
                <h2 className={styles.title}>About the App</h2>
                <p>
                    In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. 
                    Once you are done, press the enter key to resubmit. This app will persist your data in the browser 
                    local storage. So whether you reload, close your app or reopened it, you still have access to your 
                    todos items.
                </p>
            </div>
        </div>
    );
}

export default AboutApp;