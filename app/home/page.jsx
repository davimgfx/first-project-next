import axios from "axios";

const getPost = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return data
};

const Home = async () => {
  const todo = await getPost()
  console.log(todo)
  return <div>page</div>;
};

export default Home;
