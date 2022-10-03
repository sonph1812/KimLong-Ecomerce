import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useSelector } from "react-redux";

const Customers = () => {
  const users = useSelector(state => state.userReducer.users)
  const role = localStorage.getItem('role')
  console.log(users);
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
            <td className="px-5 py-2 border-b-2  border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Email</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Phone</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Dob</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Gender</td>
            <td className="px-2 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Address</td>
            <td colSpan={2} className=" text-center px-4 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider colSpan={'2'}"  >Action</td>
          </tr>
        </thead>
        <tbody>
          {role &&
            users.map((user, index) => (
              <tr key = {user._id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.name}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.email}</td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.phone} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.dob} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.gender} </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{user.address} </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm" >  <button style={{ position: "relative", left: "100px" }} class="bg-yellow-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Update
                </button> </td>
                <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">  <button style={{ position: "relative", left: "10px" }} class="bg-yellow-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full">
                  Delete
                </button> </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
