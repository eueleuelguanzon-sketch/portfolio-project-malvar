'use client';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export default function Skeleton({
  className = '',
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
}: SkeletonProps) {
  const baseClasses = 'skeleton';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
  };

  const animationClasses = {
    pulse: 'skeleton',
    wave: '',
    none: '',
  };

  const style: React.CSSProperties = {
    width: width || (variant === 'text' ? '100%' : '200px'),
    height: height || (variant === 'text' ? '1em' : variant === 'circular' ? '200px' : '100px'),
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`}
      style={style}
    />
  );
}

// Pre-built skeleton components for common use cases
export function ProjectCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <Skeleton variant="rectangular" height={200} className="mb-4" />
      <Skeleton variant="text" width="70%" height="24px" className="mb-2" />
      <Skeleton variant="text" width="100%" height="16px" className="mb-2" />
      <Skeleton variant="text" width="80%" height="16px" className="mb-4" />
      <div className="flex gap-2">
        <Skeleton variant="text" width={60} height={32} />
        <Skeleton variant="text" width={60} height={32} />
      </div>
    </div>
  );
}

export function HeroSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Skeleton variant="circular" width={120} height={120} className="mb-6" />
      <Skeleton variant="text" width={300} height={40} className="mb-4" />
      <Skeleton variant="text" width={250} height={28} className="mb-2" />
      <Skeleton variant="text" width={400} height={20} className="mb-6" />
      <div className="flex gap-4">
        <Skeleton variant="rectangular" width={140} height={44} />
        <Skeleton variant="rectangular" width={140} height={44} />
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <Skeleton variant="rectangular" height={400} />
      <div>
        <Skeleton variant="text" width={200} height={36} className="mb-4" />
        <Skeleton variant="text" width="100%" height={16} className="mb-2" />
        <Skeleton variant="text" width="100%" height={16} className="mb-2" />
        <Skeleton variant="text" width="100%" height={16} className="mb-2" />
        <Skeleton variant="text" width="80%" height={16} className="mb-4" />
        <Skeleton variant="rectangular" width={120} height={40} />
      </div>
    </div>
  );
}