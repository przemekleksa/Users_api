type Gender = 'male' | 'female'
type Status = 'active' | 'inactive'

export interface User {
    id: string,
    name: string,
    email: string,
    gender: Gender,
    status: Status
}

export interface NewUser {
    name: string,
    email: string,
    gender: Gender,
    status: Status
}