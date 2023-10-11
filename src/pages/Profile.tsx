import React, {useContext} from 'react';
import {AuthContext} from "../Providers";

export default function Profile() {
    const {currentUser, handleAuthLogout} = useContext(AuthContext);
    const onLogout = () => {
        handleAuthLogout()
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-[20rem]">
                <div className="text-center text-2xl font-bold text-sky-600 mb-5">Hello, {currentUser.email}</div>
                <button
                    onClick={onLogout}
                    className="rounded-none bg-sky-400 border-2 border-sky-400 px-4 py-2 text-white w-full hover:bg-sky-300 active:bg-white active:border-sky-400 active:text-sky-400 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400">{"Sign out"}</button>
            </div>
        </div>
    )
}