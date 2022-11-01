import { GROUPID } from "../utilities/config";
import { baseService } from "./baseService";

export class GetCoursesServices extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getCourses = () => {
    return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
  };
  getCoursesAdmin = (tenKhoaHoc: string) => {
    if (tenKhoaHoc.trim() !== ''){
    return this.get(
      `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${tenKhoaHoc}&MaNhom=${GROUPID}`
    )}
    return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUPID}`);
  };

  getDetailCourse = (maKhoaHoc: string) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    );
  };
  getCoursesEachCategory = (maDanhMuc: string) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${GROUPID}`
    );
  };
  addCourseUploadImg = (formData: any) => {
    return this.post(`/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, formData);
  };

  capNhatKhoaHoc = (formData: any)=>{
    return this.put(`/api/QuanLyKhoaHoc/CapNhatKhoaHoc`,formData);
  }

  updateCourseUpload = (formData: any) => {
    return this.post(`/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`, formData);
  };

  deleteCourse = (maKhoaHoc: string) => {
    return this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
  };
}

export const getCoursesServices = new GetCoursesServices();
