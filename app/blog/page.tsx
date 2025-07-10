"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
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
              Our <span className="text-emerald-600">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, tips, and stories from the world of events, branding, and digital marketing.
            </p>
          </motion.div>
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
                  <Calendar className="h-12 w-12 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Coming Soon
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  We're working on bringing you valuable insights, industry trends, 
                  case studies, and expert tips. Our blog will feature stories from 
                  successful campaigns, event management guides, and the latest in 
                  digital marketing strategies.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Event Insights</h3>
                    <p className="text-sm text-muted-foreground">
                      Tips and strategies for successful event planning
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ArrowRight className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Case Studies</h3>
                    <p className="text-sm text-muted-foreground">
                      Real success stories from our client projects
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Clock className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Industry Trends</h3>
                    <p className="text-sm text-muted-foreground">
                      Latest trends in branding and digital marketing
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Want to be notified when we launch? Get in touch with us!
                  </p>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Contact Us for Updates
                  </Button>
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