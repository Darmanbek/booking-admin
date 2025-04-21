export type LocationCity = {
	name: string
	country_id: number
	id: number
	slug: string
	properties_count: number
	image: string
	aero_lat: number
	aero_lng: number
	rail_lat: number
	rail_lng: number
	geocode_lng: number
	geocode_lat: number
}

export type LocationCityChange = {
	id?: number
	name_ru: string
	name_en: string
	name_uz: string
	name_kk: string
}
