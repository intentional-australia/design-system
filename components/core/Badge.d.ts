/** Pill badge/tag: mono uppercase, hairline outline. The only pill-radius element in the system. */
export interface BadgeProps {
  tone?: 'neutral' | 'red' | 'positive' | 'negative';
  /** Render against ink surfaces */
  ink?: boolean;
  children?: React.ReactNode;
}