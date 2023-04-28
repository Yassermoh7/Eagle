import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Button } from "../components";

import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
  EditSettingsModel,
  ToolbarItems,
} from "@syncfusion/ej2-react-grids";

import {
  customersData,
  customersGrid,
  productGrid,
  productMap,
  family,
} from "../data/dummy";
import { Header } from "../components";

const Products = () => {
  const { currentColor, currentMode } = useStateContext();
  const [createNewBatch, setCreateNewBatch] = useState(true);
  const [familyChosen, setFamilyChosen] = useState(false);

  // const selectionsettings = { persistSelection: true };
  const toolbarOptions = [
    "Add",
    "Edit",
    "Delete",
    "Update",
    "Cancel",
    "Search",
  ];
  const editing = {
    allowDeleting: true,
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };

  return (
    <div>
      {createNewBatch && (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="Products" />

          <div className="flex m-3 flex-wrap flex-col justify-center gap-1 items-center">
            <div className="textboxes flex-col flex p-4 bg-slate-200 rounded-xl w-80">
              <ul className="flex flex-wrap justify-between">
                {family.map(function (name, index) {
                  return (
                    <li key={index}>
                      <div
                        className="mt-10"
                        onClick={() => setFamilyChosen(true)}
                      >
                        <Button
                          color="white"
                          bgColor={currentColor}
                          text={name}
                          borderRadius="10px"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}

      {familyChosen && (
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
          <GridComponent
            dataSource={productMap}
            enableHover={false}
            allowPaging
            pageSettings={{ pageCount: 5 }}
            // selectionSettings={selectionsettings}
            toolbar={toolbarOptions}
            editSettings={editing}
            allowSorting
            allowFiltering={true}
          >
            <ColumnsDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {productGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Selection, Toolbar, Edit, Sort]} />
          </GridComponent>
        </div>
      )}
    </div>
  );
};

export default Products;
