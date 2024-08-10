class ResumeLine extends HTMLElement {
    constructor() {
        super();

        // Initialize default values
        this.jobName = '';
        this.jobTitle = '';
        this.timeSpan = '';

        // Create wrapper
        this.wrapper = document.createElement('li');

        // Create the template
        this.wrapper.innerHTML = `
        <div class="pb-4">
            <header>
                <h3 class="text-2xl font-semibold">${this.jobName}</h3>
            </header>
            <div class="flex justify-between text-base text-gray-500">
                <div>
                    <h4>${this.jobTitle}</h4>
                </div>
                <div>
                    <span>${this.timeSpan}</span>
                </div>
            </div>
        </div>
        `;

        // Attach the wrapper to the element (not shadow DOM)
        this.appendChild(this.wrapper);
    }

    static get observedAttributes() {
        return ['job-name-text', 'job-title-text', 'time-span-text'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateContent();
    }

    updateContent() {
        this.jobName = this.getAttribute('job-name-text') || 'No Data';
        this.jobTitle = this.getAttribute('job-title-text') || 'Missing Data';
        this.timeSpan = this.getAttribute('time-span-text') || 'Missing Data';

        this.wrapper.querySelector('h3').textContent = this.jobName;
        this.wrapper.querySelector('h4').textContent = this.jobTitle;
        this.wrapper.querySelector('span').textContent = this.timeSpan;
    }
}

customElements.define('resume-line', ResumeLine);
