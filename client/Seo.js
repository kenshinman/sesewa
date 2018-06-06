const SiteUrl = 'http://localhost:3008';

var defaults = {
  title: 'Welcome To Sesewa.org ',                 // Will apply to <title>, Twitter and OpenGraph.
  suffix: 'Your #1 internship website in Nigeria - Find Internships, find interns online',
  separator: '|',

  description: 'Are you a student that wants to get a feel for work at top organizations? These are the top internships in Nigeria today, by popular demand, supplied to you by Sesewa.',   // Will apply to Twitter and OpenGraph.

  meta: {
    keywords: ['sesewa', 'nigerian internship','internship in nigeria', 'undergraduate internship', 'graduate internship', 'jobberman internship']
  },

  twitter: {
    card: 'summary',
    creator: '@sesewa',
    image: SiteUrl + '/img/logo.jpg',
    // etc.
  },

  og: {
    site_name: 'Sesewa',
    image: SiteUrl + '/img/logo.jpg',
    type: 'article'
    // etc.
  }
};

Router.plugin('seo', {
   defaults: defaults
});
