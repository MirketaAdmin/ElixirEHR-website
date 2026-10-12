/** Joins truthy class names: cn('a', cond && 'b', undefined) → 'a b'. */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
