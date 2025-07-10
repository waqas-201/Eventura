"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Target, Users, Award, Heart, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    icon: Heart,
    title: 'Passion',
    description: 'We are driven by genuine love for creativity and meaningful brand connections.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly explore new ideas and cutting-edge solutions for our clients.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We believe in working closely with our clients as trusted partners.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every project, no matter how big or small.'
  },
  {
    icon: Target,
    title: 'Results',
    description: 'We focus on delivering measurable outcomes that drive business growth.'
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We adapt quickly to changing market trends and client needs.'
  }
];

export default function AboutPage() {
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
              About <span className="text-emerald-600">Eventura</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a dynamic and innovative event and branding agency dedicated to 
              creating exceptional experiences that elevate your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a clear vision to craft meaningful bridges between brands and 
                  their audiences, Eventura emerged from a genuine passion for advertising 
                  and creative excellence.
                </p>
                <p>
                  Our journey began with the belief that every brand has a unique story to tell, 
                  and every audience deserves an authentic connection. We&apos;ve grown from a small 
                  team of creative enthusiasts to a comprehensive agency serving clients across Pakistan.
                </p>
                <p>
                  Today, we continue to push boundaries, embrace innovation, and deliver 
                  exceptional results that not only meet but exceed our clients&apos; expectations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="bg-teal-100 dark:bg-teal-900/30 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">100+</div>
                  <div className="text-sm text-muted-foreground">Events Managed</div>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">200+</div>
                  <div className="text-sm text-muted-foreground">Corporate Giveaways</div>
                </div>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">4</div>
                  <div className="text-sm text-muted-foreground">Cities</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients and partners.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Founder</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionary behind Eventura&apos;s success and growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-4xl">SJ</span>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Shehroz Javaid</h3>
                    <p className="text-emerald-600 font-semibold mb-4">Founder & CEO</p>
                    <p className="text-muted-foreground italic text-lg leading-relaxed">
                      &quot;Fueled by a genuine love for advertising, I founded Eventura with a clear vision: 
                      to craft meaningful bridges between brands and the people they want to reach. 
                      Every project we undertake is an opportunity to create something extraordinary.&quot;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}