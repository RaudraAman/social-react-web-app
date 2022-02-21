import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useAuth } from '../hooks';
import { Home, Login, Settings, UserProfile } from '../pages/index';
import Signup from '../pages/Signup';
import { Loader } from './index';
import Navbar from './Navbar';
// const About = () => {
//   return <h1>About</h1>;
// };
// const UserInfo = () => {
//   return <h1>userinfo</h1>;
// };

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to="/login" />;
}
const Page404 = () => {
  return <h1>Nothing found here...</h1>;
};
function App() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState([true]);
  const auth = useAuth();
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     console.log('response', response);
  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }
  //     setLoading(false);
  //   };
  //   fetchPosts();
  // }, []);
  if (auth.loading) {
    return <Loader />;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={[]} />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/user/fgsagfd" element={<UserInfo />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        {/* <PrivateRoute path="/settings" element={<Settings />} /> */}
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/user/:userId"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
