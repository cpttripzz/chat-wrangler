<!-- src/pages/PricingPage.vue -->
<template>
  <q-page class="bg-dark">
    <!-- Pricing Header -->
    <section class="pricing-header q-pa-md q-py-xl text-center">
      <div class="container">
        <h1 class="text-h2 text-weight-bold text-gradient q-mb-md">
          Simple, Transparent Pricing
        </h1>
        <p class="text-h6 text-grey-4 q-mb-lg max-w-600 q-mx-auto">
          Choose the perfect plan for your team. All plans include a 14-day free trial.
        </p>

        <!-- Billing Toggle -->
        <div class="row justify-center q-mb-xl">
          <div class="row items-center q-gutter-x-md">
            <span :class="{ 'text-weight-bold': !isAnnual }">Monthly</span>
            <q-toggle
              v-model="isAnnual"
              color="primary"
              size="lg"
            />
            <span :class="{ 'text-weight-bold': isAnnual }">
              Annual
              <q-badge color="primary" text-color="white">Save 20%</q-badge>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-cards q-pa-md q-pb-xl">
      <div class="container">
        <div class="row q-col-gutter-lg justify-center">
          <div
            v-for="plan in pricingPlans"
            :key="plan.name"
            class="col-12 col-md-4"
          >
            <q-card
              :class="[
                'pricing-card',
                { 'popular-plan': plan.isPopular }
              ]"
              bordered
              flat
            >
              <q-card-section>
                <!-- Popular Badge -->
                <q-badge
                  v-if="plan.isPopular"
                  color="primary"
                  class="popular-badge absolute-top-right q-ma-sm"
                  label="Most Popular"
                />

                <!-- Plan Header -->
                <div class="text-h5 q-mb-sm">{{ plan.name }}</div>
                <p class="text-grey-5 q-mb-md">{{ plan.description }}</p>

                <!-- Price -->
                <div class="text-h3 q-mb-md">
                  ${{ isAnnual ? plan.annualPrice : plan.monthlyPrice }}
                  <span class="text-subtitle1 text-grey-5">/month</span>
                </div>

                <q-btn
                  :color="plan.isPopular ? 'primary' : 'dark'"
                  :flat="!plan.isPopular"
                  :outline="!plan.isPopular"
                  class="full-width q-py-sm q-mb-lg"
                  :label="plan.buttonText"
                />

                <!-- Features List -->
                <q-list>
                  <q-item
                    v-for="(feature, index) in plan.features"
                    :key="index"
                    dense
                    class="q-px-none"
                  >
                    <q-item-section avatar class="q-pl-none">
                      <q-icon
                        name="check"
                        color="positive"
                        size="sm"
                      />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-5">
                        {{ feature }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison -->
    <section class="feature-comparison q-pa-md q-py-xl">
      <div class="container">
        <h2 class="text-h4 text-center q-mb-xl">Compare Plans</h2>

        <div class="comparison-table">
          <q-table
            :rows="comparisonFeatures"
            :columns="comparisonColumns"
            row-key="feature"
            flat
            class="bg-dark"
            :pagination="{ rowsPerPage: 0 }"
          >
            <!-- Custom header slots -->
            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class="text-center"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>

            <!-- Custom body slots -->
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="feature" :props="props">
                  {{ props.row.feature }}
                </q-td>
                <q-td
                  v-for="plan in ['basic', 'pro', 'enterprise']"
                  :key="plan"
                  :props="props"
                  class="text-center"
                >
                  <q-icon
                    v-if="typeof props.row[plan] === 'boolean'"
                    :name="props.row[plan] ? 'check' : 'close'"
                    :color="props.row[plan] ? 'positive' : 'negative'"
                  />
                  <span v-else>{{ props.row[plan] }}</span>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </section>

    <!-- FAQs -->
    <section class="faqs q-pa-md q-py-xl">
      <div class="container">
        <h2 class="text-h4 text-center q-mb-xl">Frequently Asked Questions</h2>

        <div class="row justify-center">
          <div class="col-12 col-md-8">
            <q-list padding>
              <q-expansion-item
                v-for="faq in faqs"
                :key="faq.question"
                expand-separator
                class="bg-dark q-mb-md"
                :label="faq.question"
              >
                <q-card>
                  <q-card-section class="text-grey-5">
                    {{ faq.answer }}
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section q-pa-md q-py-xl bg-primary">
      <div class="container text-center">
        <h2 class="text-h3 text-white q-mb-md">Ready to get started?</h2>
        <p class="text-h6 text-white q-mb-lg">
          Start your 14-day free trial today. No credit card required.
        </p>
        <q-btn
          color="white"
          text-color="primary"
          label="Start Free Trial"
          size="lg"
          class="q-px-xl"
          unelevated
        />
      </div>
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

const isAnnual = ref(true)

const pricingPlans = [
  {
    name: 'Basic',
    description: 'Perfect for small teams and startups',
    monthlyPrice: 29,
    annualPrice: 24,
    buttonText: 'Start Free Trial',
    features: [
      'Up to 10 team members',
      '5GB storage',
      'Basic analytics',
      'Email support',
      'API access'
    ]
  },
  {
    name: 'Pro',
    description: 'Best for growing businesses',
    monthlyPrice: 79,
    annualPrice: 64,
    buttonText: 'Start Free Trial',
    isPopular: true,
    features: [
      'Up to 50 team members',
      '50GB storage',
      'Advanced analytics',
      'Priority support',
      'Advanced API access',
      'Custom integrations'
    ]
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    monthlyPrice: 199,
    annualPrice: 159,
    buttonText: 'Contact Sales',
    features: [
      'Unlimited team members',
      'Unlimited storage',
      'Custom analytics',
      '24/7 premium support',
      'Advanced security',
      'Custom development',
      'Dedicated account manager'
    ]
  }
]

const comparisonColumns = [
  {
    name: 'feature',
    label: 'Feature',
    align: 'left',
    field: 'feature'
  },
  {
    name: 'basic',
    label: 'Basic',
    align: 'center',
    field: 'basic'
  },
  {
    name: 'pro',
    label: 'Pro',
    align: 'center',
    field: 'pro'
  },
  {
    name: 'enterprise',
    label: 'Enterprise',
    align: 'center',
    field: 'enterprise'
  }
]

const comparisonFeatures = [
  {
    feature: 'Team members',
    basic: '10',
    pro: '50',
    enterprise: 'Unlimited'
  },
  {
    feature: 'Storage',
    basic: '5GB',
    pro: '50GB',
    enterprise: 'Unlimited'
  },
  {
    feature: 'API Access',
    basic: true,
    pro: true,
    enterprise: true
  },
  {
    feature: 'Custom Integrations',
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    feature: 'Advanced Analytics',
    basic: false,
    pro: true,
    enterprise: true
  },
  {
    feature: 'Custom Development',
    basic: false,
    pro: false,
    enterprise: true
  }
]

const faqs = [
  {
    question: 'How does the 14-day trial work?',
    answer: 'You can try any plan free for 14 days. No credit card required. Cancel anytime during the trial period.'
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.'
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, there are no setup fees or hidden charges. You only pay the advertised price.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our service.'
  }
]
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

.max-w-600 {
  max-width: 600px;
}

.pricing-card {
  height: 100%;
  transition: transform 0.3s ease;
  background: #1e293b;
  position: relative;
}

.pricing-card:hover {
  transform: translateY(-5px);
}

.popular-plan {
  border: 2px solid #1976D2 !important;
}

.popular-badge {
  border-radius: 0 4px 0 4px;
}

/* Custom table styles */
.q-table__card {
  background: #1e293b !important;
}

.q-table th {
  font-weight: bold;
  background: #1e293b;
}

.q-expansion-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .pricing-card {
    margin-bottom: 1rem;
  }
}
</style>
