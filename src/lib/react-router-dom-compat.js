"use client";
import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { useRouter, usePathname, useParams as useNextParams, useSearchParams } from 'next/navigation';
import { usePageTransition } from '@/components/TransitionProvider';

// Mock Link with page transition integration
export const Link = forwardRef(({ to, href, onClick, children, ...props }, ref) => {
  const pathname = usePathname();
  const destination = to || href || '#';
  const transition = usePageTransition();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (
      !destination ||
      destination === '#' ||
      destination.includes('#') ||
      destination === pathname ||
      destination.startsWith('http') ||
      destination.startsWith('mailto:') ||
      destination.startsWith('tel:')
    ) {
      return;
    }

    if (transition?.navigateTo) {
      e.preventDefault();
      transition.navigateTo(destination);
    }
  };

  return (
    <NextLink ref={ref} href={destination} onClick={handleClick} {...props}>
      {children}
    </NextLink>
  );
});
Link.displayName = 'Link';

// Mock NavLink with page transition integration
export const NavLink = forwardRef(({ to, href, onClick, children, className, activeClassName, style, ...props }, ref) => {
  const pathname = usePathname();
  const destination = to || href || '#';
  const isActive = pathname === destination;
  const transition = usePageTransition();

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;

    if (
      !destination ||
      destination === '#' ||
      destination.includes('#') ||
      destination === pathname ||
      destination.startsWith('http') ||
      destination.startsWith('mailto:') ||
      destination.startsWith('tel:')
    ) {
      return;
    }

    if (transition?.navigateTo) {
      e.preventDefault();
      transition.navigateTo(destination);
    }
  };

  let resolvedClassName = className;
  if (typeof className === 'function') {
    resolvedClassName = className({ isActive });
  } else if (isActive && activeClassName) {
    resolvedClassName = `${className || ''} ${activeClassName}`;
  } else if (isActive) {
    resolvedClassName = `${className || ''} active`;
  }

  return (
    <NextLink ref={ref} href={destination} onClick={handleClick} className={resolvedClassName} {...props}>
      {children}
    </NextLink>
  );
});
NavLink.displayName = 'NavLink';

// Mock useNavigate with page transition integration
export function useNavigate() {
  const transition = usePageTransition();
  const router = useRouter();

  return (href) => {
    if (transition?.navigateTo && href && !href.includes('#')) {
      transition.navigateTo(href);
    } else {
      router.push(href);
    }
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
