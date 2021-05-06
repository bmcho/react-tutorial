import CounterContainer from "./Containers/CounterContainers";
import PostListContainer from "./Containers/PostListContainer";
import { Route } from 'react-router-dom';
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <CounterContainer/>
      <Route path="/" component={PostListPage} exact/>
      <Route path="/:id" component={PostPage}/>
    </>
    // <CounterContainer />    
    // <PostListContainer/>
  );
}

export default App;
