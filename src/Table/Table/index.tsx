import React from 'react';
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table'; // new
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { GlobalSearch } from './GlobalSearch';
import { Button, PageButton } from './Pagination';


interface TableProps {
  /**
   * Columns.
   */
  columns: { Header: string; accessor: string }[];
  /**
   * Data.
   */
  data: any[];
}

export function Table({ columns, data }: TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,

    page,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          {headerGroups.map((headerGroup) =>
            headerGroup.headers.map((column) =>
              column.Filter ? (
                <div key={column.id}>
                  {column.render("Filter")}
                </div>
              ) : null
            )
          )}
        </div>
        <div>
        <GlobalSearch
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
          />
          </div>
      </div>
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table
                className="min-w-full leading-normal"
                {...getTableProps()}
                border="1">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                          {...column.getHeaderProps(column.getSortByToggleProps())}>
                          {column.render('Header')}
                          <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' ▼'
                        : ' ▲'
                      : ''}
                  </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="px-5 py-5 text-sm bg-white border-b border-gray-200"
                              {...cell.getCellProps()}>
                              {cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex justify-between flex-1 sm:hidden">
                  <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
                  <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="flex gap-x-2">
                    <span className="text-sm text-gray-700">
                      Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
                    </span>
                    <select
                      value={state.pageSize}
                      onChange={e => {
                        setPageSize(Number(e.target.value))
                      }}
                    >
                      {[5, 10, 20].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                          Show {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      <PageButton
                        className="rounded-l-md"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        <span className="sr-only">First</span>
                        <ChevronDoubleLeftIcon className="w-5 h-5" aria-hidden="true" />
                      </PageButton>
                      <PageButton
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
                      </PageButton>
                      <PageButton
                        onClick={() => nextPage()}
                        disabled={!canNextPage
                        }>
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
                      </PageButton>
                      <PageButton
                        className="rounded-r-md"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                      >
                        <span className="sr-only">Last</span>
                        <ChevronDoubleRightIcon className="w-5 h-5" aria-hidden="true" />
                      </PageButton>
                    </nav>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
    </>
  );
}
