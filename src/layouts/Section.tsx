import { type ReactNode } from 'react';
import { BackgroundDecor } from '../components/BackgroundDecor';

export function Section({
  id,
  children,
  className = '',
  decor = true,
  decorVariant = 'default',
}: {
  id: string;
  children: ReactNode;
  className?: string;
  decor?: boolean;
  decorVariant?: 'default' | 'subtle';
}) {
  return (
    <section
      id={id}
      className={`relative px-edge-sm py-section-sm md:px-edge lg:py-section ${
        decor ? 'overflow-hidden' : ''
      } ${className}`}
    >
      {decor && <BackgroundDecor variant={decorVariant} />}
      <div className="mx-auto w-full max-w-shell">{children}</div>
    </section>
  );
}
