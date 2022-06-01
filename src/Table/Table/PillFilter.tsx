import React from 'react';
import { Pill } from '../../Pill/Pill';


export function PillFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <div className="flex">
      {options.map((option, i) => {
        const isActive = filterValue === option;
        return <div key={i} className={isActive ? "" : "cursor-pointer"}><Pill label={option} onClick={() => setFilter(option)} active={isActive} /></div>;
      })}
      {filterValue ? <div className="ml-2 cursor-pointer"><Pill label="Reset" customColor="stone" active={filterValue} onClick={setFilter} /></div> : null}
    </div>
  );
}
