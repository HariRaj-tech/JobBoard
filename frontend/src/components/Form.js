// import { useState } from "react";

// function Form({fields,onSubmit,handleSubmit}) {
//     const [formData, setformData] = useState({});
//     const [errors,setErrors] = useState({});
    
//     const handleChange = (e) => {
//         const { name, value, checked, type } = e.target;
        
//         // Basic validation for the username/email field
//         if (name === 'email') {
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             const isValidEmail = emailRegex.test(value);

//             //Username must be at least 3 characters
//             const validUsername = value.length >= 5; 
//             setErrors((prevErrors) => ({
//               ...prevErrors,
//               email: isValidEmail || validUsername ? '' : 'Invalid email or username format',
//             }));
//         } 
        

//         setformData((prevData) => ({
//           ...prevData,
//           [name]: type === "checkbox" ? checked : value,
//         }));
//     };
//     const  formHandle= (e) => {
//         e.preventDefault();
//         const len =Object.keys(formData).length;
//         if( len === fields.length && errors.email.length === 0) {
//             console.log(len,fields.length);
//             onSubmit(formData);
//             handleSubmit();
//         } else {
//             alert("fill the form");
//         }
//     }
//     return (

//     );
// }

// export default Form;