import { useState } from "react";

/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

/** Components */
import InputTodo from "../InputTodo";
import TodoItem from "../TodoItem";

/** Styles */
import styles from "./style.module.css";

import { dataTodos } from "../../dataTodos";

const TodoList = () => {
    const [data, setData] = useState(dataTodos);

    const deleteTodoItem = (id) => {
        const newListTodo = data.filter((item) => item.id !== id);

        setData(newListTodo);
    }

    const addTodoItem = (value) => {
        const newTodo = {
            id: uuidv4(),
            title: value,
            completed: false
        }

        setData([...data, newTodo]);
    }

    const onChangeCheckbox = (e, id) => {
        const newListTodo = data.map((item) => {
            if (item.id === id) {
                return (
                    {
                        id: item.id,
                        title: item.title,
                        completed: e.target.checked
                    }
                );
            }
            else {
                return (
                    {
                        id: item.id,
                        title: item.title,
                        completed: item.completed
                    }
                );
            }
        })

        setData(newListTodo);
    }

    return (
        <div className={styles.container_list}>
            <InputTodo addTodoItem={addTodoItem} />
            {
                data.map((item) => {
                    return (
                        <TodoItem
                            key={item.id}
                            id={item.id}
                            text={item.title}
                            completed={item.completed}
                            deleteTodoItem={deleteTodoItem}
                            onChangeCheckbox={onChangeCheckbox} />
                    );
                })
            }
        </div>
    );
}

export default TodoList;