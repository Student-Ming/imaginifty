import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Checkbox, Input, Link } from "@nextui-org/react";
import { MailIcon } from './MailIcon'
import { LockIcon } from './LockIcon';
import { useDispatch } from "react-redux";
import { showModal } from "@/src/redux/features/loginDialog";
import { Tooltip } from "@nextui-org/react";

const loginImg = {
    QRimg: `${process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty' : ''}/images/login/QR.svg`,
    PCimg: ''
}

export const LoginPanel = () => {
    const { QRimg, PCimg } = {
        ...loginImg
    };

    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(showModal())
    }

    return (
        <ModalContent>
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col py-3">
                        <Tooltip
                            delay={50}
                            closeDelay={200}
                            color="foreground"
                            placement="right"
                            showArrow
                            radius="sm"
                            size="sm"
                            content="扫码登录安全快捷"
                            className="light"
                            classNames={{
                                base: [
                                    "before:bg-[#999] bottom-1 right-1",
                                ],
                                content: [
                                    "bg-[#999] rounded",
                                ],
                            }}>
                            <div className="clip-bottom-right absolute top-1 left-1 cursor-pointer">
                                <img width={50} height={50} src={QRimg} alt="扫码登录安全快捷" />
                            </div>
                        </Tooltip>
                        <h1 className="dark:text-black flex justify-center">邮箱登录</h1>
                    </ModalHeader>
                    <ModalBody>
                        <Input
                            className="dark:text-black"
                            isRequired
                            endContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Email"
                            placeholder="Enter your email"
                            variant="bordered"
                        />
                        <Input
                            className="dark:text-black"
                            isRequired
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
                                记住我
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
    )
}