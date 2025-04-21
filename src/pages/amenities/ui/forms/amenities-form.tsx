import { Form, type FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import {
	Amenity,
	type AmenityChange,
	type HotelAmenity,
	type HotelAmenityChange,
	useCreateHotelAmenitiesMutation,
	useEditHotelAmenitiesMutation
} from "src/services/amenities"
import { useFormDevtoolsStore } from "src/shared/store"
import { FormDrawer } from "src/widgets/form-drawer"
import { FormTranslateItem } from "src/widgets/form-translate-item"

interface AmenitiesFormProps {
	type: "hotels" | "rooms"
}

const AmenitiesForm: FC<AmenitiesFormProps> = ({ type }) => {
	const [form] = Form.useForm<AmenityChange>()
	const params = useFormDevtoolsStore((state) =>
		state.getParams<HotelAmenity | Amenity>()
	)

	const {
		mutate: addAmenity,
		isPending: addLoading,
		isSuccess: addSuccess
	} = useCreateHotelAmenitiesMutation(
		type === "hotels" ? "hotel" : "room",
		params?.id
	)
	const {
		mutate: editAmenity,
		isPending: editLoading,
		isSuccess: editSuccess
	} = useEditHotelAmenitiesMutation(type === "hotels" ? "hotel" : "room")

	const onFinish: FormProps<HotelAmenityChange>["onFinish"] = (values) => {
		if (
			(params &&
				"hotel_amenity_category_id" in params &&
				params?.hotel_amenity_category_id) ||
			(params &&
				"room_amenity_category_id" in params &&
				params?.room_amenity_category_id)
		) {
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

	useEffect(() => {
		if (
			params &&
			"room_amenity_category_id" in params &&
			params?.room_amenity_category_id
		) {
			form.setFieldsValue({
				...params,
				name_ru: params?.name?.ru,
				name_en: params?.name?.en,
				name_uz: params?.name?.uz,
				name_kk: params?.name?.kk
			})
		}
	}, [form, params])

	useEffect(() => {
		if (
			params &&
			"hotel_amenity_category_id" in params &&
			params?.hotel_amenity_category_id
		) {
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
			title={
				(params &&
					"hotel_amenity_category_id" in params &&
					params?.hotel_amenity_category_id) ||
				(params &&
					"room_amenity_category_id" in params &&
					params?.room_amenity_category_id)
					? "Изменить"
					: "Добавить"
			}
			formKey={"primary"}
			loading={addLoading || editLoading}
			success={addSuccess || editSuccess}
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

export { AmenitiesForm }
