// 本番運用では process.env,SECRET_KEYからは直接読み込まず、configurationを使う。秘密鍵は十分な長さにする。
export const jwtConstants = {
    secret: process.env.SECRET_KEY ?? 'secretKey',
}