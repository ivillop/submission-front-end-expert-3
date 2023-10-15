class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <picture>
    <source media="(max-width: 600px)" srcset="../public/images/heros/hero-image.jpg">
    <div class="hero" id="hero">
    <div class="overlay">
    <h2 tabindex="0">Nikmatilah Hidangan Makanan yang Kami Sajikan</h2>
    </div>
    </div>
    </picture>
    `;
  }
}

customElements.define('hero-bar', Hero);
export default Hero;
