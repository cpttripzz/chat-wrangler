<!-- src/pages/FeaturesPage.vue -->
<template>
  <q-page class="bg-dark">
    <!-- Hero Section -->
    <section class="hero-section q-pa-md q-py-xl">
      <div class="container">
        <div class="row items-center">
          <div class="col-12 col-md-6 q-pr-md">
            <h1 class="text-h2 text-weight-bold text-gradient q-mb-md">
              Powerful Features for Modern Teams
            </h1>
            <p class="text-h6 text-grey-4 q-mb-lg">
              Discover all the tools you need to streamline your workflow and boost productivity.
            </p>
            <q-btn
              color="primary"
              label="Start Free Trial"
              class="q-px-xl q-py-sm"
              size="lg"
              unelevated
            />
          </div>
          <div class="col-12 col-md-6 q-pt-md q-pt-md-none">
            <q-img
              src="/api/placeholder/600/400"
              class="rounded-borders"
              alt="Features Overview"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Main Features Grid -->
    <section class="features-grid q-pa-md q-py-xl bg-dark">
      <div class="container">
        <div class="text-center q-mb-xl">
          <h2 class="text-h3 text-weight-bold q-mb-md">Everything You Need</h2>
          <p class="text-h6 text-grey-4">Comprehensive tools for teams of all sizes</p>
        </div>

        <div class="row q-col-gutter-lg">
          <div
            v-for="feature in mainFeatures"
            :key="feature.title"
            class="col-12 col-sm-6 col-md-4"
          >
            <q-card
              class="feature-card bg-dark q-pa-md"
              bordered
              @mouseover="feature.isHovered = true"
              @mouseleave="feature.isHovered = false"
            >
              <q-card-section>
                <div
                  class="text-primary q-mb-md"
                  :class="{ 'animated-icon': feature.isHovered }"
                >
                  <q-icon :name="feature.icon" size="3rem" />
                </div>
                <h3 class="text-h5 q-mb-sm">{{ feature.title }}</h3>
                <p class="text-grey-5">{{ feature.description }}</p>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn
                  flat
                  color="primary"
                  :label="'Learn about ' + feature.title"
                  class="full-width"
                />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Features Tabs -->
    <section class="detailed-features q-pa-md q-py-xl">
      <div class="container">
        <div class="row items-start">
          <div class="col-12 col-md-4 q-pr-md">
            <q-list padding class="rounded-borders">
              <q-item
                v-for="(feature, index) in detailedFeatures"
                :key="feature.title"
                clickable
                v-ripple
                :active="selectedFeature === index"
                active-class="bg-primary text-white"
                @click="selectedFeature = index"
                class="q-mb-sm rounded-borders"
              >
                <q-item-section avatar>
                  <q-icon :name="feature.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ feature.title }}</q-item-label>
                  <q-item-label caption>
                    {{ feature.shortDesc }}
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>

          <div class="col-12 col-md-8 q-pl-md q-mt-md q-mt-md-none">
            <q-card class="bg-dark" bordered>
              <q-card-section>
                <div class="text-h5 q-mb-md">
                  {{ detailedFeatures[selectedFeature].title }}
                </div>
                <p class="text-grey-5">
                  {{ detailedFeatures[selectedFeature].longDesc }}
                </p>
                <div class="row q-col-gutter-sm q-mt-md">
                  <div
                    v-for="benefit in detailedFeatures[selectedFeature].benefits"
                    :key="benefit"
                    class="col-12 col-sm-6"
                  >
                    <div class="row items-center q-gutter-x-sm">
                      <q-icon name="check_circle" color="positive" />
                      <span class="text-grey-4">{{ benefit }}</span>
                    </div>
                  </div>
                </div>
              </q-card-section>
              <q-img
                :src="`/api/placeholder/800/400`"
                class="q-mt-md"
                :alt="detailedFeatures[selectedFeature].title"
              />
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section q-pa-md q-py-xl bg-primary">
      <div class="container text-center">
        <h2 class="text-h3 text-white q-mb-md">Ready to Get Started?</h2>
        <p class="text-h6 text-white q-mb-lg">
          Join thousands of teams already using our platform
        </p>
        <div class="row justify-center q-col-gutter-md">
          <div class="col-auto">
            <q-btn
              color="white"
              text-color="primary"
              label="Start Free Trial"
              class="q-px-xl"
              size="lg"
              unelevated
            />
          </div>
          <div class="col-auto">
            <q-btn
              outline
              color="white"
              label="Contact Sales"
              class="q-px-xl"
              size="lg"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const selectedFeature = ref(0)

const mainFeatures = ref([
  {
    icon: 'dashboard',
    title: 'Smart Dashboard',
    description: 'Get a bird\'s eye view of your entire workflow with customizable dashboards.',
    isHovered: false
  },
  {
    icon: 'group',
    title: 'Team Collaboration',
    description: 'Work together seamlessly with real-time updates and notifications.',
    isHovered: false
  },
  {
    icon: 'analytics',
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive analytics and reporting.',
    isHovered: false
  },
  {
    icon: 'integration_instructions',
    title: 'Easy Integration',
    description: 'Connect with your favorite tools and services effortlessly.',
    isHovered: false
  },
  {
    icon: 'security',
    title: 'Enterprise Security',
    description: 'Keep your data safe with enterprise-grade security features.',
    isHovered: false
  },
  {
    icon: 'support_agent',
    title: '24/7 Support',
    description: 'Get help whenever you need it with our dedicated support team.',
    isHovered: false
  }
])

const detailedFeatures = ref([
  {
    icon: 'dashboard',
    title: 'Smart Dashboard',
    shortDesc: 'Customizable workspace',
    longDesc: 'Create the perfect workspace for your team with customizable dashboards that show exactly what you need.',
    benefits: [
      'Drag-and-drop customization',
      'Real-time updates',
      'Multiple view options',
      'Data visualization'
    ]
  },
  {
    icon: 'group',
    title: 'Team Collaboration',
    shortDesc: 'Work together seamlessly',
    longDesc: 'Enable your team to work together efficiently with real-time collaboration tools and features.',
    benefits: [
      'Real-time messaging',
      'File sharing',
      'Task assignment',
      'Progress tracking'
    ]
  },
  {
    icon: 'analytics',
    title: 'Advanced Analytics',
    shortDesc: 'Data-driven insights',
    longDesc: 'Make informed decisions with comprehensive analytics and reporting tools.',
    benefits: [
      'Custom reports',
      'Performance metrics',
      'Trend analysis',
      'Export capabilities'
    ]
  }
])
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.text-gradient {
  background: linear-gradient(45deg, #1976D2, #9C27B0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-card {
  height: 100%;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.animated-icon {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

/* Ensure proper spacing on mobile */
@media (max-width: 767px) {
  .q-pt-md-none {
    padding-top: 2rem !important;
  }
}
</style>
