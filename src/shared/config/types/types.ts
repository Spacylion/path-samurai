export type PhotosType = {
    small: string | null
    large: string | null
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ContactsType = {
    github: string
    facebook: string
    vk: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
}