"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Calendar, Users, Award, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-emerald-600">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing our successful projects and the impact we've made for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-lg font-semibold mb-1">Happy Clients</div>
              <div className="text-muted-foreground">Across various industries</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-lg font-semibold mb-1">Events Managed</div>
              <div className="text-muted-foreground">Memorable experiences created</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-lg font-semibold mb-1">Corporate Giveaways</div>
              <div className="text-muted-foreground">Thoughtful gifts delivered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-12">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                  <Award className="h-12 w-12 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Portfolio Coming Soon
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We're curating our best work to showcase the amazing projects we've 
                  completed for our clients. From corporate events to digital campaigns, 
                  our portfolio will demonstrate the quality and creativity that defines Eventura.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Event Showcases</h3>
                    <p className="text-sm text-muted-foreground">
                      Stunning visuals from our most successful events and activations
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Brand Campaigns</h3>
                    <p className="text-sm text-muted-foreground">
                      Creative campaigns that drove real results for our clients
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Digital Projects</h3>
                    <p className="text-sm text-muted-foreground">
                      Websites, apps, and digital experiences we've crafted
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Client Testimonials</h3>
                    <p className="text-sm text-muted-foreground">
                      Stories and feedback from our satisfied clients
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Interested in seeing our work? Contact us for a personalized presentation.
                  </p>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Request Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life and create 
              experiences that your audience will remember.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Your Project
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}