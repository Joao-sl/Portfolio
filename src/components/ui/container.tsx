import { cn } from '../../lib/utils';

function Container({ children, className }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('container mx-auto px-4 py-18', className)}>
      {children}
    </div>
  );
}
export { Container };
