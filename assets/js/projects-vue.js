let projectListItem = Vue.component('project-list-item', {
    props: ['name', 'url', 'year', 'role', 'tech', 'designer'],
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggleOpen() {
            if (this.open == true) {
                this.open = false
            } else {
                this.open = true
            }
        }
    },
    template: `
    <li>
        <div class="pb-4">
            <header>
                <h3 class="text-2xl font-semibold"><span class="hover-project" v-bind:class="{'color-accent': open}" @click="toggleOpen">{{name}}</span></h3>
            </header>
            <ul v-if="open == true" class="text-base pb-3 color-gray">
                <li v-if="url">
                    <span class="font-semibold">URL:</span>
                    <span><a target="_blank" :href="url">{{url}}</a></span>
                </li>
                <li v-if="year">
                    <span class="font-semibold">Year:</span>
                    <span>{{year}}</span>
                </li>
                <li v-if="role">
                    <span class="font-semibold">Role:</span>
                    <span>{{role}}</span>
                </li>
                <li v-if="tech">
                    <span class="font-semibold">Tech:</span>
                    <span>{{tech}}</span>
                </li>
                <li v-if="designer">
                    <span class="font-semibold">Designer:</span>
                    <span>{{designer}}</span>
                </li>
            </ul>
        </div>
    </li> 
    `
}) 

new Vue({
    el: '#projects',
    data: function () {
        return {
            projects: [
                {
                    name: 'Hummingbird Strategies LLC',
                    url: 'https://hummingbirdstrategies.com',
                    year: '2021',
                    role: 'Developer',
                    tech: 'HTML, CSS, Javascript, PHP, WordPress',
                    designer: 'Freelancer'
                },
                {
                    name: 'WhizzBang Booking and Management',
                    url: 'https://whizzbangbam.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Javascript, PHP, WordPress',
                    designer: 'John Fowler'
                },
                {
                    name: 'Ritz Carlton - Resident Admin Survey Application',
                    url: '',
                    year: '2020',
                    role: 'Senior Front End Developer',
                    tech: 'HTML, CSS, Javascript, VueJS, PHP, Laravel',
                    designer: 'Crier Media Group'
                },
                {
                    name: 'COVID Accountability Library',
                    url: 'https://covidaccountabilitylibrary.com',
                    year: '2019',
                    role: 'Senior Front End Developer',
                    tech: 'HTML, CSS, Javascript, VueJS, PHP, Laravel',
                    designer: 'Crier Media Group'
                },
                {
                    name: 'Atlas Alerts Dashboard',
                    url: '',
                    year: '2018',
                    role: 'Senior Front End Developer',
                    tech: 'HTML, CSS, Javascript, jQuery, D3.js, PHP, Laravel, Mailgun',
                    designer: 'Crier Media Group'
                },
                {
                    name: 'Keith Albee Performing Arts Center',
                    url: 'http://www.keithalbee.com',
                    year: '2017',
                    role: 'Lead Front End Developer',
                    tech: 'HTML, CSS, Javascript, jQuery, PHP, ExpressionEngine',
                    designer: 'Bulldog Creative Services'
                },
                {
                    name: 'West Virginia Lottery',
                    url: 'https://wvlottery.com',
                    year: '2016',
                    role: 'Lead Front End Developer',
                    tech: 'HTML, CSS, Javascript, jQuery, PHP, ExpressionEngine',
                    designer: 'Bulldog Creative Services'
                },
                {
                    name: 'St. Marys Medical Center',
                    url: 'https://www.st-marys.org',
                    year: '2016',
                    role: 'Lead Front End Developer',
                    tech: 'HTML, CSS, Javascript, jQuery, PHP, ExpressionEngine',
                    designer: 'Bulldog Creative Services'
                },
                {
                    name: 'Heritage Farm Museum',
                    url: 'https://heritagefarmmuseum.com',
                    year: '2015',
                    role: 'Front End Web Developer',
                    tech: 'HTML, CSS, Javascript, jQuery, PHP, ExpressionEngine',
                    designer: 'Bulldog Creative Services'
                },
            ]
        }
    },
    template: `
        <ul>
            <project-list-item 
            v-for="(project, key) in projects" 
            :key="key" 
            :name="project.name"
            :url="project.url"
            :year="project.year"
            :role="project.role"
            :tech="project.tech"
            :designer="project.designer" /> 
        </ul>
    `,
    components: {
        projectListItem
    }
})