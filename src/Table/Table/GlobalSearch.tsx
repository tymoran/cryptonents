import React from 'react';
import { useAsyncDebounce } from 'react-table';
import { Input } from '../../Input/Input';

// Define a default UI for filtering
export function GlobalSearch({
  globalFilter, setGlobalFilter
}) {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      <Input
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search ...`} />
    </span>
  );
}
