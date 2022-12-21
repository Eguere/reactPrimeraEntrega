function NavBar() {
  return (
    <header>
    <nav>
      <ul>
        <li>
          <a href="/">
            <h4>MegaStation</h4>
          </a>
        </li>
        <li>
          <a href="/">Fundas</a>
        </li>
        <li>
          <a href="/">Cargadores</a>
        </li>
        <li>
          <a href="/">Vidrios Templados/Hidrogel</a>
        </li>
        <li>
          <a href="/">Memorias</a>
        </li>
      </ul>
      {/* <CartWidget></CartWidget> */}
      <span>🛒</span>
    </nav>
    </header>
  );
}

export default NavBar;