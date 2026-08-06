"use client";
import React, { useState, useEffect } from 'react';
import { Link } from '@/lib/react-router-dom-compat';
import Breadcrumb from '../components/BreadCrums';
import { client, urlFor } from '../lib/sanityClient';
import { ALL_POSTS_QUERY } from '../lib/queries';

import { mockBlogs } from '../assets/blogsData';

function convertMockBlog(b) {
  const slug = b.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  return {
    _id: String(b.id),
    title: b.title,
    slug: { current: slug },
    excerpt: b.excerpt,
    coverImage: {
      asset: { url: b.image },
      alt: b.title,
    },
    author: b.author?.name || 'Admin',
    publishedAt: b.date,
    categories: ['Web Development'],
    body: b.content,
  };
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    client
      .fetch(ALL_POSTS_QUERY)
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setBlogs(data);
        } else {
          setBlogs(mockBlogs.map(convertMockBlog));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.warn('Sanity fetch error (using fallback blogs):', err);
        setBlogs(mockBlogs.map(convertMockBlog));
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading, blogs]);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <>
        <Breadcrumb pageName="Blogs" />
        <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto font-syne">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
            Recent blog posts
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col animate-pulse">
                <div className="rounded-xl mb-5 aspect-[1.5/1] bg-gray-200" />
                <div className="h-5 bg-gray-200 rounded mb-3 w-3/4" />
                <div className="h-4 bg-gray-100 rounded mb-2 w-full" />
                <div className="h-4 bg-gray-100 rounded mb-2 w-5/6" />
                <div className="h-4 bg-gray-100 rounded w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Breadcrumb pageName="Blogs" />
        <div className="pt-32 pb-20 text-center text-gray-500 font-syne">
          <p className="text-xl">{error}</p>
          <p className="text-sm mt-2">Check your Sanity project ID and dataset configuration.</p>
        </div>
      </>
    );
  }

  if (blogs.length === 0) {
    return (
      <>
        <Breadcrumb pageName="Blogs" />
        <div className="pt-32 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto font-syne text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Recent blog posts
          </h1>
          <p className="text-gray-500 text-lg">No blog posts yet. Add your first post in Sanity Studio!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Breadcrumb pageName="Blogs" />
      <div className="pt-32 md:pt-12 pb-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto font-syne">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          Recent blog posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {currentBlogs.map((blog) => {
            const imageUrl = blog.coverImage?.asset?.url?.startsWith('http')
              ? blog.coverImage.asset.url
              : blog.coverImage?.asset
              ? urlFor(blog.coverImage).width(600).height(400).fit('crop').auto('format').url()
              : null;

            return (
              <Link
                to={`/blogs/${blog.slug?.current}`}
                key={blog._id}
                className="flex flex-col group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl mb-5 aspect-[1.5/1] bg-gray-100">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={blog.coverImage?.alt || blog.title}
                      className="w-full h-full object-cover transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No image</span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 font-mono-dm leading-tight transition-colors">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-6 font-mono-dm text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>
                <div className="flex items-center mt-auto">
                  <div className="font-mono-dm text-[0.9rem] flex items-center gap-2 text-gray-500">
                    <span>{formatDate(blog.publishedAt)}</span>
                    <span>•</span>
                    <span className="font-semibold text-gray-900">{blog.author || 'Admin'}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2 font-mono-dm">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors text-sm font-medium ${
                    currentPage === page
                      ? 'bg-[#0f172a] text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
