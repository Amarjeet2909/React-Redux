import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Please Wait....</h1>;
  }

  return (
    <div className="App">
      <h1>Welcome to RecruitNXT</h1>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch Todos</button>
      <h2>Product Titles</h2>
      {state.todo.data && state.todo.data.products.map((e) => <li>{e.title}</li>)}
      <h2>Product Description</h2>
      {state.todo.data && state.todo.data.products.map((e) => <li>{e.description}</li>)}
      <h2>Product Price</h2>
      {state.todo.data && state.todo.data.products.map((e) => <li>{e.price}</li>)}
      <h2>Product Rating</h2>
      {state.todo.data && state.todo.data.products.map((e) => <li>{e.rating}</li>)}
    </div>
  );
}

export default App;