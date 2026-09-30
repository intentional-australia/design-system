/** Primary action button: rectangular (2px radius), red for primary actions only. */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  /** Render against ink (dark) surfaces */
  ink?: boolean;
  disabled?: boolean;
  /** Append a trailing → arrow */
  arrow?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}