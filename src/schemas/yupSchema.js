import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const IMG_SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png"
];
const IMG_FILE_SIZE = 10000 * 1024;//100KB

const DOC_SUPPORTED_FORMATS = [
  "application/pdf",
  "application/msword",
  "application/vnd.ms-excel"
];

const DOC_FILE_SIZE = 160 * 1024;

export const signUpSchema = Yup.object({
  username: Yup.string()
    .min(2, 'User Name must be at least 2 characters.')
    .max(25, 'User Name should not be greater than 25 characters.')
    .required("Please enter user name."),
  first_name: Yup.string().min(2).max(25).required("Please enter first name."),
  email: Yup.string().email('E-mail is not valid!').required("Please enter your email."),
  password: Yup.string().min(5).required("Please enter your password."),
  designation: Yup.string().required("Please select designation."),
  mobile_no: Yup.string().min(10).max(10).required("Please enter mobile number.").matches(phoneRegExp, 'Phone number is not valid'),
  dealerCode: Yup.string().min(2).max(25).required("Please enter dealer code."),
  department: Yup.string().required("Please select department."),
  user_type: Yup.string().required("Please select user type."),
  termsAndConditions: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted."),
  image: Yup.mixed().test(
    "fileSize",
    "Max allowed size is 100KB",
    value => value && value.size <= IMG_FILE_SIZE
  ).test(
    "fileFormat",
    "Unsupported Format",
    value => value && IMG_SUPPORTED_FORMATS.includes(value.type)
  ),
  docsFile: Yup.mixed().test(
    "fileSize",
    "Max allowed size is 100KB",
    value => value && value.size <= DOC_FILE_SIZE
  ).test(
    "fileFormat",
    "Unsupported Format",
    value => value && IMG_SUPPORTED_FORMATS.includes(value.type)
  )

  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});


export const signInSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email."),
  password: Yup.string().min(5).required("Please enter your password."),
  //userType: Yup.string().required("Please select user type."),
});