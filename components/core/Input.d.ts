/** Text input with mono uppercase label. White field, hairline border, ink border on focus. */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  disabled?: boolean;
}