"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, ArrowRight, Bell } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ComingSoonProps {
  title?: string;
  description?: string;
  features?: string[];
  showNotifyButton?: boolean;
}

export default function ComingSoon({ 
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Stay tuned for updates!",
  features = [],
  showNotifyButton = true
}: ComingSoonProps) {
  return (
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
              {/* Eventura Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <Image
                  src="/Eventura logo 1-01.png"
                  alt="Eventura Logo"
                  width={180}
                  height={60}
                  className="w-44 h-auto mx-auto"
                />
              </motion.div>

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
                <Clock className="h-12 w-12 text-white" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {title}
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {description}
              </p>

              {features.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="text-center">
                      <h3 className="font-semibold mb-2">{feature}</h3>
                    </div>
                  ))}
                </div>
              )}

              {showNotifyButton && (
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Want to be notified when we launch? Get in touch with us!
                  </p>
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    <Bell className="mr-2 h-4 w-4" />
                    Contact Us for Updates
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}