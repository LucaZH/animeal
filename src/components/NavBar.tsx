import NavData from "../helpers/NavData";
function NavBar() {
  const navItems = NavData();
  return (
    <nav className="navbar">
      <img src="/img/logo.png" alt="" className="logo" />
      <div className="nav-center">
        {navItems.map((item, index) => (
          <a href={item.url} key={index} className="nav-item">
            {item.title}
          </a>
        ))}
      </div>
      <div className="nav-options">
        <a href="#" className="icon">
          <img src="/img/search.png" alt="search" />
        </a>
        <a href="#" className="icon">
          <img src="/img/user.png" alt="user" />
        </a>
      </div>
    </nav>
  );
}
export default NavBar;
