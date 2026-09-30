/** Numbered section header: hairline rule, red mono number, display title, optional serif note. */
export interface SectionHeaderProps {
  /** e.g. "01" */
  number?: string;
  title: string;
  /** Editorial italic annotation */
  note?: string;
  ink?: boolean;
}