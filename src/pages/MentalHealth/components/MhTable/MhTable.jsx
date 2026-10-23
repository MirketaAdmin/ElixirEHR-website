import { cn } from '../../../../utils/cn';
import styles from './MhTable.module.css';

/**
 * The frame's reference table (instruments, billing codes): a tinted caps header, white rows on
 * hairlines, the first column in bold purple. `widths` sets each column's px width (the last
 * column takes the rest); a row may be `{ cells, highlight }` to get the lime tint.
 */
function MhTable({ columns, rows, widths, labelledBy, className }) {
  return (
    <div className={cn(styles.wrap, className)}>
      <table className={styles.table} aria-labelledby={labelledBy}>
        <colgroup>
          {columns.map((column, index) => (
            <col key={column} style={widths[index] ? { width: `${widths[index]}px` } : undefined} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const cells = Array.isArray(row) ? row : row.cells;
            return (
              <tr key={cells[0]} className={cn(!Array.isArray(row) && row.highlight && styles.highlight)}>
                {cells.map((cell, index) =>
                  index === 0 ? (
                    <th key={cell} scope="row">
                      {cell}
                    </th>
                  ) : (
                    <td key={cell} data-label={columns[index]}>
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MhTable;
