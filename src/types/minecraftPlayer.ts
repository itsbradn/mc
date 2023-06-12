export interface MinecraftPlayerResponse {
    uuid: string;
    username: string;
    skin: { url: string; id: string };
    cape: { url: string; id: string };
}