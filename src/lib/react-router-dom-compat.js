"use client";
import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams, useSearchParams } from 'next/navigation';

// Mock Link
export const Link = forwardRef(({ to, href, children, ...props }, ref) => {
  const destination = to || href || '#';
  return (
    <NextLink ref={ref} href={destination} {...props}>
      {children}
    </NextLink>
  );
});
Link.displayName = 'Link';

// Mock NavLink
export const NavLink = forwardRef(({ to, href, children, className, activeClassName, style, ...props }, ref) => {
  const pathname = usePathname();
  const destination = to || href || '#';
  const isActive = pathname === destination;
  
  // Resolve class names
  let resolvedClassName = className;
  if (typeof className === 'function') {
    resolvedClassName = className({ isActive });
  } else if (isActive && activeClassName) {
    resolvedClassName = `${className || ''} ${activeClassName}`;
  } else if (isActive) {
    resolvedClassName = `${className || ''} active`;
  }

  return (
    <NextLink ref={ref} href={destination} className={resolvedClassName} {...props}>
      {children}
    </NextLink>
  );
});
NavLink.displayName = 'NavLink';

// Mock useNavigate
export function useNavigate() {
  const router = useRouter();
  return (href) => {
    router.push(href);
  };
}

// Mock useParams
export function useParams() {
  return useNextParams() || {};
}

// Mock useLocation
export function useLocation() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  return {
    pathname: pathname || '',
    search: searchParams ? `?${searchParams.toString()}` : '',
    hash: '',
    state: null,
  };
}
