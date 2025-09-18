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


const router = createBrowserRouter([
  {
    path : "/",
    element : <SlashPage/>
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
