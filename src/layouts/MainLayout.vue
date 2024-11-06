<!-- src/layouts/MainLayout.vue -->
<template>
  <q-layout view="hhh lpr fff" class="bg-dark">
    <!-- Header -->
    <q-header elevated class="bg-dark">
      <q-toolbar class="container">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="mobile-only"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row items-center">
          <router-link to="/" class="text-decoration-none">
            <span class="text-gradient text-h5 text-weight-bold">YourApp</span>
          </router-link>
        </q-toolbar-title>

        <!-- Desktop Navigation -->
        <q-tabs
          v-model="tab"
          class="desktop-only"
          indicator-color="primary"
          active-color="primary"
        >
          <q-route-tab
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            :label="item.label"
          />
        </q-tabs>

        <!-- Action Buttons -->
        <div class="desktop-only q-ml-md row items-center">
          <q-btn
            flat
            dense
            label="Login"
            class="q-mr-sm"
          />
          <q-btn
            unelevated
            color="primary"
            label="Sign Up"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Left Drawer (Mobile Navigation) -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="bg-dark"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item-label header class="text-grey-4">Navigation</q-item-label>

          <q-item
            v-for="item in navigationItems"
            :key="item.label"
            :to="item.to"
            clickable
            v-ripple
          >
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator color="grey-8" class="q-my-md" />

          <q-item-label header class="text-grey-4">Account</q-item-label>

          <q-item clickable v-ripple>
            <q-item-section>Login</q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section>Sign Up</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer class="bg-dark q-py-lg">
      <div class="container">
        <div class="row q-col-gutter-lg">
          <!-- Company Info -->
          <div class="col-12 col-sm-6 col-md-4">
            <div class="text-gradient text-h5 text-weight-bold q-mb-md">YourApp</div>
            <p class="text-grey-5">
              Transform your workflow with our innovative solution.
              Experience the next generation of productivity.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="col-12 col-sm-6 col-md-2">
            <div class="text-weight-bold q-mb-md">Product</div>
            <q-list dense padding>
              <q-item>
                <q-item-section class="text-grey-5">Features</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-5">Pricing</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-5">Documentation</q-item-section>
              </q-item>
            </q-list>
          </div>

          <!-- Company -->
          <div class="col-12 col-sm-6 col-md-2">
            <div class="text-weight-bold q-mb-md">Company</div>
            <q-list dense padding>
              <q-item>
                <q-item-section class="text-grey-5">About</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-5">Blog</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-5">Careers</q-item-section>
              </q-item>
            </q-list>
          </div>

          <!-- Legal -->
          <div class="col-12 col-sm-6 col-md-2">
            <div class="text-weight-bold q-mb-md">Legal</div>
            <q-list dense padding>
              <q-item>
                <q-item-section class="text-grey-5">Privacy</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-5">Terms</q-item-section>
              </q-item>
              <q-item>
                <q-item-section class="text-grey-5">Security</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>

        <q-separator color="grey-8" class="q-my-lg" />

        <div class="row items-center justify-between">
          <div class="text-grey-5">
            © {{ new Date().getFullYear() }} YourApp. All rights reserved.
          </div>
          <div class="row q-gutter-md">
            <q-btn flat round color="grey-5" icon="fab fa-twitter" />
            <q-btn flat round color="grey-5" icon="fab fa-github" />
            <q-btn flat round color="grey-5" icon="fab fa-linkedin" />
          </div>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
const tab = ref('')

const navigationItems = [
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' }
]

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style>
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

.text-decoration-none {
  text-decoration: none;
}

@media (max-width: 1023px) {
  .desktop-only {
    display: none;
  }
}

@media (min-width: 1024px) {
  .mobile-only {
    display: none;
  }
}
</style>
