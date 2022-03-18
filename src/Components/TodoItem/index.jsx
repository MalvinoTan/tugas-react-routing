/** Styles */
import styles from "./style.module.css";

const TodoItem = ({ id, text, completed, deleteTodoItem, onChangeCheckbox }) => {
    return (
        <div className={styles.todo_item}>
            {
                completed ?
                    <div className={styles.todo_text}>
                        <input className={styles.todo_checkbox} type="checkbox" onChange={(e) => { onChangeCheckbox(e, id) }} checked />
                        <label className={styles.todo_true}>{text}</label>
                    </div>
                    :
                    <div className={styles.todo_text}>
                        <input className={styles.todo_checkbox} type="checkbox" onChange={(e) => { onChangeCheckbox(e, id) }} />
                        <label className={styles.todo_false}>{text}</label>
                    </div>
            }

            <button className={styles.btn_delete} type="button" onClick={() => { deleteTodoItem(id) }}>Delete</button>
        </div>
    );
}

export default TodoItem;

