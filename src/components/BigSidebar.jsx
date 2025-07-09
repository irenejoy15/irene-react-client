import Wrapper from "../assets/wrappers/BigSidebar"
import Navlinks from "./Navlinks"
import Logo from "./Logo"
import { useDashboardContext } from "../pages/DashboardLayout"
const BigSidebar = () => {
  const {showSideBar} = useDashboardContext();
  return (
    <Wrapper>
        <div className={showSideBar?'sidebar-container':'sidebar-container  show-sidebar'}>
          <div className="content">
            <header>
              <Logo/>
            </header>
            <Navlinks/>
          </div>
        </div>
    </Wrapper>
  )
}

export default BigSidebar
