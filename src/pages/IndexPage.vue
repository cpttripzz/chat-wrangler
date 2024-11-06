<!-- src/pages/IndexPage.vue -->
<template>
  <q-page class="bg-dark">

    <!-- Hero Section -->
    <section class="hero q-pa-md q-py-xl">
      <div class="container text-center">
        <h1 class="text-h2 text-gradient q-mb-md">Transform Your Workflow</h1>
        <p class="text-h6 text-grey-4 q-mb-lg max-w-600 q-mx-auto">
          Experience the next generation of productivity with our innovative solution.
          Streamline your tasks, collaborate seamlessly, and achieve more.
        </p>
        <q-btn color="primary" size="lg" label="Get Started Free" class="q-px-xl q-py-sm" unelevated />
      </div>
    </section>

    <!-- Features Section -->
    <section class="features q-pa-md q-py-xl">
      <div class="container">
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="feature-card bg-dark q-pa-md">
              <q-card-section class="text-center">
                <div class="text-h2 text-primary q-mb-md">⚡</div>
                <div class="text-h6 q-mb-sm">Lightning Fast</div>
                <p class="text-grey-5">
                  Optimized performance that keeps up with your pace.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="feature-card bg-dark q-pa-md">
              <q-card-section class="text-center">
                <div class="text-h2 text-primary q-mb-md">🔒</div>
                <div class="text-h6 q-mb-sm">Secure</div>
                <p class="text-grey-5">
                  Enterprise-grade security to protect your data.
                </p>
              </q-card-section>
            </q-card>
          </div>

          <div class="col-12 col-sm-6 col-md-4">
            <q-card class="feature-card bg-dark q-pa-md">
              <q-card-section class="text-center">
                <div class="text-h2 text-primary q-mb-md">🤝</div>
                <div class="text-h6 q-mb-sm">Collaborative</div>
                <p class="text-grey-5">
                  Work together seamlessly with your team.
                </p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>



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

.max-w-600 {
  max-width: 600px;
}

.feature-card {
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-card:hover {
  transform: translateY(-5px);
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
