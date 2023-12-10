import React from "react";
import TablePlayList from "../../../components/table/TablePlayList";

const Table = ({ ...props }) => {
  const onClick = (e: any) => {
    const result = props?.value?.map((item: any) => {
      if (item?.id === e?.id) {
        if (item?.add) {
          return {
            ...item,
            add: false,
          };
        } else {
          return {
            ...item,
            add: true,
          };
        }
      } else {
        return item;
      }
    });

    props?.form.setFieldsValue({
      table: result,
    });
  };
  return (
    <div>
      <TablePlayList data={props?.value} onClickTable={onClick} />
    </div>
  );
};

export default Table;
