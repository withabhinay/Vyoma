// import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";

// import Landingpage from "./components/Landingpage";

// const App = () => {
//   return (
//     <>
//      <Landingpage/>
//     </>
//   );
// };

// export default App;


import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Routes from './routes'
function App() {
  const router = createBrowserRouter(Routes)
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App;