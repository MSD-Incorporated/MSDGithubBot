import type { UserFromGetMe } from "grammy/types";

export const onStart = ({ username, id }: UserFromGetMe) => console.log(`${username} [${id}] started`);
