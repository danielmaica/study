export interface IListItemLink {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
  style: { color: string; };
}