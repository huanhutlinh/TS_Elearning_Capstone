import { history } from "../../App";
import { userManagermentService } from "../../services/UserManagermentService";
import {GET_USER_LIST, SIGN_IN, SIGN_UP } from "../types/userManagermentType";

import Swal from 'sweetalert2'

export const signInAction = (DangNhap: any, setShowModal: any) => {
  return async (dispatch: any) => {
    try {
      const result = await userManagermentService.signIn(DangNhap);
      console.log({ result });

      if (result.status === 200) {
        dispatch({
          type: SIGN_IN,
          thongTinDangNhap: result.data,
        });

        history.goForward();
        // window.location.hash();
        setShowModal(false);
      }
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const signUpAction = (DangKy: any, countDown: any) => {
  return async (dispatch: any) => {
    try {
      const result = await userManagermentService.signUp(DangKy);
      if (result.status === 200) {
        dispatch({
          type: SIGN_UP,
          thongTinDangKy: result.data,
        });
        //Redirect to previous page
        history.goBack();
        countDown();
      }
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };
};
export const getUserListAction = (tuKhoa = '') => {
  return async (dispatch: any) => {
    try {
      const result = await userManagermentService.getUserList(tuKhoa);

      dispatch({
        type: GET_USER_LIST,
        userList: result.data,
      });
    } catch (error: any) {
      console.log(error.response?.data);
    }
  };
};

export const deleteUserAction = (taiKhoan: string)=>{
    return async(dispatch: any)=>{
      try {
        const result: any = await userManagermentService.deleteUser(taiKhoan);
        console.log('result', result.data.content);
        Swal.fire({
          title: 'Xóa thành công!',
          icon: 'success',
          confirmButtonColor: '#44c020'
        }).then((result)=>{
          if(result.isConfirmed){
            dispatch(getUserListAction())
          }
        })
      } catch (error: any) {
        console.log('error',error.response?.data);
            Swal.fire({
                title: 'Xóa thất bại!',
                icon: 'error',
            })
      }
}
}

export const updateUserAction =(capNhat: any) =>{
  capNhat.maNhom ="GP01";
  return async(dispatch: any) =>{
    try {
      const result: any = await userManagermentService.updateUser(capNhat);
      console.log('result', result.data.content);
          Swal.fire({
              title: 'Cập nhật thành công!',
              icon: 'success',
              confirmButtonColor: '#44c020'
          }).then((result) => {
              if (result.isConfirmed) {
                  dispatch(getUserListAction())
                  history.push('/admin/users')
              }
          })



    } catch (error: any) {
        console.log(error.response?.data);
        Swal.fire({
            title: 'Cập nhật thất bại!',
            // text: `${error.response?.data}`,
            icon: 'error',
        })
  }
  }
}

export const addUserAction = (thongTinNguoiDung: any) => {
  thongTinNguoiDung.maNhom ="GP01";
  return async (dispatch: any) => {
    try {
        const result: any = await userManagermentService.addUser(thongTinNguoiDung);
        console.log('result', result.data.content);
            Swal.fire({
                title: 'Thêm thành công!',
                icon: 'success',
                confirmButtonColor: '#44c020'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(getUserListAction())
                    history.push('/admin/users')
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
}