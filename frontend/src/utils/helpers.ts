import { format, formatDistance, parseISO } from 'date-fns';

export const formatDate = (date: string | Date): string => {
  return format(typeof date === 'string' ? parseISO(date) : date, 'MMM dd, yyyy');
};

export const formatDatetime = (date: string | Date): string => {
  return format(typeof date === 'string' ? parseISO(date) : date, 'MMM dd, yyyy HH:mm');
};

export const getRelativeTime = (date: string | Date): string => {
  return formatDistance(typeof date === 'string' ? parseISO(date) : date, new Date(), {
    addSuffix: true,
  });
};

export const formatCurrency = (value: number, currency = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatPercentage = (value: number, decimals = 2): string => {
  return `${(value * 100).toFixed(decimals)}%`;
};

export const formatLargeNumber = (value: number): string => {
  if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
  if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
  if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
  return value.toString();
};

export const truncateText = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

export const extractDomain = (url: string): string => {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return url;
  }
};

export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};