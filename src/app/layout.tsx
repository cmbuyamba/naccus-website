import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saint Ignatius of Loyola Parish',
  description: 'Welcome to Saint Ignatius of Loyola Parish - A place of faith, community, and service.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
