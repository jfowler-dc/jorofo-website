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
                <h3 class="text-2xl font-semibold"><span class="hover-project" @click="toggleOpen">{{name}}</span></h3>
            </header>
            <ul v-if="open == true" class="text-base pb-3 color-gray">
                <li v-if="name">
                    <span class="font-semibold">URL:</span>
                    <span><a target="_blank" :href="name">{{name}}</a></span>
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
                    name: 'Untitled Project',
                    url: 'https://testing.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Wordpress, PHP, Javascript',
                    designer: 'John Fowler'
                },
                {
                    name: 'Untitled Project',
                    url: 'https://testing.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Wordpress, PHP, Javascript',
                    designer: 'John Fowler'
                },
                {
                    name: 'Untitled Project',
                    url: 'https://testing.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Wordpress, PHP, Javascript',
                    designer: 'John Fowler'
                },
                {
                    name: 'Untitled Project',
                    url: 'https://testing.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Wordpress, PHP, Javascript',
                    designer: 'John Fowler'
                },
                {
                    name: 'Untitled Project',
                    url: 'https://testing.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Wordpress, PHP, Javascript',
                    designer: 'John Fowler'
                },
                {
                    name: 'Untitled Project',
                    url: 'https://testing.com',
                    year: '2021',
                    role: 'Developer/Designer',
                    tech: 'HTML, CSS, Wordpress, PHP, Javascript',
                    designer: 'John Fowler'
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