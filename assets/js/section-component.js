class SectionComponent extends HTMLElement {
    constructor() {
        super();

        // Attach a shadow DOM to the element
        const shadow = this.attachShadow({ mode: 'open' });

        // Create a style element and include global styles
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css');
            @import url('../../style.css')
        `;

        this.sectionTitle = '';

        // Create wrapper
        this.wrapper = document.createElement('section');
        this.wrapper.className = 'pb-20';

        // Create the template
        this.wrapper.innerHTML = `
            <header class="border-solid border-b mb-6">
                <h2 class="text-base pb-3 uppercase italic font-black">${this.sectionTitle}</h2>
            </header>
            <article>
                <slot></slot>
            </article>
        `;

        // Attach the style and wrapper to the shadow DOM
        shadow.appendChild(style);
        shadow.appendChild(this.wrapper);
    }

    static get observedAttributes() {
        return ['section-title-text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateContent();
    }

    updateContent() {
        this.sectionTitle = this.getAttribute('section-title-text') || 'No Data';
        this.wrapper.querySelector('h2').textContent = this.sectionTitle;
    }
}

customElements.define('section-component', SectionComponent);
