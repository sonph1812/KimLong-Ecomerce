import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useSelector } from "react-redux";

const Customers = () => {
  const user = useSelector(state => state.userReducer.users)

  // const selectionsettings = { persistSelection: true };
  // const toolbarOptions = ['Delete'];
  // const editing = { allowDeleting: true, allowEditing: true };

  return (
    // <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    //   <Header category="Page" title="Customers" />
    //   <GridComponent
    //     dataSource={customersData}
    //     enableHover={false}
    //     allowPaging
    //     pageSettings={{ pageCount: 5 }}
    //     selectionSettings={selectionsettings}
    //     toolbar={toolbarOptions}
    //     editSettings={editing}
    //     allowSorting
    //   >
    //     <ColumnsDirective>
    //       {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    //       {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
    //     </ColumnsDirective>
    //     <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
    //   </GridComponent>
    // </div>

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Custommer" />
      <table className="min-w-full leading-normal ">
        <thead>
          <tr>
            <td className="px-5 py-3 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Dob</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Gender</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Address</td>
            <td colSpan={2} className=" text-center px-8 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
          </tr>
        </thead>
        {/* <tbody>
        {isProductYet && products.map((product) => (
          <tr key={product._id}>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.name}</td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.price} $</td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.description}</td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{product.rating} </td>

            <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button className="absolute px-3 bg-green-400 opacity-50 rounded-full row hover:bg-green-800 focus:outline-none rounded">update</button> </td>
            <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button className="absolute px-3  bg-red-400 opacity-50 rounded-full row hover:bg-red-800 focus:outline-none rounded">delete</button> </td>

          </tr>
        ))}

      </tbody> */}
      </table>
    </div>
  );
};

export default Customers;
