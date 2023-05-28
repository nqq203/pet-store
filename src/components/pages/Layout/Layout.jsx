import { Outlet, Link } from "react-router-dom";


const Layout = (props) => {
  const isNavExpanded = props;
  let expanded = isNavExpanded.isNavExpanded;
  console.log("isNavexpanded", expanded);
  return (
    <>
      <nav className={expanded ? "navbar-container expanded" : "navbar-container"}>
        <ul className="navbar-list">
          <li>
            <Link to="/" className="navbar-item">TRANG CHỦ</Link>
          </li>
          <li>
            <Link to="/about-cat" className="navbar-item">SHOP CHO MÈO</Link>
          </li>
          <li>
            <Link to="/about-dog" className="navbar-item">SHOP CHO CHÓ</Link>
          </li>
          <li>
            <Link to="/cat" className="navbar-item">MÈO</Link>
          </li>
          <li>
            <Link to="/dog" className="navbar-item">CHÓ</Link>
          </li>
          <li>
            <Link to="/news" className="navbar-item">TIN TỨC</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;