"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { 
  Gift, 
  Calendar, 
  Megaphone, 
  ShoppingBag, 
  Hammer, 
  Palette,
  Search,
  Smartphone,
  CheckCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Gift,
    title: 'Corporate Giveaways',
    description: 'Thoughtful corporate gifts that strengthen relationships and enhance brand visibility.',
    features: [
      'Employee Onboarding Kits',
      'Promotional Gift Items',
      'Brand Identity Packaging',
      'Seasonal Gifting Solutions',
      'Custom Merchandise',
      'Executive Gifts'
    ],
    color: 'emerald'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'End-to-end event planning and execution that creates memorable experiences.',
    features: [
      'Corporate Events & Conferences',
      'Product Launches',
      'Private Functions',
      'Venue Coordination',
      'Vendor Management',
      'Guest Experience'
    ],
    color: 'blue'
  },
  {
    icon: Megaphone,
    title: 'BTL Activation',
    description: 'Below-the-line marketing campaigns that drive direct consumer engagement.',
    features: [
      'Mall Activations',
      'Product Sampling',
      'Campus Drives',
      'Roadshows',
      'Lead Generation',
      'Consumer Interaction'
    ],
    color: 'purple'
  },
  {
    icon: ShoppingBag,
    title: 'POSM (Point of Sale Materials)',
    description: 'Eye-catching point of sale materials that boost in-store brand presence.',
    features: [
      'Banners & Posters',
      'Standees & Displays',
      'Shelf Talkers',
      'Wobblers & Hangers',
      'In-store Signage',
      'Creative Concepts'
    ],
    color: 'orange'
  },
  {
    icon: Hammer,
    title: 'Fabrication',
    description: 'Custom fabrication services for events, displays, and branded installations.',
    features: [
      'Event Displays',
      'Custom Installations',
      'Branded Structures',
      'Quality Materials',
      'Professional Finishing',
      'Durable Construction'
    ],
    color: 'red'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Complete branding solutions that communicate your brand story effectively.',
    features: [
      'Logo Design',
      'Packaging Design',
      'Digital Branding',
      'Print Materials',
      'Brand Guidelines',
      'Visual Identity'
    ],
    color: 'pink'
  },
  {
    icon: Search,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies that drive online growth.',
    features: [
      'SEO Optimization',
      'PPC Campaigns',
      'Social Media Marketing',
      'Email Marketing',
      'Content Strategy',
      'Analytics & Reporting'
    ],
    color: 'teal'
  },
  {
    icon: Smartphone,
    title: 'Website Development',
    description: 'Modern, responsive websites that represent your brand and drive conversions.',
    features: [
      'Responsive Design',
      'E-commerce Solutions',
      'CMS Integration',
      'Performance Optimization',
      'SEO-Friendly',
      'Mobile-First Approach'
    ],
    color: 'indigo'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-emerald-600">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to elevate your brand and create 
              meaningful connections with your audience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`h-8 w-8 text-${service.color}-600`} />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 flex-shrink-0`} />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full group-hover:bg-emerald-600 transition-colors">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help elevate your brand and create 
              memorable experiences for your audience.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Contact Us Today
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}