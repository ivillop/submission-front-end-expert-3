class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero" id="hero">
    <div class="overlay">
    <h2 tabindex="0">Nikmatilah Hidangan Makanan yang Kami Sajikan</h2>
    </div>
    </div>
    `;
  }
}

customElements.define('hero-bar', Hero);
export default Hero;
