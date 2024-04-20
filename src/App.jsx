import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {Home, About, ErrorPage, Posts, Contact, PostDetails} from "./pages"
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="posts" element={<Posts />}></Route>
        <Route path="posts/:id" element={<PostDetails />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
