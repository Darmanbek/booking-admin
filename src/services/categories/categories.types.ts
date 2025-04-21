import type { TranslateName } from "src/services/shared"

export type Category = {
	id: number
	name: TranslateName
	description: TranslateName
}

export type CategoryChange = {
	id?: number
	description_ru: string
	description_en: string
	description_uz: string
	description_kk: string
	name_ru: string
	name_en: string
	name_uz: string
	name_kk: string
}
