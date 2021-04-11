export type UserType = {
    id: number | string,
    name: string,
    surname: string,
    email: string,
    phone: string,
    city: string,
    active?: boolean
};

export type FormDataType = {
    id: number | string | null,
    name: string,
    surname: string,
    email: string,
    phone: string,
    city: string,
    active?: boolean
};

// export type SortingTypes = 'name' | 'surname' | 'phone'  | 'email' | 'city'

export enum SortingTypes {
    BY_NAME = 'name',
    BY_SURNAME = 'surname',
    BY_PHONE = 'phone',
    BY_EMAIL = 'email',
    BY_CITY = 'city',
}

export type SortOrder = 'asc' | 'desc';


