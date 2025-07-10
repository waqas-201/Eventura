"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Award, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useRef } from 'react';

const locations = ['Karachi', 'Lahore', 'Islamabad', 'Multan'];

export default function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Team collaboration"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Who Are We?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed mb-6"
              >
                At Eventura, we bring creativity, strategy, and execution under one roof to deliver 
                exceptional experiences and solutions that elevate your brand. As a dynamic and 
                innovative event and branding agency, we specialize in creating meaningful connections 
                between businesses and their audiences.
              </motion.p>
            </div>

            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To help businesses connect with their audience in meaningful and memorable ways. 
                    From concept to execution, we're your trusted partner in creating lasting impressions.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
                  <p className="text-muted-foreground">
                    We blend creativity with functionality, ensuring every campaign, design, or event 
                    speaks your brand's language with a keen eye for detail and deep market understanding.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Stats and Locations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Team Image */}
            <motion.div
              style={{ x }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional team meeting"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Our Creative Team</p>
              </div>
            </motion.div>

            {/* Founder Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div 
                      className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white font-bold text-lg">SJ</span>
                    </motion.div>
                    <div>
                      <h4 className="font-semibold">Shehroz Javaid</h4>
                      <p className="text-sm text-muted-foreground">Founder</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">
                    "Fueled by a genuine love for advertising, I founded Eventura with a clear vision: 
                    to craft meaningful bridges between brands and the people they want to reach."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                Our Presence
              </h3>
              <p className="text-muted-foreground mb-4">
                Operating across Pakistan's busiest cities, making every moment matter, everywhere we go.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <motion.div
                    key={location}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(16, 185, 129, 0.1)" }}
                    className="bg-muted/50 rounded-lg p-3 text-center font-medium cursor-pointer transition-colors"
                  >
                    {location}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}