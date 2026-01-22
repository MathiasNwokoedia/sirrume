import { Button } from '../components/Button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Leadership', 'Service Culture', 'Emotional Intelligence', 'Career Development'];

  const articles = [
    {
      title: 'Transforming Service Culture in Nigerian Organizations',
      excerpt: 'Discover the key principles that drive exceptional service delivery and how to implement them in your organization.',
      category: 'Service Culture',
      date: 'January 15, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0cmFpbmluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODkxMDg0MXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Power of Emotional Intelligence in the Workplace',
      excerpt: 'Learn how emotional intelligence can transform your professional relationships and career trajectory.',
      category: 'Emotional Intelligence',
      date: 'January 10, 2026',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1761933799610-c9a75f115794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FjaGluZyUyMG1lbnRvciUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzY4OTIxNDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Building Better Leaders: A Guide for African Professionals',
      excerpt: 'Explore the leadership qualities that drive organizational success and personal growth in the African context.',
      category: 'Leadership',
      date: 'January 5, 2026',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1616804827035-f4aa814c14ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY4OTE0NTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Career Development: Navigating Professional Growth',
      excerpt: 'Strategic approaches to advancing your career and achieving your professional goals in a competitive market.',
      category: 'Career Development',
      date: 'December 28, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzcGVha2VyJTIwc3RhZ2V8ZW58MXx8fHwxNzY4OTk4MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'The Art of Public Speaking and Presentation',
      excerpt: 'Master the skills needed to captivate audiences and deliver impactful presentations with confidence.',
      category: 'Leadership',
      date: 'December 20, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1768508947825-0a63f7c46a2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGF1ZGllbmNlfGVufDF8fHx8MTc2ODkzMTAyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Creating a Culture of Excellence in Your Organization',
      excerpt: 'Practical steps to building and maintaining a high-performance culture that drives results.',
      category: 'Service Culture',
      date: 'December 15, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1622208594659-0f6aa142df7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtaWNyb3Bob25lJTIwaG9zdHxlbnwxfHx8fDE3Njg5OTgzMzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter((article) => article.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-cream">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Insights & Articles</h1>
            <p className="text-xl lg:text-2xl text-charcoal/70">
              Thoughts on leadership, service culture, and professional development from Sir Rume.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white sticky top-[88px] z-40 shadow-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all text-sm ${
                  selectedCategory === category
                    ? 'bg-gold text-charcoal shadow-luxury'
                    : 'bg-cream text-charcoal hover:bg-gold/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <article
                key={index}
                className="bg-cream rounded-2xl shadow-luxury overflow-hidden hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-charcoal px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-charcoal/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-charcoal group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">{article.excerpt}</p>
                  <button className="flex items-center gap-2 text-gold hover:gap-3 transition-all">
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 lg:py-32 bg-charcoal text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6 text-white">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-white/70 mb-10">
              Get the latest insights on leadership, service culture, and professional development delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
              />
              <Button type="submit" variant="primary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gold">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="mb-6 text-charcoal">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Let's work together to build a culture of excellence and service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" onClick={() => onNavigate('bookings')}>
              Book a Session
            </Button>
            <Button variant="outline" onClick={() => onNavigate('contact')}>
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
