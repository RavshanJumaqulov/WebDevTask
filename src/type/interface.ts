export interface Post {
    id: number,
    userId: number,
    body: string,
    title: string
}

export interface HeadsInterface {
    name: string,
    key: string
}
export interface UsersInterface {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export interface AlbumInterface {
    userId: number,
    id: number,
    title: string
}

export interface TodosInterface {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
