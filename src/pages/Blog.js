import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/common.css';
import '../styles/blog.css';
import '../styles/textiles.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Sample blog posts data
  const blogPosts = [
    
    
    {
      
      id: 1,
      title: 'The Art of Banarasi Silk Weaving',
      excerpt: 'Discover the ancient techniques and intricate patterns that make Banarasi silk so special.',
      category: 'Textile Trends',
      image: '/images/Banarasi-saare.png',
      date: 'April 5, 2025',
      author: 'Priya Sharma',
    },
    {
      id: 2,
      title: 'Sustainable Practices in Indian Jewellery Making',
      excerpt: 'How traditional artisans are embracing eco-friendly methods without compromising on beauty.',
      category: 'Jewellery Care',
      image: '/images/making.png',
      date: 'March 22, 2025',
      author: 'Rahul Verma',
    },
    {
      id: 3,
      title: 'Export Documentation: A Complete Guide',
      excerpt: 'Navigate the complex world of export documentation with our step-by-step guide.',
      category: 'Export Process',
      image: '/images/abc.png',
      date: 'March 15, 2025',
      author: 'Ananya Gupta',
    },
    {
      id: 4,
      title: 'The Global Appeal of Pashmina Shawls',
      excerpt: 'Why these luxury items continue to be in high demand across international markets.',
      category: 'Textile Trends',
      image: '/images/Pashmina-Shawl.png',
      date: 'March 8, 2025',
      author: 'Vikram Singh',
    },
    {
      id: 5,
      title: 'Color Trends in Fashion Accessories 2025',
      excerpt: "The palette that's dominating this year's accessories market worldwide.",
      category: 'Fashion Trends',
      image: '/images/bbb.png',
      date: 'February 28, 2025',
      author: 'Meera Kapoor',
    },
    {
      id: 6,
      title: 'The Revival of Meenakari Techniques',
      excerpt: 'How this traditional enameling craft is finding new admirers in contemporary markets.',
      category: 'Jewellery Care',
      image: '/images/ccc.png',
      date: 'February 20, 2025',
      author: 'Arjun Mehta',
    },
  ];

  
  // Categories for filtering
  const categories = ['All', 'Textile Trends', 'Jewellery Care', 'Export Process', 'Fashion Trends'];

  // Handle search and category filtering
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="textiles-banner">
        <img src="/images/ccc.png" className="banner-image" alt="Our Blog" />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1 className="banner-title">Our Blog</h1>
            <p className="banner-desc">Insights, trends, and stories from the world of textiles, jewellery, and export business</p>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="w-full">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-grow">
                  <span className="material-symbols-outlined search-icon">search</span>
                  <input 
                    placeholder="Search articles..." 
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              {/* Category Tabs */}
              <div className="category-tabs mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-tab ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Recent Posts and Subscribe Sections */}
              <div className="blog-info-sections">
                <div className="sidebar-card">
                  <div className="sidebar-content">
                    <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
                    <ul className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <li key={post.id} className="border-b pb-3 last:border-b-0 last:pb-0">
                          <Link to={`/blog/${post.id}`} className="sidebar-link">
                            <h4 className="font-medium line-clamp-2">{post.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="sidebar-card">
                  <div className="sidebar-content">
                    <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest blog posts delivered directly to your inbox
                    </p>
                    <form>
                      <input 
                        type="email" 
                        placeholder="Your email" 
                        className="newsletter-input mb-3" 
                        required
                      />
                      <button type="submit" className="newsletter-button w-full">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog Post Card Component
const BlogPostCard = ({ post }) => {
  return (
    <div className="blog-card">
      <div className="blog-image-container">
        <img 
          src={post.image} 
          alt={post.title} 
          className="blog-image"
        />
        <div className="blog-category-badge">
          {post.category}
        </div>
      </div>
      
      <div className="blog-content">
        <h3 className="blog-title">
          <Link to={`/blog/${post.id}`} className="blog-title-link">
            {post.title}
          </Link>
        </h3>
        <p className="blog-excerpt">
          {post.excerpt}
        </p>
        <div className="blog-meta">
          <div className="blog-meta-item">
            <span className="material-symbols-outlined">calendar_today</span>
            <span>{post.date}</span>
          </div>
          <div className="blog-meta-item">
            <span className="material-symbols-outlined">person</span>
            <span>{post.author}</span>
          </div>
        </div>
      </div>
      
      <div className="blog-footer">
        <Link to={`/blog/${post.id}`} className="blog-read-more">
          Read More 
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default Blog;