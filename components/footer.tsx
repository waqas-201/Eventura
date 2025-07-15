"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  services: [
    'Corporate Giveaways',
    'Event Management',
    'BTL Activation',
    'POSM',
    'Fabrication',
    'Digital Marketing'
  ],
  company: [
    'About Us',
    'Our Team',
    'Careers',
    'Portfolio',
    'Blog',
    'Contact'
  ],
  support: [
    'Help Center',
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'FAQ'
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop"
          alt="Office building at night"
          fill
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}

            >
              <Image
                src="https://kndugmcaf7.ufs.sh/f/jkhZLgpgpiX3Et0iQrAZa451A9Cw2FDHPdrixfvtjgWpNeVm"
                alt="Eventura"
                width={150}
                height={50}

              />
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Creating meaningful bridges between brands and people through exceptional 
              experiences and innovative solutions.
            </p>
            <div className="space-y-2">
              <motion.div 
                className="flex items-center space-x-2 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="h-4 w-4" />
                <span>sales@eventura.com.pk</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="h-4 w-4" />
                <span>+92 XXX XXXXXXX</span>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2 text-sm text-muted-foreground"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="h-4 w-4" />
                <span>Pakistan</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-emerald-600 transition-colors duration-200"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={social.href}
                    className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-muted-foreground">
            © 2025 Eventura. All rights reserved.
          </p>
          <motion.p 
            className="text-sm text-muted-foreground mt-2 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            Made with ❤️ in Pakistan
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}