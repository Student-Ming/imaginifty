import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon'
import { LockIcon } from './LockIcon';
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
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={handleChange}
                placement="center"
                isDismissable={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
                            <ModalBody>
                                <Input
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="flex py-2 px-1 justify-between">
                                    <Checkbox
                                        classNames={{
                                            label: "text-small",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <Link color="primary" href="#" size="sm">
                                        Forgot password?
                                    </Link>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="flat" onPress={handleChange}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={handleChange}>
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
