/* eslint-disable no-const-assign */
import {
  setAuth,
  setError,
  setLoading,
  setReset,
  setUsers,
} from "../slices/authSlice";
import axios from "axios";

export const registory =
  (username, email, password, page, navigate) => async (dispatch) => {
    try {
      const data =
        page === "Signup" ? { username, email, password } : { email, password };
      const url = `http://localhost:2000/api/auth/${
        page === "Signup" ? "Signup" : "Signin"
      }`;
      const response = await axios.post(url, data);
      const user = response.data;
      console.log(user.token);
      dispatch(setLoading());
      setTimeout(() => {
        navigate("/");
      }, 1000);
      dispatch(setAuth(user));
      localStorage.setItem("auth", JSON.stringify(user));
    } catch (error) {
      dispatch(
        setError(
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "Internal Server Error"
        )
      );
    }
  };

export const changeRole = (id, role) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const url = `http://localhost:2000/api/auth/updateRole/${id}/role/${role}`;
    const response = await axios.put(url);
    localStorage.removeItem("auth");
    localStorage.setItem("auth", JSON.stringify(response.data));
  } catch (error) {
    dispatch(
      setError(
        error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};

export const checkToken = (setOk) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/private/${token}`;
    const response = await axios.get(url);
    if (response.data.success) {
      setOk(true);
    }
  } catch (error) {
    dispatch(setError(error.response.data && error.response.data.error));
  }
};

export const removeInitial = () => async (dispatch) => {
  localStorage.removeItem("auth");
  dispatch(setReset());
};

export const roleChecker = (setOk) => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const role = user?.data?.role;
    const token = user?.token;
    const url = `http://localhost:2000/api/checkRole/${role}/${token}`;
    const response = await axios.get(url);
    if (!response.data.success) {
      setOk(false);
    }
    response.data.success === true && setOk(true);
  } catch (error) {
    dispatch(
      setError(
        error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};

export const fetchBussinessMen = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/auth/get-vendor`;
    const response = await axios.get(url);
    dispatch(setUsers(response.data.data));
    localStorage.setItem('Top Vendors', JSON.stringify(response.data.data))
  } catch (error) {
    dispatch(
      setError(
        error.response.data && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};
