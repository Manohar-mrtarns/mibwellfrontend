import {createBrowserRouter, RouterProvider} from "react-router-dom"
import SlashPage from "./pages/Slash"
import HomePage from "./pages/Home"
import SignUpPage from "./pages/Signup"
import LoginPage from "./pages/Login"
import DashBoardPage from "./pages/Dashboard"
import "./App.css"
import DashBoardLayout from "./pages/DashboardLayout"
import MoodTrackerPage from "./pages/MoodTraker"
import ZenChatBoatPage from "./pages/ZenChatBot"
import ArticlePage from "./pages/Article"
import ProfilePage from "./pages/Profile"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import HomeArticlePage from "./pages/HomeArticle"
import AiCounsellerPage from "./pages/AiCounseller"


const router = createBrowserRouter([
  {
    path : "/",
    element : <SlashPage/>
  },
   {
    path : "/about",
    element : <AboutPage/>
  },
  {
    path : "/article",
    element : <HomeArticlePage
    />
  },
   {
    path : "/contact",
    element : <ContactPage/>
  },
  {
    path : "/home",
    element : <HomePage/>
  },
  {
    path : "/signup",
    element : <SignUpPage/>
  },
  {
    path : "/login",
    element : <LoginPage/>
  },
  {
    path : "/dashboard",
    element : <DashBoardLayout/>,
    children : [
      {
        index : true,
        element : <DashBoardPage/>
      },
      {
        path:"moodtraker",
        element:<MoodTrackerPage/>
      },
      {
        path:"aicounseller",
        element:<AiCounsellerPage/>
      },
       {
        path:"zenchatbot",
        element:<ZenChatBoatPage/>
      },
       {
        path:"articles",
        element:<ArticlePage/>
      },
       {
        path:"profile",
        element:<ProfilePage/>
      },
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
