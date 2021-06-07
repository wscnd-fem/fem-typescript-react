import * as React from 'react';
import type { Character } from './characters';

type TableProps = { children: React.ReactNode };
type TableRowProps = {
  heading: Capitalize<keyof Character>;
  value: Character[keyof Character];
};

export const Table = ({ children }: TableProps) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
