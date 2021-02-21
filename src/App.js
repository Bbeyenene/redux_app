import "./App.css";
import MyCalc from "./components/myCalc";
import Posts from "./components/posts";
import PostForm from "./components/postform";

function App() {
  return (
    <div className="App">
      <MyCalc />
      <PostForm />
      <Posts />
    </div>
  );
}

export default App;
