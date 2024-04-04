import axios from "axios";
const baseUrl = process.env.REACT_APP_baseUrl;

const getHeader = () => {
    const authToken = localStorage.getItem("doctorAuthToken");

    const headers = {
        Authorization: "Bearer " + authToken, //the token is a variable which holds the token
    };

    return headers;
};

const postRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };
    try {
        const response = await axios({
            method: "POST",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const deleteRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "DELETE",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const putRequest = async (path, data) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "PUT",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

const getRequest = async (path) => {
    let res = {
        success: false,
        message: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "GET",
            url: `${baseUrl}${path}`,
            // params: data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.message = err.response?.data.message || err.message;
        return res;
    }
    return res;
};

export const login = async (data) => {
    const path = "/doctor/auth/login";
    return await postRequest(path, data);
};

export const getSlotsDate = async () => {
    const path = `/doctor/slot/getSlotsDate`;
    return await getRequest(path);
};

export const getSlotsByDate = async (date) => {
    const path = `/doctor/slot/getSlotsByDate?utc_slot_date=${date}`;
    return await getRequest(path);
};

export const bookSlot = async (data) => {
    const path = `/doctor/slotBooking/bookSlot`;
    return await postRequest(path, data);
}

export const getMyBookings = async (page) => {
    const path = `/doctor/slotBooking/getMyBookings?page=${page}`;
    return await getRequest(path);
}

export const getMySessionsDetail = async (page, limit) => {
    const path = `/doctor/sessionDetail/getMySessionsDetail?page=${page}&limit=${limit}`;
    return await getRequest(path);
}