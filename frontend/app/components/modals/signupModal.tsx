'use client'

import CustomButton from "../forms/customButton";
import Modal from "./modal";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>
            <form className="space-y-4">
                <input placeholder="Email address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Password" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <input placeholder="Repeat password" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl" />

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton 
                    label="Sign up"
                    onClick={() => console.log('clicked button')}
                />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;