import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../redux/store";
import { verifyAuthCode, verifyEmail, verifyPassword } from "../redux/features/loginDialog";


export const submitFields = createAsyncThunk(
  'loginDialog/submitFields',
  async (_, { dispatch, getState }) => {
    const state = getState() as AppState

    dispatch(verifyEmail())
    dispatch(verifyPassword())

    if (!state.loginDialog.isLoginPanel) {
      dispatch(verifyAuthCode());
    }
    if (state.loginDialog.isSelected) {
      localStorage.setItem('userForm', JSON.stringify({
        email: state.loginDialog.emailTotal.emailValue,
        password: state.loginDialog.passwordTotal.pwdValue
      }))
    }
  }
)