import {
  useRef,
  useState,
  type ReactNode,
  type ButtonHTMLAttributes,
  type AnchorHTMLAttributes,
} from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { EASE_SMOOTH } from '../animations/variants';

type Variant = 'primary' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-300 select-none disabled:opacity-60 disabled:pointer-events-none';

const sizes: Record<Size, string> = {
  md: 'h-12 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

const variants: Record<Variant, string> = {
  primary: 'bg-primary text-white shadow-soft hover:shadow-glow',
  ghost:
    'bg-card text-secondary border border-border hover:border-primary/40 hover:text-primary',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  magnetic?: boolean;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & { href?: undefined };
type ButtonAsAnchor = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const {
    variant = 'primary',
    size = 'md',
    icon,
    magnetic = true,
    children,
    ...rest
  } = props;

  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * 0.25);
    y.set(my * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {icon && (
        <motion.span
          className="inline-flex"
          animate={hover ? { x: 4 } : { x: 0 }}
          transition={{ duration: 0.3, ease: EASE_SMOOTH }}
        >
          {icon}
        </motion.span>
      )}
    </span>
  );

  const className = `${base} ${sizes[size]} ${variants[variant]}`;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        reset();
        setHover(false);
      }}
      onMouseEnter={() => setHover(true)}
      style={{ x: sx, y: sy }}
      className="inline-block"
    >
      {'href' in props && props.href ? (
        <a className={className} href={props.href} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {content}
        </a>
      ) : (
        <button className={className} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
          {content}
        </button>
      )}
    </motion.div>
  );
}
