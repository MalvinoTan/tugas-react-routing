import img from "../../assets/img/page_not_found.jpg";

/** Styles */
import styles from "./style.module.css";

const NotFound = () => {
    return (
        <>
            <img className={styles.not_found_img} src={img} alt="Not Found" />
        </>
    );
}

export default NotFound;