import { ChatPage } from "./components/ChatPage";
import Landingpage from "./components/Landingpage";


const Routes=[

    //Main Landing Page
    {
        path:"/", element:(<Landingpage />)
    },


    //Freelancer Interface Route
    // {
    //     path:"/freelancer/signup", element:(<Signup />)
    // },
    // {
    //     path:"/freelancer/login", element:(<Login />)
    // },
    {
        path:"/chatpage", element:(<ChatPage />)
    },
   


]
export default Routes;