export interface AuthDTO {
    email: string;
    password: string;
}

export interface AuthPayloadDTO {
    id: number;
    email: string;
    typeUser: number;
}
