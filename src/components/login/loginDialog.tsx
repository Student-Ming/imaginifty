import { Modal } from "@nextui-org/react";
import { LoginPanel } from "./loginPanel";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/src/redux/features/loginDialog";
import { dialogState } from "@/src/redux/features/loginDialog";

interface params {
    loginDialog: dialogState
}

export default function LoginDialog() {
    const { isOpen } = useSelector((state: params) => state.loginDialog)
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(showModal())
    }

    return (
        <Modal
            className="light rounded-tl-none"
            classNames={{ closeButton: "mt-1 mr-1 transition-transform rotate-0 hover:rotate-180 duration-300 ease-[cubic-bezier(.56,-0.53,.79,1.39)]" }}
            isOpen={isOpen}
            onOpenChange={handleChange}
            placement="center"
            isDismissable={true}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: 0,
                        scale: 0,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                }
            }}
        >
            <LoginPanel></LoginPanel>
        </Modal>
    );
}
