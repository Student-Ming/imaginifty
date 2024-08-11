import { Modal } from "@nextui-org/react";
import { LoginPanel } from "./loginPanel";
import { resetFields, showModal } from "@/src/redux/features/loginDialog";
import { useAppDispatch, useAppSelector } from "@/src/redux";

export default function LoginDialog() {
    const isOpen = useAppSelector((state) => state.loginDialog.isOpen)
    const dispatch = useAppDispatch()

    return (
        <Modal
            className="light rounded-tl-none"
            classNames={{ closeButton: "mt-1 mr-1 transition-transform rotate-0 hover:rotate-180 duration-300 ease-[cubic-bezier(.56,-0.53,.79,1.39)]" }}
            isOpen={isOpen}
            onOpenChange={() => dispatch(showModal())}
            onClose={() => dispatch(resetFields('close'))}
            placement="center"
            isDismissable={true}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 0.2,
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
