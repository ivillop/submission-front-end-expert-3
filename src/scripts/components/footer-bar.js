class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <p tabindex="0">2023 - bayFood</p>
  </footer>
    `;
  }
}

customElements.define('footer-bar', Footer);
export default Footer;
