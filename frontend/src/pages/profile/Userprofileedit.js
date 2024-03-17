import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


export default function Userprofileedit() {

    const [userInfo, setUserInfo] = useState({ image: false, resume: false });
    const [textEditor, setTextEditor] = useState();


    useEffect(() => {
        const user = localStorage.getItem('id');
        const fetchUser = async () => {
            try {

                const response = await axios.get(
                    `http://localhost:8080/api/users/${user}/`
                );
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                setUserInfo(response.data);

            } catch (error) {
                console.error("Error fetching User:", error);
            }
        };

        fetchUser();
        setTextEditor(userInfo.about);
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    const handleSkillsChange = (tags) => {
        setUserInfo((userInfo) => ({ ...userInfo, skills: tags }));
    };

    const handleLanguagesChange = (tags) => {
        setUserInfo((userInfo) => ({ ...userInfo, languages: tags }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserInfo({
                ...userInfo,
                image: file,
            });
        } else {
            setUserInfo({
                ...userInfo,
                image: false,
            });
        }
    };

    const handleResumeChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUserInfo({
                ...userInfo,
                resume: file,
            });
        } else {
            setUserInfo({
                ...userInfo,
                resume: false,
            });
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const sendformData = new FormData();
            console.log(userInfo);
            sendformData.append('firstName', userInfo.first_name);
            sendformData.append('lastName', userInfo.last_name);
            sendformData.append('contactNo', userInfo.contact_no);
            sendformData.append('location', userInfo.location);
            sendformData.append('about', textEditor);

            if (userInfo.image.size) {
                sendformData.append('image', userInfo.image);
                sendformData.append('imageFlag', true);
            }

            if (userInfo.resume.size) {
                sendformData.append('resume', userInfo.resume);
                sendformData.append('resumeFlag', true);
            }

            const response = await axios.post(`http://localhost:8080/api/users/${localStorage.getItem('id')}`, sendformData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Handle successful update (e.g., show success message, redirect)
            console.log('Profile updated successfully:', response.data);
        } catch (error) {
            // Handle error (e.g., show error message)
            console.error('Error updating profile:', error);
        }
    };



    // console.log(userInfo);
    // console.log(textEditor) ;

    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='max-w-lg mx-auto'>
                <p className='text-center text-2xl font-bold'>Edit Profile</p>
                <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className=''>
                        <label htmlFor="first_name" className='block text-gray-700 text-sm font-bold mb-2'>First Name *</label>
                        <input type="text" name="first_name" value={userInfo.first_name} onChange={handleInputChange} className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="last_name" className='block text-gray-700 text-sm font-bold mb-2'>Last Name *</label>
                        <input type="text" name="last_name" value={userInfo.last_name} onChange={handleInputChange} className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="contact_no" className='block text-gray-700 text-sm font-bold mb-2'>Contact Number *</label>
                        <input type="text" name="contact_no" value={userInfo.contact_no} onChange={handleInputChange} className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    <div className=''>
                        <label htmlFor="location" className='block text-gray-700 text-sm font-bold mb-2'>Location *</label>
                        <input type="text" name="location" value={userInfo.location} onChange={handleInputChange} className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8" />
                    </div>
                    {/* <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Languages *</label>
                        <TagsInput
                            className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
                            value={userInfo.languages}
                            name="languages"
                            onChange={handleLanguagesChange}
                            inputProps={{
                                placeholder: "Enter Languages",
                                style: { width: "240px" },
                            }}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Skills *</label>
                        <TagsInput
                            className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
                            value={userInfo.skills}
                            name="skills"
                            onChange={handleSkillsChange}
                            inputProps={{
                                placeholder: "Enter Skills",
                                style: { width: "240px" },
                            }}
                        />
                    </div> */}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">About yourself *</label>
                        <CKEditor
                            className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
                            editor={ClassicEditor}
                            data={userInfo.about}
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                                // console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setTextEditor(data);
                            }}
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700 text-sm font-bold mb-2 mt-4">Image*</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-8"
                            accept=".jpeg,.jpg,.png"
                        />
                    </div>
                    <div className="">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Resume*</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleResumeChange}
                            className="shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                            accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
                        />
                    </div>


                    <div>
                        <button
                            className="px-5 mb-50 mt-10 py-3 bg-[#3c65f5] text-white  rounded-md hover:bg-[#05264e]  focus:ring-4 focus:outline-none focus:ring-blue-300"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Update details
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}
