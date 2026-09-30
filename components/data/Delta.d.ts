/** Mono change indicator: ▲ green, ▼ red-brown, HOLD grey. */
export interface DeltaProps {
  /** e.g. "4.2 PTS YOY" */
  value?: string;
  direction?: 'up' | 'down' | 'hold';
  ink?: boolean;
}