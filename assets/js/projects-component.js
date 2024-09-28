class ProjectLine extends HTMLElement {
    constructor() {
        super();

        // Initialize default values
        this.projectTitle = '';
        this.url = '';
        this.year = '';
        this.role = '';
        this.tech = '';
        this.designer = '';

        // Create wrapper
        this.wrapper = document.createElement('li');

        // Create the template
        this.wrapper.innerHTML = `
            <details class="pb-4">
                <summary>
                    <span class="text-2xl font-semibold hover-project js-projectTitle">${this.projectTitle}</span>
                </summary>
                <div class="details-content js-details-content">
                    <ul class="text-base pb-3 color-gray"></ul>
                </div>
            </details>
        `;

        // Attach the wrapper to the element (not shadow DOM)
        this.appendChild(this.wrapper);
    }

    // Observe specific attributes for changes
    static get observedAttributes() {
        return ['project-title', 'url', 'year', 'role', 'tech', 'designer'];
    }

    // When an attribute changes, trigger content update
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) { // Ensure the change is meaningful
            this.updateContent();
        }
    }

    // Update content without modifying attributes
    updateContent() {
        // Safely read the attributes without modifying them
        this.projectTitle = this.getAttribute('project-title') || 'No Data';
        this.url = this.getAttribute('url');
        this.year = this.getAttribute('year');
        this.role = this.getAttribute('role');
        this.tech = this.getAttribute('tech');
        this.designer = this.getAttribute('designer');

        // Update the title directly
        this.wrapper.querySelector('.js-projectTitle').textContent = this.projectTitle;

        // Create or update list content
        const ul = this.wrapper.querySelector('ul');
        ul.innerHTML = '';  // Clear existing content

        // Dynamically create list items for available data
        if (this.url) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="font-semibold">URL:</span> <span><a target="_blank" class="js-url" href="${this.url}">${this.url}</a></span>`;
            ul.appendChild(li);
        }

        if (this.year) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="font-semibold">Year:</span> <span class="js-year">${this.year}</span>`;
            ul.appendChild(li);
        }

        if (this.role) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="font-semibold">Role:</span> <span class="js-role">${this.role}</span>`;
            ul.appendChild(li);
        }

        if (this.tech) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="font-semibold">Tech:</span> <span class="js-tech">${this.tech}</span>`;
            ul.appendChild(li);
        }

        if (this.designer) {
            const li = document.createElement('li');
            li.innerHTML = `<span class="font-semibold">Designer:</span> <span class="js-designer">${this.designer}</span>`;
            ul.appendChild(li);
        }

        // Set up the click handler again (to ensure it gets applied properly)
        this.wrapper.querySelector('summary').onclick = () => {
            this.slideToggle(this.wrapper.querySelector('.js-details-content'));
        }
    }

    slideToggle(element, duration = 300) {
        if (element.style.display === 'none' || element.style.display === '') {
          this.slideDown(element, duration);
        } else {
          this.slideUp(element, duration);
        }
    }
      
    slideUp(element, duration) {
        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = 'height';
        element.style.transitionDuration = duration + 'ms';
        element.style.overflow = 'hidden';
      
        requestAnimationFrame(() => {
            element.style.height = '0px';
        });
      
        setTimeout(() => {
            element.style.display = 'none';
            element.style.height = '';
            element.style.transitionProperty = '';
            element.style.transitionDuration = '';
            element.style.overflow = '';
        }, duration);
    }
      
    slideDown(element, duration) {
        element.style.display = 'block';
        const height = element.offsetHeight;
        element.style.height = '0px';
        element.style.transitionProperty = 'height';
        element.style.transitionDuration = duration + 'ms';
        element.style.overflow = 'hidden';
      
        requestAnimationFrame(() => {
            element.style.height = height + 'px';
        });
      
        setTimeout(() => {
            element.style.height = '';
            element.style.transitionProperty = '';
            element.style.transitionDuration = '';
            element.style.overflow = '';
        }, duration);
    }
}

customElements.define('project-line', ProjectLine);
