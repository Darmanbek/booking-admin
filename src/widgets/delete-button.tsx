import { DeleteOutlined } from "@ant-design/icons"
import { Button, type ButtonProps, Popconfirm } from "antd"
import { type FC } from "react"

interface DeleteButtonProps extends ButtonProps {
	title?: string
	data?: string
	onConfirm?: () => void
}

const DeleteButton: FC<DeleteButtonProps> = ({
	title,
	onConfirm,
	data,
	...props
}) => {
	return (
		<>
			<Popconfirm
				title={title || `Вы действительно хотите удалить ${data || ""}?`}
				okText={"Удалить"}
				okButtonProps={{
					danger: true
				}}
				placement={"bottomRight"}
				onConfirm={onConfirm}
			>
				<Button
					danger={true}
					type={"primary"}
					icon={<DeleteOutlined />}
					{...props}
				/>
			</Popconfirm>
		</>
	)
}

export { DeleteButton }
