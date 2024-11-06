<template>
  <div class="about-page">
    <!-- Animated stars background -->
    <div class="stars-container">
      <div v-for="n in 50" :key="n"
           class="star"
           :style="{
             top: `${Math.random() * 100}%`,
             left: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 2}s`
           }">
      </div>
    </div>

    <!-- Main content -->
    <div class="content-container">
      <!-- Header section -->
      <header class="header">
        <div class="logo-container">
          <span class="sparkle-icon">✨</span>
          <h1>Quasar Labs</h1>
          <span class="star-icon">⭐</span>
        </div>
        <p class="tagline">
          Exploring the boundaries of technology and innovation, one breakthrough at a time.
        </p>
      </header>

      <!-- Mission section -->
      <section class="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Quasar Labs, we're dedicated to pushing the boundaries of what's possible in technology.
          Our team of innovators and dreamers works tirelessly to transform ideas into reality,
          creating solutions that make a difference in the world.
        </p>
      </section>

      <!-- Stats section -->
      <section class="stats-section">
        <div v-for="(stat, index) in stats"
             :key="index"
             class="stat-card">
          <div class="stat-number">{{ stat.number }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </section>

      <!-- Team section -->
      <section class="team-section">
        <h2>Our Team</h2>
        <div class="team-grid">
          <div v-for="(member, index) in team"
               :key="index"
               class="team-member">
            <div class="member-avatar"></div>
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </section>

      <!-- Contact section -->
      <section class="contact-section">
        <h2>Connect With Us</h2>
        <div class="social-links">
          <a v-for="(link, index) in socialLinks"
             :key="index"
             :href="link.url"
             :title="link.name"
             class="social-link">
            <i :class="link.icon"></i>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      stats: [
        { number: '100+', label: 'Projects Completed' },
        { number: '50+', label: 'Team Members' },
        { number: '25+', label: 'Countries Reached' }
      ],
      team: [
        { name: 'Alex Chen', role: 'Founder & CEO' },
        { name: 'Sarah Johnson', role: 'CTO' },
        { name: 'Michael Zhang', role: 'Lead Developer' }
      ],
      socialLinks: [
        { name: 'GitHub', url: '#', icon: 'fab fa-github' },
        { name: 'Twitter', url: '#', icon: 'fab fa-twitter' },
        { name: 'LinkedIn', url: '#', icon: 'fab fa-linkedin' },
        { name: 'Email', url: '#', icon: 'fas fa-envelope' }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #2a1b3d 50%, #1a1a2e 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
}

.stars-container {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: pulse 2s infinite;
  opacity: 0.5;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1rem;
  position: relative;
  z-index: 1;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.logo-container {
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 1rem;
}

.logo-container h1 {
  font-size: 4rem;
  font-weight: bold;
  background: linear-gradient(to right, #9c6eff, #ff68f9);
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 1rem;
}

.sparkle-icon, .star-icon {
  font-size: 1.5rem;
  opacity: 0.8;
}

.tagline {
  font-size: 1.25rem;
  color: #b8b8d4;
  max-width: 600px;
  margin: 0 auto;
}

.mission-section, .team-section {
  background: rgba(42, 27, 61, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 4rem;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.stat-card {
  background: rgba(42, 27, 61, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #9c6eff;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #b8b8d4;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.team-member {
  text-align: center;
}

.member-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9c6eff, #ff68f9);
  margin: 0 auto 1rem;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.social-link {
  color: #b8b8d4;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #9c6eff;
}

@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.8; }
  100% { opacity: 0.3; }
}

@media (max-width: 768px) {
  .logo-container h1 {
    font-size: 3rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
