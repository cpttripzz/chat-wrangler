<template>
  <q-page class="contact-page q-pa-md">
    <!-- Header Section -->
    <div class="text-center q-mb-xl">
      <h1 class="text-h2 text-weight-bold gradient-text q-mb-md">Get in Touch</h1>
      <p class="text-h6 text-grey-4 q-mb-xl">
        Have a question or want to work together? We'd love to hear from you.
      </p>
    </div>

    <div class="row q-col-gutter-xl">
      <!-- Contact Information Card -->
      <div class="col-12 col-md-5">
        <q-card class="contact-info-card bg-dark q-pa-lg">
          <h2 class="text-h4 text-purple-4 q-mb-lg">Contact Information</h2>

          <div class="contact-details q-gutter-y-md">
            <!-- Email -->
            <div class="row items-center q-gutter-x-md">
              <q-icon name="email" color="purple-4" size="sm" />
              <div>
                <p class="text-weight-medium text-purple-3 q-mb-none">Email</p>
                <a href="mailto:contact@quasarlabs.com" class="text-grey-4">
                  contact@quasarlabs.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="row items-center q-gutter-x-md">
              <q-icon name="phone" color="purple-4" size="sm" />
              <div>
                <p class="text-weight-medium text-purple-3 q-mb-none">Phone</p>
                <p class="text-grey-4">+1 (555) 123-4567</p>
              </div>
            </div>

            <!-- Location -->
            <div class="row items-center q-gutter-x-md">
              <q-icon name="location_on" color="purple-4" size="sm" />
              <div>
                <p class="text-weight-medium text-purple-3 q-mb-none">Location</p>
                <p class="text-grey-4">123 Innovation Drive<br>Tech City, TC 12345</p>
              </div>
            </div>

            <!-- Hours -->
            <div class="row items-center q-gutter-x-md">
              <q-icon name="schedule" color="purple-4" size="sm" />
              <div>
                <p class="text-weight-medium text-purple-3 q-mb-none">Business Hours</p>
                <p class="text-grey-4">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="social-links q-mt-xl">
            <h3 class="text-h6 text-purple-4 q-mb-md">Connect With Us</h3>
            <div class="row q-gutter-sm">
              <q-btn round flat color="purple-4" icon="fab fa-linkedin" type="a" href="#" target="_blank" />
              <q-btn round flat color="purple-4" icon="fab fa-twitter" type="a" href="#" target="_blank" />
              <q-btn round flat color="purple-4" icon="fab fa-github" type="a" href="#" target="_blank" />
              <q-btn round flat color="purple-4" icon="fab fa-instagram" type="a" href="#" target="_blank" />
            </div>
          </div>
        </q-card>
      </div>

      <!-- Contact Form -->
      <div class="col-12 col-md-7">
        <q-card class="contact-form-card bg-dark q-pa-lg">
          <h2 class="text-h4 text-purple-4 q-mb-lg">Send us a Message</h2>

          <q-form @submit="onSubmit" class="q-gutter-md">
            <div class="row q-col-gutter-md">
              <!-- Name Field -->
              <div class="col-12 col-sm-6">
                <q-input
                  v-model="formData.name"
                  label="Your Name"
                  filled
                  dark
                  :rules="[val => !!val || 'Name is required']"
                />
              </div>

              <!-- Email Field -->
              <div class="col-12 col-sm-6">
                <q-input
                  v-model="formData.email"
                  label="Email Address"
                  filled
                  dark
                  type="email"
                  :rules="[
                    val => !!val || 'Email is required',
                    val => isValidEmail(val) || 'Please enter a valid email'
                  ]"
                />
              </div>
            </div>

            <!-- Subject Field -->
            <q-input
              v-model="formData.subject"
              label="Subject"
              filled
              dark
              :rules="[val => !!val || 'Subject is required']"
            />

            <!-- Message Field -->
            <q-input
              v-model="formData.message"
              label="Your Message"
              filled
              dark
              type="textarea"
              rows="6"
              :rules="[val => !!val || 'Message is required']"
            />

            <!-- Submit Button -->
            <div class="row justify-end q-mt-md">
              <q-btn
                type="submit"
                label="Send Message"
                color="purple-4"
                :loading="submitting"
                icon-right="send"
                class="q-px-md"
              />
            </div>
          </q-form>
        </q-card>
      </div>
    </div>

    <!-- Success Notification -->
    <q-dialog v-model="showSuccess">
      <q-card class="bg-positive text-white q-pa-md">
        <q-card-section class="row items-center">
          <q-icon name="check_circle" size="md" class="q-mr-sm" />
          <span class="text-h6">Message Sent Successfully!</span>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'ContactPage',

  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      showSuccess: false
    }
  },

  methods: {
    isValidEmail(email) {
      const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(email);
    },

    async onSubmit() {
      this.submitting = true;

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Reset form and show success message
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
        this.showSuccess = true;

        // Hide success message after 3 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      } catch (error) {
        // Handle error
        this.$q.notify({
          type: 'negative',
          message: 'Failed to send message. Please try again.',
          position: 'top'
        });
      } finally {
        this.submitting = false;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a1b3d 50%, #1a1a2e 100%);
}

.gradient-text {
  background: linear-gradient(to right, #ce93d8, #ba68c8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.contact-info-card,
.contact-form-card {
  background: rgba(30, 30, 46, 0.7) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

// Custom styling for form inputs
:deep(.q-field) {
  .q-field__control {
    background: rgba(255, 255, 255, 0.05);
  }

  &.q-field--filled .q-field__control:before {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &.q-field--filled.q-field--focused .q-field__control:before {
    border-bottom: 1px solid #ce93d8;
  }
}
</style>
