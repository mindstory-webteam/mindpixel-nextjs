"use client";
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from '@/lib/react-router-dom-compat';
import { PortableText } from '@portabletext/react';
import Breadcrumb from '../components/BreadCrums';
import SEO from '../components/SEO';
import { client, urlFor } from '../lib/sanityClient';
import { POST_BY_SLUG_QUERY, RECENT_POSTS_QUERY } from '../lib/queries';

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// Custom Portable Text components matching the site's style
const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-gray-600 text-lg leading-[1.8]">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-5 font-syne">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[26px] font-bold text-gray-900 mt-10 mb-4 font-syne">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-bold text-gray-900 mt-8 mb-3 font-syne">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-6 my-8 italic text-gray-500 text-xl leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    underline: ({ children }) => <span className="underline">{children}</span>,
    link: ({ value, children }) => {
      const target = value?.blank ? '_blank' : '_self';
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-gray-900 underline underline-offset-2 hover:text-gray-600 transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-3 my-6 text-gray-600 marker:text-gray-400">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-3 my-6 text-gray-600">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-lg leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="text-lg leading-relaxed">{children}</li>,
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value).width(900).auto('format').url();
      return (
        <figure className="my-10">
          <img
            src={imageUrl}
            alt={value.alt || ''}
            className="w-full rounded-2xl object-cover"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-400 mt-3 font-mono-dm">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default function BlogDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [quoteText, setQuoteText] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    Promise.all([
      client.fetch(POST_BY_SLUG_QUERY, { slug }),
      client.fetch(RECENT_POSTS_QUERY, { slug })
    ])
      .then(([postData, recentData]) => {
        setBlog(postData || null);
        setRecentPosts(recentData || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Sanity fetch error:', err);
        setError('Failed to load blog post. Please try again later.');
        setBlog(null);
        setRecentPosts([]);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, blog]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blogs?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    if (quoteText.trim()) {
      const waUrl = `https://wa.me/918281610051?text=${encodeURIComponent(quoteText)}`;
      window.open(waUrl, '_blank');
      setQuoteText('');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa]">
        <Breadcrumb pageName="Details" />
        <div className="pt-16 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto animate-pulse">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-6" />
              <div className="h-5 bg-gray-100 rounded w-full mb-2" />
              <div className="w-full aspect-[2/1] rounded-[2rem] bg-gray-200 my-10" />
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="h-64 bg-gray-200 rounded-3xl mb-8" />
              <div className="h-96 bg-gray-200 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Breadcrumb pageName="Details" />
        <div className="pt-32 pb-20 text-center text-2xl font-syne text-gray-500">
          {error || 'Blog post not found'}
        </div>
      </>
    );
  }

  const coverImageUrl = blog.coverImage?.asset?.url?.startsWith('http')
    ? blog.coverImage.asset.url
    : blog.coverImage?.asset
    ? urlFor(blog.coverImage).width(1200).height(600).fit('crop').auto('format').url()
    : null;

  return (
    <div className="bg-[#fafbfc] min-h-screen">
      <SEO
        title={blog.seoTitle || `${blog.title} | MyndPixel`}
        description={blog.seoDescription || blog.excerpt}
        type="article"
        canonicalUrl={blog.canonicalUrl}
      />
      <Breadcrumb pageName="Details" />

      <div className="pt-16 pb-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* MAIN CONTENT AREA */}
          <div className="col-span-1 lg:col-span-8">
            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 font-syne">
              <div className="text-left mb-10">
                {blog.categories?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-xs font-bold uppercase tracking-widest text-[#f37728] bg-orange-50 px-4 py-1.5 rounded-full font-mono-dm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                  {blog.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-500 mb-8 font-mono-dm">
                  {blog.excerpt}
                </p>
                <div className="text-gray-400 font-mono-dm text-sm flex items-center justify-start gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span>{formatDate(blog.publishedAt)}</span>
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  <span>{blog.author || 'Admin'}</span>
                </div>
              </div>

              {coverImageUrl && (
                <div className="w-full aspect-[2/1] rounded-[2rem] overflow-hidden mb-12 bg-gray-100">
                  <img
                    src={coverImageUrl}
                    alt={blog.coverImage?.alt || blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="font-mono-dm max-w-none">
                {blog.body ? (
                  <PortableText value={blog.body} components={portableTextComponents} />
                ) : (
                  <p className="text-gray-400 italic">This post has no content yet.</p>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-1 lg:col-span-4 space-y-10">

            {/* Search Widget */}
            <div className="bg-[#6a357b] rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-4 font-syne relative z-10">Search</h3>
              <div className="w-full h-[1px] bg-white/20 mb-8 relative z-10">
              </div>

              <form onSubmit={handleSearch} className="relative z-10">
                <div className="relative flex items-center bg-white rounded-full p-1.5 pl-6 shadow-inner">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full bg-transparent outline-none text-gray-600 font-mono-dm text-sm placeholder-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="w-12 h-12 flex-shrink-0 bg-[#f37728] rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#f37728] mb-4 font-syne">Recent Posts</h3>
              <div className="w-full h-[1px] bg-gray-200 mb-8">
              </div>

              <div className="space-y-6">
                {recentPosts.length > 0 ? (
                  recentPosts.map((post) => (
                    <Link
                      to={`/blogs/${post.slug?.current || post.slug}`}
                      key={post._id}
                      className="flex items-center gap-4 group bg-[#fafbfc] p-3 rounded-2xl transition-all hover:shadow-md"
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-200">
                        {post.coverImage ? (
                          <img
                            src={urlFor(post.coverImage).width(200).height(200).fit('crop').url()}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#6a357b]/10" />
                        )}
                      </div>
                      <div className="flex-col justify-center">
                        <h4 className="font-bold text-gray-900 font-syne text-[15px] leading-tight mb-2 group-hover:text-[#f37728] transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-gray-400 text-xs font-mono-dm gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-400 font-mono-dm text-sm italic">No recent posts found.</p>
                )}
              </div>
            </div>

            {/* Leave a Quote Widget */}
            <div className="bg-[#f37728] rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-4 font-syne relative z-10">Leave a Quote</h3>
              <div className="w-full h-[1px] bg-white/20 mb-6 relative z-10"></div>

              <form onSubmit={handleQuoteSubmit} className="relative z-10">
                <textarea
                  placeholder="Type your message here..."
                  className="w-full bg-white text-gray-900 placeholder-gray-400 border border-transparent rounded-2xl p-4 outline-none font-mono-dm text-sm resize-none h-28 mb-4 focus:border-white transition-all shadow-inner"
                  value={quoteText}
                  onChange={(e) => setQuoteText(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white font-bold font-syne py-3 rounded-full  transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
