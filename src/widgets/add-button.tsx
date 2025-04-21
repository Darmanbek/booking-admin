import { PlusOutlined } from "@ant-design/icons"
import { Button, type ButtonProps } from "antd"
import { useResponsive } from "antd-style"
import { type FC } from "react"
import { type FormKeys, useFormDevtoolsStore } from "src/shared/store"

interface AddButtonProps extends ButtonProps {
	formKey?: FormKeys
	disableForm?: boolean
}

const AddButton: FC<AddButtonProps> = ({ formKey, disableForm, ...props }) => {
	const { mobile = false } = useResponsive()
	const toggleOpen = useFormDevtoolsStore((state) => state.toggleOpen)

	return (
		<>
			<Button
				type={"primary"}
				icon={<PlusOutlined />}
				onClick={() => {
					if (disableForm) return
					toggleOpen(formKey)
				}}
			>
				{mobile
					? ""
					: props.children !== undefined
						? props.children
						: "Добавить"}
			</Button>
		</>
	)
}

export { AddButton }
