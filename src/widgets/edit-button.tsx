import { EditOutlined } from "@ant-design/icons"
import { Button, type ButtonProps } from "antd"
import { type FC } from "react"
import {
	type FormKeys,
	type FormParams,
	useFormDevtoolsStore
} from "src/shared/store"

interface EditButtonProps extends ButtonProps {
	params?: FormParams
	formKey?: FormKeys
	disableForm?: boolean
}

const EditButton: FC<EditButtonProps> = ({
	params,
	formKey,
	disableForm,
	...props
}) => {
	const setParams = useFormDevtoolsStore((state) => state.setParams)

	const onChangeParams = () => {
		if (disableForm) return
		if (!params) return
		setParams(params, formKey)
	}

	return (
		<>
			<Button
				variant={"solid"}
				color={"orange"}
				icon={<EditOutlined />}
				onClick={onChangeParams}
				{...props}
			/>
		</>
	)
}

export { EditButton }
