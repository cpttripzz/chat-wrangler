const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue') ,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'features', component: () => import('pages/FeaturesPage.vue') },
      { path: 'pricing', component: () => import('pages/PricingPage.vue') },
      { path: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'contact', component: () => import('pages/ContactPage.vue') }
    ]
  }
]
export default routes;
