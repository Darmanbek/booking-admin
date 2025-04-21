import { Form, FormProps, Input } from "antd"
import { type FC, useEffect } from "react"
import { LocationCityChange } from "src/services/locations"
import {
	Payment,
	PaymentChange,
	useCreatePaymentsMutation,
	useEditPaymentsMutation
} from "src/services/payments"
import { useFormDevtoolsStore } from "src/shared/store"
import { FormDrawer } from "src/widgets/form-drawer"
import { FormTranslateItem } from "src/widgets/form-translate-item"

const PaymentsForm: FC = () => {
	const [form] = Form.useForm<PaymentChange>()

	const params = useFormDevtoolsStore((state) => state.getParams<Payment>())

	const {
		mutate: addPayment,
		isPending: addLoading,
		isSuccess: addSuccess
	} = useCreatePaymentsMutation()

	const {
		mutate: editPayment,
		isPending: editLoading,
		isSuccess: editSuccess
	} = useEditPaymentsMutation()

	const onFinish: FormProps<LocationCityChange>["onFinish"] = (values) => {
		if (params) {
			editPayment({
				...values,
				id: params.id
			})
			return
		}
		addPayment(values)
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
				name={"payment-form"}
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

export { PaymentsForm }
