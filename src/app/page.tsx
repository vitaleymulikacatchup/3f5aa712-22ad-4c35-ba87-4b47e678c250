"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Coffee, Flame, Heart, MapPin, TrendingUp } from "lucide-react";

const assetMap: { id: string; url: string; alt?: string }[] = [{"id":"hero-coffee-beans","url":"https://images.pexels.com/photos/16545956/pexels-photo-16545956.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Elegant stack of white porcelain cups on a clean, minimalist background. Perfect for café or home décor themes."},{"id":"hot-chocolate-drink","url":"https://images.pexels.com/photos/6006665/pexels-photo-6006665.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A delectable coffee topped with whipped cream surrounded by cookies and croissants on a wooden table."},{"id":"espresso-coffee-cup","url":"https://images.pexels.com/photos/2347380/pexels-photo-2347380.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cozy workspace with a cappuccino, laptop, and vintage camera on a wooden desk."},{"id":"mocha-coffee-latte","url":"https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a barista pouring milk to create latte art in a coffee cup."},{"id":"latte-coffee-art","url":"https://images.pexels.com/photos/2074116/pexels-photo-2074116.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of latte art being poured into a coffee cup, showcasing an artistic heart design."},{"id":"biscoff-milkshake","url":"https://images.pexels.com/photos/7091587/pexels-photo-7091587.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A creamy caramel milkshake topped with whipped cream and a biscuit, perfect for a sweet treat."},{"id":"salted-caramel-milkshake","url":"https://images.pexels.com/photos/5947033/pexels-photo-5947033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of hands reaching for a dessert topped with whipped cream beside a bottle of pink milk."},{"id":"chocolate-milkshake-decadent","url":"https://images.pexels.com/photos/13252531/pexels-photo-13252531.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a vibrant milkshake topped with chocolate chips and colorful sprinkles."},{"id":"coffee-shop-interior","url":"https://images.pexels.com/photos/5198144/pexels-photo-5198144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Intimate cafe setting with a neon sign reading 'All you need is love (and cake)'"},{"id":"barista-making-coffee","url":"https://images.pexels.com/photos/17516410/pexels-photo-17516410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A detailed shot of aromatic coffee beans spilling from a transparent glass jar onto a surface."},{"id":"testimonial-1","url":"https://images.pexels.com/photos/712436/pexels-photo-712436.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A young woman smiling while holding a coffee cup in a park during fall."},{"id":"testimonial-2","url":"https://images.pexels.com/photos/925786/pexels-photo-925786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Man in office with coffee, smiling while working at laptop, captures the essence of remote work."},{"id":"testimonial-3","url":"https://images.pexels.com/photos/4827509/pexels-photo-4827509.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Young adults enjoy a relaxed conversation and coffee in a stylish urban café."},{"id":"testimonial-4","url":"https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Man enjoying a coffee break while working in a modern office with laptop and books."},{"id":"coffee-brewing-process","url":"https://images.pexels.com/photos/6271318/pexels-photo-6271318.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Crop unrecognizable male pouring water into manual coffee grinder placed on table before coffee brewing"}];

export default function Home() {
  const resolveAsset = (assetId: string) => {
    const _a = assetMap.find(a => a.id === assetId);
    return {
      url: _a?.url ?? "/public/images/placeholder.webp",
      alt: _a?.alt ?? "Decorative image"
    };
  };

  const heroAsset = resolveAsset("hero-coffee-beans");
  const interiorAsset = resolveAsset("coffee-shop-interior");
  const hotChocolateAsset = resolveAsset("hot-chocolate-drink");
  const espressoAsset = resolveAsset("espresso-coffee-cup");
  const mochaAsset = resolveAsset("mocha-coffee-latte");
  const latteAsset = resolveAsset("latte-coffee-art");
  const biscoffAsset = resolveAsset("biscoff-milkshake");
  const caramelAsset = resolveAsset("salted-caramel-milkshake");
  const chocolateAsset = resolveAsset("chocolate-milkshake-decadent");
  const brewingAsset = resolveAsset("coffee-brewing-process");
  const testimonial1Asset = resolveAsset("testimonial-1");
  const testimonial2Asset = resolveAsset("testimonial-2");
  const testimonial3Asset = resolveAsset("testimonial-3");
  const testimonial4Asset = resolveAsset("testimonial-4");

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Black Coffee"
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Freshly Roasted Coffee"
          description="Experience the perfect blend of flavor and aroma with our premium coffee selection, roasted fresh daily for your ultimate satisfaction."
          tag="Premium Quality"
          tagIcon={Coffee}
          buttons={[
            {
              text: "Shop Now",
              href: "product"
            },
            {
              text: "Explore Menu",
              href: "feature"
            }
          ]}
          imageSrc={heroAsset.url}
          imageAlt={heroAsset.alt}
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Our Coffee Story"
          description="We are passionate about bringing you the finest coffee experience, sourcing premium beans from around the world and roasting them to perfection in small batches."
          tag="About Us"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Beans",
              description: "Sourced directly from the world's finest coffee growing regions",
              icon: MapPin
            },
            {
              title: "Fresh Roasting",
              description: "Roasted in small batches daily to ensure optimal flavor and aroma",
              icon: Flame
            },
            {
              title: "Expert Craftsmanship",
              description: "Every cup is carefully prepared by our skilled baristas",
              icon: Award
            }
          ]}
          imageSrc={interiorAsset.url}
          imageAlt={interiorAsset.alt}
          imagePosition="left"
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Top Categories"
          description="Explore the recent most bought drinks this week"
          features={[
            {
              title: "Hot Chocolate",
              description: "Rich and creamy hot chocolate made with premium cocoa",
              imageSrc: hotChocolateAsset.url,
              imageAlt: hotChocolateAsset.alt
            },
            {
              title: "Espresso Coffee",
              description: "Bold and intense espresso shots for the true coffee lover",
              imageSrc: espressoAsset.url,
              imageAlt: espressoAsset.alt
            },
            {
              title: "Mocha Coffee",
              description: "Perfect blend of coffee and chocolate for a delightful experience",
              imageSrc: mochaAsset.url,
              imageAlt: mochaAsset.alt
            },
            {
              title: "Latte Coffee",
              description: "Smooth and creamy latte with beautiful foam art",
              imageSrc: latteAsset.url,
              imageAlt: latteAsset.alt
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Top Milk Shakes"
          description="Explore the recent most bought shakes this week"
          products={[
            {
              id: "1",
              name: "Biscoff Milkshakes",
              price: "200Af",
              imageSrc: biscoffAsset.url,
              imageAlt: biscoffAsset.alt
            },
            {
              id: "2",
              name: "Salted Caramel Milkshakes",
              price: "200Af",
              imageSrc: caramelAsset.url,
              imageAlt: caramelAsset.alt
            },
            {
              id: "3",
              name: "Decadent Chocolate Milkshakes",
              price: "200Af",
              imageSrc: chocolateAsset.url,
              imageAlt: chocolateAsset.alt
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Our Achievement"
          description="Numbers that showcase our commitment to quality and customer satisfaction"
          tag="Statistics"
          tagIcon={TrendingUp}
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "cups served",
              description: "Happy customers enjoying our premium coffee daily",
              icon: Coffee
            },
            {
              id: "2",
              value: "15",
              title: "years experience",
              description: "Dedicated to perfecting the art of coffee making",
              icon: Award
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real reviews from coffee lovers who choose us every day"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Coffee Enthusiast",
              company: "Marketing Agency",
              rating: 5,
              imageSrc: testimonial1Asset.url,
              imageAlt: testimonial1Asset.alt
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Owner",
              company: "Tech Startup",
              rating: 5,
              imageSrc: testimonial2Asset.url,
              imageAlt: testimonial2Asset.alt
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Designer",
              company: "Creative Studio",
              rating: 5,
              imageSrc: testimonial3Asset.url,
              imageAlt: testimonial3Asset.alt
            },
            {
              id: "4",
              name: "David Kim",
              role: "Project Manager",
              company: "Construction Co",
              rating: 5,
              imageSrc: testimonial4Asset.url,
              imageAlt: testimonial4Asset.alt
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about our coffee and services"
          imageSrc={brewingAsset.url}
          imageAlt={brewingAsset.alt}
          mediaPosition="left"
          faqs={[
            {
              id: "1",
              title: "What makes your coffee special?",
              content: "Our coffee beans are sourced directly from premium growing regions and roasted fresh daily in small batches to ensure optimal flavor and aroma."
            },
            {
              id: "2",
              title: "Do you offer delivery services?",
              content: "Yes, we offer delivery services within the city. Orders are typically delivered within 30-45 minutes during business hours."
            },
            {
              id: "3",
              title: "Can I customize my drink order?",
              content: "Absolutely! We offer various customization options including milk alternatives, sweetness levels, and extra shots to suit your preferences."
            },
            {
              id: "4",
              title: "Do you have dairy-free options?",
              content: "Yes, we offer several dairy-free alternatives including oat milk, almond milk, soy milk, and coconut milk for all our beverages."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Get In Touch"
          description="Have questions about our coffee or want to place a custom order? We'd love to hear from you."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Your Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your coffee preferences or any questions you have...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Black Coffee"
          columns={[
            {
              items: [
                {
                  label: "Mocha Coffee",
                  href: "product"
                },
                {
                  label: "Espresso Coffee",
                  href: "product"
                },
                {
                  label: "Latte Coffee",
                  href: "product"
                },
                {
                  label: "Milk Shakes",
                  href: "product"
                }
              ]
            },
            {
              items: [
                {
                  label: "Menu",
                  href: "feature"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Support",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}