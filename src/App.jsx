import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import {Home, About, ErrorPage, Post, Contact} from "./pages"
import RootLayout from "./layout/RootLayout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="post" element={<Post />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
