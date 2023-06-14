const pages = {
    ROOT: "/",
    LOGIN: "/login",
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot',

    // PROTECTED ROUTES
    DASHBOARD: "/dashboard",
    ALL_MERCHANTS_DATA: '/all-merchants-data',
    SUCESS_HISTORY: '/sucess-history',
    PENDING_HISTORY: '/pending-history'

}

const userTypes = [
    { id: 1, title: "Singhtek Users" },
    { id: 2, title: "Merchants" }
]

const department = [
    { id: 1, title: "Admin" }
]

const designation = [
    { id: 1, title: "Sub-Admin" }
]
export {
    pages,
    userTypes,
    department,
    designation
};