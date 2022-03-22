import { useState } from "react";

/** Generate Random ID */
import { v4 as uuidv4 } from "uuid";

/** Components */
import NavBarHome from "../../Components/NavBarHome";
import Header from "../../Components/Header";
import InputTodo from "../../Components/InputTodo";
import TodoList from "../../Components/TodoList";

/** Styles */
import styles from "./style.module.css"

const Home = () => {

    const [widthNav, setWidthNav] = useState(0);
    
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: "Mengerjakan Exercise",
            completed: true,
        },
        {
            id: uuidv4(),
            title: "Mengerjakan Assignment",
            completed: false,
        }
    ]);

    const [input, setInput] = useState("");

    return (
        <div className={styles.home}>
            <NavBarHome widthNav={widthNav} setWidthNav={setWidthNav} />
            <Header title="todos" />
            <InputTodo input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </div>
    );
}

export default Home;