/** Components */
import Header from "../../Components/Header";
import TodoList from "../../Components/TodoList";
import NavBar from "../../Components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <TodoList />
        </>
    )
}

export default Home;