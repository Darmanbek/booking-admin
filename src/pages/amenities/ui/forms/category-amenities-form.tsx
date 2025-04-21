import { Form, type FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import {
	type Amenity,
	type HotelAmenity,
	type HotelAmenityChange,
	useCreateAmenitiesMutation,
	useEditAmenitiesMutation
} from "src/services/amenities"
import { useFormDevtoolsStore } from "src/shared/store"
import { FormDrawer } from "src/widgets/form-drawer"
import { FormTranslateItem } from "src/widgets/form-translate-item"

interface CategoryAmenitiesFormProps {
	type: "hotels" | "rooms"
}

const CategoryAmenitiesForm: FC<CategoryAmenitiesFormProps> = ({ type }) => {
	const [form] = Form.useForm<HotelAmenityChange>()
	const params = useFormDevtoolsStore((state) =>
		state.getParams<Amenity | HotelAmenity>()
	)
	const formKey = useFormDevtoolsStore((state) => state.formKey)

	const { mutate: addAmenity, isPending: addLoading } =
		useCreateAmenitiesMutation(type === "hotels" ? "hotel" : "room")
	const { mutate: editAmenity, isPending: editLoading } =
		useEditAmenitiesMutation(type === "hotels" ? "hotel" : "room")

	const onFinish: FormProps<HotelAmenityChange>["onFinish"] = (values) => {
		if (formKey === "main") {
			if (params) {
				editAmenity({
					...values,
					id: params?.id
				})
				return
			}
			addAmenity({
				...values
			})
		}
	}

	useEffect(() => {
		if (params) {
			form.setFieldsValue({
				...params,
				name_ru: params?.name?.ru,
				name_en: params?.name?.en,
				name_uz: params?.name?.uz,
				name_kk: params?.name?.kk
			})
		}
	}, [form, params])
	return (
		<FormDrawer
			form={form}
			formKey={"main"}
			loading={addLoading || editLoading}
		>
			<Form
				layout={"vertical"}
				name={"amenities-form"}
				form={form}
				autoComplete={"off"}
				onFinish={onFinish}
			>
				<FormTranslateItem label={"Название"} name={"name"}>
					<Input />
				</FormTranslateItem>
			</Form>
		</FormDrawer>
	)
}

export { CategoryAmenitiesForm }
