import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import {
	LocationCity,
	LocationCityChange,
	useCreateLocationQuery,
	useEditLocationQuery
} from "src/services/locations"
import { useFormDevtoolsStore } from "src/shared/store"
import { FormDrawer } from "src/widgets/form-drawer"
import { FormTranslateItem } from "src/widgets/form-translate-item"

const LocationsForm: FC = () => {
	const [form] = Form.useForm<LocationCityChange>()

	const params = useFormDevtoolsStore((state) =>
		state.getParams<LocationCity>()
	)

	const {
		mutate: addLocation,
		isPending: addLoading,
		isSuccess: addSuccess
	} = useCreateLocationQuery()

	const {
		mutate: editLocation,
		isPending: editLoading,
		isSuccess: editSuccess
	} = useEditLocationQuery()

	const onFinish: FormProps<LocationCityChange>["onFinish"] = (values) => {
		if (params) {
			editLocation({
				...values,
				id: params.id
			})
			return
		}
		addLocation(values)
	}

	useEffect(() => {
		if (params) {
			form.setFieldsValue({
				...params
			})
		}
	}, [params, form])
	return (
		<FormDrawer
			form={form}
			loading={addLoading || editLoading}
			success={addSuccess || editSuccess}
		>
			<Form
				form={form}
				layout={"vertical"}
				autoComplete={"off"}
				name={"location-form"}
				onFinish={onFinish}
			>
				<FormTranslateItem
					label={"Название"}
					name={"name"}
					rules={[{ required: true }]}
				>
					<Input />
				</FormTranslateItem>
			</Form>
		</FormDrawer>
	)
}

export { LocationsForm }
