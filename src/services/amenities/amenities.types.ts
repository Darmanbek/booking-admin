import type { TranslateName } from "src/services/shared"

export type Amenity = {
	id: number
	key: number
	name: TranslateName
	hotel_amenities: HotelAmenity[]
	room_amenities: HotelAmenity[]
	children: HotelAmenity[]
}

export type HotelAmenity = {
	key: number
	id: number
	name: TranslateName
	is_popular: boolean
	payment_type: string
	hotel_amenity_category_id: number
}

export type AmenityChange = {
	name: string
}

export type HotelAmenityChange = {
	id?: number
	slug?: string
	name: string
	is_popular: boolean
	payment_type: string
}
