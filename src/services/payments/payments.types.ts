import type { TranslateName } from "src/services/shared"

export type Payment = {
	id: number
	name: TranslateName
}

export type PaymentChange = {
	id?: number
	name: string
	name_ru: string
	name_en: string
	name_uz: string
	name_kk: string
}
