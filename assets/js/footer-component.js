class FooterComponent extends HTMLElement {
    constructor() {
        super();

        // Create wrapper
        this.wrapper = document.createElement('footer');
        const date = new Date();
        this.year = date.getFullYear();
        // Create the template
        this.wrapper.innerHTML = `
            <div class="pb-6">
                <span class="color-gray"><a href="/">jorofo.com</a> | ©${this.year}</span>
            </div>
        `;

        // Attach the wrapper to the element (not shadow DOM)
        this.appendChild(this.wrapper);
    }
}

customElements.define('footer-component', FooterComponent);
