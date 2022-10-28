import React, { useState } from "react";
import { Pagination } from "antd";

export default function PaginationCourses() {
  const [pagination, setPagination] = useState({ current: 1 });

  const onChange = (page: number) => {
    setPagination({
      current: page,
    });
  };
  return (
    <div>
      <Pagination
        current={pagination.current}
        onChange={(page: number, pageSize: number) => {
          onChange(page);
        }}
        total={50}
      />
    </div>
  );
}
