import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import {
	Category,
	CategoryChange,
	useCreateCategoriesMutation,
	useEditCategoriesMutation
} from "src/services/categories"
import { useFormDevtoolsStore } from "src/shared/store"
import { FormDrawer } from "src/widgets/form-drawer"
import { FormTranslateItem } from "src/widgets/form-translate-item"

interface CategoriesFormProps {
	type: "hotels" | "rooms"
}

const CategoriesForm: FC<CategoriesFormProps> = ({ type }) => {
	const [form] = Form.useForm<CategoryChange>()
	const params = useFormDevtoolsStore((state) => state.getParams<Category>())

	const {
		mutate: addCategory,
		isPending: addLoading,
		isSuccess: addSuccess
	} = useCreateCategoriesMutation(
		type === "hotels" ? "hotel-categories" : "room-types"
	)

	const {
		mutate: editCategory,
		isPending: editLoading,
		isSuccess: editSuccess
	} = useEditCategoriesMutation(
		type === "hotels" ? "hotel-categories" : "room-types"
	)

	const onFinish: FormProps<CategoryChange>["onFinish"] = (values) => {
		if (params) {
			editCategory({
				...values,
				id: params?.id
			})
			return
		}
		addCategory(values)
	}

	useEffect(() => {
		if (params) {
			form.setFieldsValue({
				...params,
				name_ru: params?.name?.ru,
				name_en: params?.name?.en,
				name_uz: params?.name?.uz,
				name_kk: params?.name?.kk,
				description_ru: params?.description?.ru,
				description_en: params?.description?.en,
				description_uz: params?.description?.uz,
				description_kk: params?.description?.kk
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
				layout={"vertical"}
				name={"category-form"}
				form={form}
				autoComplete={"off"}
				onFinish={onFinish}
			>
				<FormTranslateItem label={"Название"} name={"name"}>
					<Input />
				</FormTranslateItem>

				<FormTranslateItem label={"Описание"} name={"description"}>
					<Input.TextArea rows={4} />
				</FormTranslateItem>
			</Form>
		</FormDrawer>
	)
}

export { CategoriesForm }
