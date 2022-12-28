import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Reduxgetproduct } from '../../redux/features/product';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import sortImage from '../../global/images/sort-solid.svg';
import GlobalFilter from '../GlobalFilter';
import Charts from '../Charts';
import loader from '../loader/index';
import './Home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const [showCharts, setShowCharts] = useState(false);
  const [productList, setproductList] = useState([]);

  let dataRow = useSelector((state) => {
    return state.product?.response;
  });

  let loading = useSelector((state) => {
    return state.product?.loading;
  });

  let getALLproduct = async () => {
    dispatch(Reduxgetproduct());
  };

  const data = React.useMemo(() => productList, [productList]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Brand',
        accessor: 'brand', // accessor is the "key" in the data
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },
      {
        Header: 'Price(INR)',
        accessor: 'price',
      },
      {
        Header: 'Discount(%)',
        accessor: 'discountPercentage',
      },
      {
        Header: 'Rating',
        accessor: 'rating',
      },
      {
        Header: 'Stock',
        accessor: 'stock',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  const showTable = () => {
    setShowCharts(false);
  };

  const showChart = () => {
    setShowCharts(true);
  };

  useEffect(() => {
    getALLproduct();
  }, []);

  useEffect(() => {
    // getALLproduct();
    console.log('dataRow', dataRow);
    setproductList(dataRow);
  }, [dataRow]);
  return (
    <>
      {/* <div className="setMargin">
				<button
					onClick={() => {
						showTable();
					}}
				>
					Table View
				</button>
				<button
					onClick={() => {
						showChart();
					}}
				>
					Chart View
				</button>
			</div> */}
      <div className="list mt-2">
        <div className="headText">Product List</div>
        {loading ? (
          <loader />
        ) : (
          <div className="container">
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                        style={{
                          borderBottom: 'solid 3px red',
                          background: 'aliceblue',
                          color: 'black',
                          fontWeight: 'bold',
                        }}
                      >
                        {column.render('Header')}
                        <span>
                          {column.isSorted ? (
                            <img src={sortImage} className="sortImage" alt="" />
                          ) : (
                            ''
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: '10px',
                              border: 'solid 1px gray',
                              background: 'papayawhip',
                            }}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
