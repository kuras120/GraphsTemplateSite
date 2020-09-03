export interface Token {
    header: Header;
    payload: Payload;
    signature: string;
}

export interface Header {
    alg: string;
    typ: string;
}

export interface Payload {
    exp: number;
    jti: string;
    token_type: string;
    user_id: number;
}
