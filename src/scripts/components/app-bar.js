class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header>
    <h1><a href="">bayFood</a></h1>
    <button id="menu" class="header-menu">☰</button>
    <nav id="drawer" class="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/ivillop">About Us</a></li>
      </ul>
    </nav>
  </header>
    `;
  }
}

customElements.define('app-bar', AppBar);
export default AppBar;
