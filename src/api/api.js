import axios from "axios";

export const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const setHeader = (token) => {
    axios.defaults.headers.common["Content-Type"] = `'application/json'`;
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

//config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;

export const userAuthentication = async (data) => {
    try {
        return await axiosClient.post(`/SinghTek/login`, {
            email: data.email, password: data.password
        });
    } catch (error) {
        console.error(error);
        return error;
    }
}
export const userAuthenticationOld = async (data) => {
    //1=Singhtek Users", 2=Merchants
    if (data.userType === 1) {
        try {
            const res = await axiosClient.post(`/SinghTek/login`, {
                email: data.email, password: data.password
            });
            if (res.status === 200 && res.data) {
                return res.data;
            }
            return res;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
    else if (data.userType === 2) {
        try {
            const res = await axiosClient.post(`/Merchant/login`, data);
            if (res.status === 200 && res.data) {
                return res.data;
            }
            return res;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
};

export const userRegister = async (data) => {
    try {

        const res = await axiosClient.post(`/SinghTek/register`, data
            , {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        console.log(res);
        if (res.data) {
            return res.data;
        }
        return res.message
    } catch (error) {
        console.error(error);
        return "error";
    }
};