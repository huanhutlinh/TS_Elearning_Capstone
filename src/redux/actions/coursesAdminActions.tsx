import { history } from "../../App";
import { getCoursesServices } from "../../services/GetCoursesServices";
import {
  UPDATE_COURSE,
  ADD_NEW_COURSE_ADMIN,
  GET_COURSES_ADMIN,
  GET_DETAILS_COURSES
} from "../types/coursesType";
import Swal from 'sweetalert2'

export const getCoursesAdminAction = (tenKhoaHoc = '')=>{
  return async (dispatch: any) => {
  try {
    const result = await getCoursesServices.getCoursesAdmin(tenKhoaHoc);
    dispatch({
      type: GET_COURSES_ADMIN,
      arrCoursesAdmin: result.data,
    });
  } catch (error: any) {
    console.log(error.response?.data);
  }
};
};
export const addCourseUploadImgAction  = (formData: any) =>{
  return async(dispatch: any)=>{
    try {
      const result: any = await getCoursesServices.addCourseUploadImg(formData);
      console.log('result', result.data.content);
      Swal.fire({
        title: 'Thêm thành công!',
        icon: 'success',
        confirmButtonColor: '#44c020'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(getCoursesAdminAction())
                history.push('/admin/courses')
            }
        })
      } catch (error: any) {
      console.log(error.response?.data);
      Swal.fire({
          title: 'Thêm thất bại!',
          // text: `${errors.response?.data}`,
          icon: 'error',
      })
    }
  }
};
export const getDetailsCoursesEditAction = (id: string) => {
  return async (dispatch: any) => {
    try {
      const result: any = await getCoursesServices.getDetailCourse(id);
      dispatch({
        type: GET_DETAILS_COURSES,
        detailCourseEdit: result.data,
      });
    } catch (errors) {
      console.log(errors);
    }
  };
};
export const updateCourseAction = (formData: any) => {
  return async (dispatch: any) => {
    try {
      const result: any = await getCoursesServices.updateCourseUpload(formData);
      console.log('result', result.data.content);
        Swal.fire({
          title: 'Cập nhật thành công!',
          icon: 'success',
          confirmButtonColor: '#44c020'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(getCoursesAdminAction())
                    history.push('/admin/courses')
                }
            })


        } catch (error: any) {
        console.log(error.response?.data);
        Swal.fire({
            title: 'Cập nhật thất bại!',
            // text: `${errors.response?.data}`,
            icon: 'error',
        })
      
    }
  };
};

export const capNhatKhoaHocAction=(formData: any)=>{
  return async (dispatch: any) => {
    try {
      const result: any = await getCoursesServices.updateCourseUpload(formData);
      console.log('result',result.data.content);
        Swal.fire({
          title: 'Cập nhật thành công!',
          icon: 'success',
          confirmButtonColor: '#44c020'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(getCoursesAdminAction())
                    history.push('/admin/courses')
                }
            })


        } catch (error: any) {
        console.log(error.response?.data);
        Swal.fire({
            title: 'Cập nhật thất bại!',
            // text: `${errors.response?.data}`,
            icon: 'error',
        })
      
    }
  };
}

export const deleteCourseAction = (maKhoaHoc: string) => {
  return async (dispatch: any) => {
    try {
        
        const result: any = await getCoursesServices.deleteCourse(maKhoaHoc);
        console.log('result', result.data.content);
            Swal.fire({
                title: 'Xóa thành công!',
                icon: 'success',
                confirmButtonColor: '#44c020'
            }).then((result)=>{
                if(result.isConfirmed){
                    dispatch(getCoursesAdminAction())
                }
            })            
    }catch (error: any) {
        console.log('errors',error.response?.data);
        Swal.fire({
            title: 'Xóa thất bại!',
            text: `${error.response?.data}`,
            icon: 'error',
        })
    }
}
};
