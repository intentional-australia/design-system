/** Numbered index table: red mono row numbers, hairline rules. The system's signature list. */
export interface IndexTableProps {
  columns?: string[];
  rows?: { name: string; owner?: string; delta?: string; direction?: 'up' | 'down' | 'hold' }[];
}