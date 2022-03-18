import { useState } from "react";

/** Styles */
import styles from "./style.module.css";

const InputTodo = ({ addTodoItem }) => {
    const [input, setInput] = useState("");

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = () => {
        (input === "") ?
            alert("Inputan Tidak Boleh Kosong!!!") :
            addTodoItem(input);
            
        setInput("");
    }

    return (
        <form className={styles.form_input}>
            <input className={styles.input_text_todo} type="text" value={input} placeholder="Add Todo..." onChange={onChangeInput} />
            <button className={styles.btn_submit_todo} type="button" onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default InputTodo;