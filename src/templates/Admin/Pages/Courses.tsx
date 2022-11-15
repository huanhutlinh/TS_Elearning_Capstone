import React, { Fragment } from "react";
import "./../../Admin/style/StyleAdmin.css";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/outline";
import { Button, Input, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteCourseAction,
  getCoursesAdminAction,
} from "../../../redux/actions/coursesAdminActions";
import { Link } from "react-router-dom";
import { history } from "../../../App";

export default function Courses() {
  const { arrCoursesAdmin } = useSelector(
    (state: any) => state.CoursesAdminReducer
  );

  const dispatch = useDispatch();
  console.log("arrCoursesAdmin", arrCoursesAdmin);
  const { Search } = Input;

  useEffect(() => {
    dispatch(getCoursesAdminAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns: any = [
    {
      title: "Mã khoá học",
      dataIndex: "maKhoaHoc",
      sorter: (a: any, b: any) => a.maKhoaHoc.length - b.maKhoaHoc.length,
      sortDirections: ["descend"],
      width: "10%",
    },
    {
      title: "Tên khoá học",
      dataIndex: "tenKhoaHoc",
      sorter: (a: any, b: any) => {
        let courseA = a.tenKhoaHoc.toLowerCase().trim();
        let courseB = b.tenKhoaHoc.toLowerCase().trim();
        if (courseA > courseB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend"],
      width: "20%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text: string, courses: any, index: number) => {
        return (
          <Fragment>
            <img
              className="rounded-md"
              src={courses.hinhAnh}
              alt={courses.tenKhoaHoc}
              width="100"
              height="100"
              onError={(e: any) => {
                if (e.target != null) {
                  e.target!.onError = null;
                  e.target!.src = `https://picsum.photos/id/${index}/100/100`;
                }
              }}
            />
          </Fragment>
        );
      },
      width: "5%",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      render: (text: string, courses: any) => {
        return (
          <Fragment>
            {courses.moTa.length > 100
              ? courses.moTa.slice(0, 100) + "..."
              : courses.moTa}
          </Fragment>
        );
      },
      width: "25%",
    },
    {
      title: "Khoá học",
      dataIndex: "danhMucKhoaHoc.tenDanhMucKhoaHoc",
      render: (text: string, courses: any) => {
        return <Fragment>{courses.danhMucKhoaHoc.tenDanhMucKhoaHoc}</Fragment>;
      },
      sorter: (a: any, b: any) => {
        let danhMucA = a.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
        let danhMucB = b.danhMucKhoaHoc.tenDanhMucKhoaHoc.toLowerCase().trim();
        if (danhMucA > danhMucB) {
          return 1;
        }
        return -1;
      },
      width: "15%",
    },
    {
      title: "Người tạo",
      dataIndex: "nguoiTao.taiKhoan",
      render: (text: string, courses: any) => {
        return <Fragment>{courses.nguoiTao.taiKhoan}</Fragment>;
      },
      sorter: (a: any, b: any) => {
        let nguoiTaoA = a.nguoiTao.taiKhoan.toLowerCase().trim();
        let nguoiTaoB = b.nguoiTao.taiKhoan.toLowerCase().trim();
        if (nguoiTaoA > nguoiTaoB) {
          return 1;
        }
        return -1;
      },
      width: "10%",
    },

    {
      title: "Lựa chọn",
      dataIndex: "action",
      render: (text: string, courses: any) => {
        return (
          <Fragment>
            <Link
              key={1}
              to={`/admin/courses/edit/${courses.maKhoaHoc}`}
              className="tooltip bg-white"
            >
              <PencilAltIcon className="mr-3 h-7 w-7 text-blue-500 hover:scale-125 transition duration-150 origin-center bg-white" />
              <span className="tooltiptext">Sửa</span>
            </Link>
            <span
              key={2}
              className="tooltip bg-white cursor-pointer"
              onClick={() => {
                if (
                  window.confirm(
                    "Chắc chắn xóa khóa học " + courses.tenKhoaHoc + " ?"
                  )
                ) {
                  dispatch(deleteCourseAction(courses.maKhoaHoc));
                }
              }}
            >
              <TrashIcon className=" h-7 w-7 text-red-600 hover:scale-125 transition duration-150 origin-center bg-white" />
              <span className="tooltiptext">Xoá</span>
            </span>
          </Fragment>
        );
      },
      width: "10%",
    },
  ];

  const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const onSearch = (value: string) => {
    console.log("search", value);
    dispatch(getCoursesAdminAction(value));
  };

  return (
    <Fragment>
      <div className="py-12">
        <div className="max-w-7xl flex flex-row items-center justify-between mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <div>
            <h3 className="text-4xl">Quản lý khoá học</h3>
            <Button
              type="primary"
              style={{ width: 150 }}
              className="my-4"
              onClick={() => {
                history.push("/admin/courses/add-new");
              }}
            >
              Thêm khoá học
            </Button>
          </div>
          <div className="inline-flex  items-center">
            <Search
              placeholder="Nhập tên khoá học..."
              onSearch={onSearch}
              enterButton="Tìm kiếm"
              size="large"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 xl:px-0 sm:px-6 md:px-8">
          <div className="py-4">
            <Table
              columns={columns}
              dataSource={arrCoursesAdmin}
              onChange={onChange}
              rowKey={"maKhoaHoc"}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
