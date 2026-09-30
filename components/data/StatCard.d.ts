/**
 * Scorecard stat: mono label, display or condensed-numeral value, optional delta.
 */
export interface StatCardProps {
  label: string;
  value: string;
  /** Use Founders X Cond oversized numeral style */
  big?: boolean;
  /** e.g. "0.6 VS LAST QTR" */
  delta?: string;
  deltaDirection?: 'up' | 'down' | 'hold';
  note?: string;
  ink?: boolean;
}