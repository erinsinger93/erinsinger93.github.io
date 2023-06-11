import Component from '@ember/component';

export default Component.extend({
  resumeItems: [
    {
      name: 'reddit',
      asset: '',
      roles: [
        {
          start: 'Jul 2021',
          end: 'Present',
          title: 'Senior Software Engineer - Retention / Onboarding',
          current: true,
          label: 'Senior Software Engineer at Reddit - Retention / Onboarding from July 2021 to present',
          description: [
            'Lead engineer for reddit\'s targeting and throttling service, built from scratch to run features and campaigns on reddit',
            'Frontend web lead for retention / onboarding team',
          ],
        },
      ],
    },
    {
      name: 'linkedin',
      asset: 'assets/linkedin.png',
      roles: [
        {
          start: 'Apr 2019',
          end: 'Jul 2021',
          title: 'Sr Software Engineer - Growth / SEO',
          current: false,
          label: 'Senior Software Engineer at LinkedIn -  Growth/SEO from April 2019 to July 2021',
          description: [
            'Owner of logged-out profile pages',
            'Migrated logged out pages to a more modern FE stack (Dust to Glimmer)',
            'Member of the Intern Hiring Committee and the UI Engineer Interview Question Working Group',
          ],
        },
        {
          start: 'Jun 2018',
          end: 'Apr 2019',
          title: 'Sr Software Engineer - Search',
          current: false,
          label: 'Senior Software Engineer at LinkedIn -  Search from June 2018 to April 2019',
          description: [
            'Led the web effort to move Search on LinkedIn to a new API',
            'Led the effort to address Search web accessibility issues across iOS/Android/Web to achieve accessibility certification (certificate granted 2/25/19)',
            'Platform code reviewer for code changes made to linkedin.com',
          ]
        },
        {
          start: 'Jul 2016',
          end: 'Jun 2018',
          title: 'Software Engineer - Search',
          current: false,
          label: 'Software Engineer at LinkedIn -  Search from July 2016 to June 2018',
          description: [
            'Worked on the web frontend for the redesign of the linkedin.com product (Ember, Handlebars, Sass)',
            'Partnered with Bing to add Bing powered ads to search result pages',
            'Improved Search site speed metrics via lazy loading, occlusion culling, and prefetching',
            'Led the CSS methodology migration to BEM for the Search team',
          ]
        },
      ],
    },
    {
      name: 'truecar',
      asset: 'assets/truecar_car_color.png',
      roles: [
        {
          start: 'Jun 2015',
          end: 'Aug 2015',
          title: 'UI/UX/Frontend Intern',
          current: false,
          label: 'UI/UX/Frontend Intern at Truecar from June 2015 to August 2015',
          description: [
            'Designed and built an interactive frontend prototype for a website where car manufacturers can view performance analytics and manage their TrueCar experience (Ruby on Rails, Sass, HTML)',
            'Won the intern award for “Best Overall Execution”',
          ],
        },
      ],
    },
    {
      name: 'cooliris',
      asset: 'assets/cooliris_sketch.png',
      roles: [
        {
          start: 'Apr 2014',
          end: 'Sept 2014',
          title: 'CSS Developer',
          current: false,
          label: 'CSS Developer Intern at Cooliris from April 2014 to Sept 2014',
          description: [
            'Helped style and design the web application of BeamIt (Sass and Jade)',
            'Helped build the promotional website for BeamIt',
            'Cooliris was acquired by Yahoo in November of 2014',
          ],
        },
      ],
    },
  ],
})