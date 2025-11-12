import React, { useState } from 'react';
import { Mail, Trophy, Users, Target, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const Home = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'PROFESSIONAL COACHING',
      description: 'One-on-one coaching sessions tailored to your skill level and goals. From beginners to pro drivers.',
      features: ['Personalized training plans', 'Setup optimization', 'Race strategy development']
    },
    {
      id: 2,
      title: 'ESPORTS CONSULTATION',
      description: 'Expert guidance for esports teams and organizations looking to compete at the highest level.',
      features: ['Team strategy', 'Performance analysis', 'Competition preparation']
    },
    {
      id: 3,
      title: 'SETUP ANALYSIS',
      description: 'Detailed analysis of your sim racing setup and telemetry data to maximize performance.',
      features: ['Telemetry review', 'Setup adjustments', 'Track-specific optimization']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Marcus Rodriguez',
      role: 'Amateur Racer',
      text: 'Seb transformed my racing. His insights from F1 combined with his sim racing expertise took me from mid-pack to podium finishes consistently.'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Esports Professional',
      text: 'Working with Seb was game-changing. His strategic approach and attention to detail helped me secure my first championship win.'
    },
    {
      id: 3,
      name: 'David Thompson',
      role: 'Team Manager',
      text: 'Seb\'s experience at the highest level of motorsport is invaluable. He brought our team together and elevated everyone\'s performance.'
    }
  ];

  const achievements = [
    { icon: Trophy, text: 'Formula One Experience', color: 'purple' },
    { icon: Trophy, text: 'Guild Championship Winner', color: 'purple' },
    { icon: Users, text: '10+ Years Experience', color: 'purple' },
    { icon: Target, text: 'Pro & Amateur Coaching', color: 'purple' }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/80 border-b" style={{ borderColor: 'rgba(138, 100, 200, 0.3)' }}>
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="logo-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/jaz2pbzq_White_Transparent.png" 
                alt="Purple Box" 
                className="logo-image"
              />
            </div>
            <div className="flex gap-8 items-center">
              <a href="#about" className="nav-link">ABOUT</a>
              <a href="#services" className="nav-link">SERVICES</a>
              <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
              <a href="#contact" className="btn-primary">CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1743649978995-c76212449e15" 
            alt="Sim Racing" 
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="hero-content">
            <div className="mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/a6e7mcpk_Purple_Transparent.png" 
                alt="Purple Box" 
                style={{ height: '80px', width: 'auto', marginBottom: '2rem' }}
              />
            </div>
            <h1 className="hero-title purple-glow">SEBASTIAN HAWKINS</h1>
            <p className="body-large mt-8 max-w-2xl">Elite sim racing coach with Formula One experience and championship-winning esports expertise.</p>
            <div className="flex gap-6 mt-12">
              <a href="#contact" className="btn-primary">GET IN TOUCH</a>
              <a href="#services" className="btn-secondary">LEARN MORE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Bar */}
      <section className="py-16 achievements-bar">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <Icon className="w-8 h-8" style={{ color: '#8a64c8' }} />
                  <span className="body-medium">{achievement.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-1 mb-8">ABOUT SEB</h2>
              <p className="body-large mb-6">
                With almost a decade of experience in sim racing and esports, Sebastian Hawkins has worked at the pinnacle of motorsport - Formula One.
              </p>
              <p className="body-medium mb-6">
                As the leader who took Guild to the championship in Racing Prodigy's inaugural season, Seb combines real-world motorsport expertise with cutting-edge sim racing knowledge.
              </p>
              <p className="body-medium mb-8">
                From young aspiring drivers to professional racers, Seb's coaching philosophy focuses on data-driven performance improvement and strategic race craft.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 rounded-sm" style={{ background: '#1a1a1a', border: '1px solid rgba(138, 100, 200, 0.4)' }}>
                  <span className="caption">FORMULA ONE</span>
                </div>
                <div className="px-6 py-3 rounded-sm" style={{ background: '#1a1a1a', border: '1px solid rgba(138, 100, 200, 0.4)' }}>
                  <span className="caption">GUILD CHAMPION</span>
                </div>
                <div className="px-6 py-3 rounded-sm" style={{ background: '#1a1a1a', border: '1px solid rgba(138, 100, 200, 0.4)' }}>
                  <span className="caption">ESPORTS EXPERT</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-sm" style={{ border: '4px solid #8a64c8', boxShadow: '0 0 40px rgba(138, 100, 200, 0.5)' }}>
                <img 
                  src="https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/uozunjzz_Screenshot%202025-11-11%20at%2010.16.36%E2%80%AFPM.png" 
                  alt="Sebastian Hawkins" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32" style={{ background: '#1a1a1a' }}>
        <div className="container mx-auto px-8">
          <h2 className="heading-1 mb-16 text-center">SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="card-hover-effect p-8"
                style={{ 
                  background: '#0a0a0a', 
                  border: '1px solid rgba(138, 100, 200, 0.3)',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <h3 className="heading-4 mb-4">{service.title}</h3>
                <p className="body-small mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#8a64c8' }} />
                      <span className="body-small">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-8">
          <h2 className="heading-1 mb-16 text-center">TESTIMONIALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.id}
                className="card-hover-effect p-8"
                style={{ 
                  background: '#1a1a1a', 
                  border: '1px solid rgba(138, 100, 200, 0.3)'
                }}
              >
                <p className="body-medium mb-6 italic">" {testimonial.text} "</p>
                <div className="border-t pt-6" style={{ borderColor: 'rgba(138, 100, 200, 0.3)' }}>
                  <p className="heading-6">{testimonial.name}</p>
                  <p className="caption" style={{ color: '#a89cc2' }}>{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32" style={{ background: '#1a1a1a' }}>
        <div className="container mx-auto px-8 text-center">
          <h2 className="heading-1 mb-8 purple-glow">GET IN TOUCH</h2>
          <p className="body-large mb-12 max-w-2xl mx-auto">
            Ready to take your sim racing to the next level? Let's discuss how we can work together to achieve your goals.
          </p>
          <a 
            href="mailto:seb@sebhawkins.com" 
            className="btn-primary inline-flex items-center gap-3 text-lg px-12 py-6"
          >
            <Mail className="w-6 h-6" />
            EMAIL SEB
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(138, 100, 200, 0.3)' }}>
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="logo-container">
              <img 
                src="https://customer-assets.emergentagent.com/job_f1-simracing-pro/artifacts/jaz2pbzq_White_Transparent.png" 
                alt="Purple Box" 
                style={{ height: '40px', width: 'auto' }}
              />
            </div>
            <p className="body-small">© 2025 Purple Box. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;