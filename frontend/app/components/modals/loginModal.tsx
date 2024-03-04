'use client'

import CustomButton from "../forms/customButton";
import Modal from "./modal";
import useLoginModal from "@/app/hooks/useLoginModal";

const LoginModal = () => {
    const loginModal = useLoginModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Password" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton 
                    label="Log in"
                    onClick={() => console.log('clicked button')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;