import { Outlet, useNavigation } from "react-router-dom";
import './Layout.sass'
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = () => {
  const navigation = useNavigation();
  return (
    <div className="Layout">
      <Header id ="Header"/>
        <main className="Main">
            {
                navigation.state === "loading" &&(
                    <div className="Loading">Loading...</div>
                )
            }
            <Outlet />
        </main>
      <Footer className="master"/>
    </div>
  )
}

export default Layout