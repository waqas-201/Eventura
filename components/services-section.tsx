"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Gift, 
  Calendar, 
  Megaphone, 
  ShoppingBag, 
  Hammer, 
  Palette,
  Search,
  Smartphone
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useRef } from 'react';

const services = [
  {
    icon: Gift,
    title: 'Corporate Giveaways',
    description: 'Employee onboarding kits, promotional gift items, and seasonal gifting solutions tailored to your brand identity.',
    features: ['Employee Onboarding Kits', 'Promotional Items', 'Brand Identity Packaging', 'Seasonal Gifts'],
    image: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Calendar,
    title: 'Event Management',
    description: 'End-to-end planning and execution for corporate events, product launches, and private functions.',
    features: ['Corporate Events', 'Product Launches', 'Private Functions', 'Venue Coordination'],
    image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Megaphone,
    title: 'BTL Activation',
    description: 'Below-the-line marketing campaigns including mall activations, roadshows, and targeted engagement.',
    features: ['Mall Activations', 'Product Sampling', 'Campus Drives', 'Lead Generation'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: ShoppingBag,
    title: 'POSM',
    description: 'Point of sale materials including banners, standees, display units, and in-store branding tools.',
    features: ['Banners & Posters', 'Display Units', 'In-store Signage', 'Creative Concepts'],
    image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Hammer,
    title: 'Fabrication',
    description: 'Custom fabrication services for events, displays, and branded installations.',
    features: ['Event Displays', 'Custom Installations', 'Branded Structures', 'Quality Materials'],
    image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Complete branding solutions including logo design, packaging, and digital branding.',
    features: ['Logo Design', 'Packaging Design', 'Digital Branding', 'Website Development'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Search,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services including SEO, PPC, social media, and email marketing.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media', 'Email Marketing'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  },
  {
    icon: Smartphone,
    title: 'Website Development',
    description: 'Modern, responsive websites that represent your brand and drive business growth.',
    features: ['Responsive Design', 'E-commerce', 'CMS Integration', 'Performance Optimization'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Creative workspace"
          fill
          className="object-cover opacity-5"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive solutions to elevate your brand and create memorable experiences
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <motion.div 
                      className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <service.icon className="h-6 w-6 text-emerald-600" />
                    </motion.div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="text-sm text-muted-foreground flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}