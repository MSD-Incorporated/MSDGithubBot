import type { UserFromGetMe } from "grammy/types";

export const onStart = ({ username, id }: UserFromGetMe) => console.log(`${username} [${id}] started`);

export const githubRegexLink =
	/(?:https?:\/\/)?(?:www\.)?(?:github)\.com\/(?<repo>[a-zA-Z0-9-_]+\/[A-Za-z0-9_.-]+)\/blob\/(?<path>.+?)#L(?<first_line_number>\d+)[-~]?L?(?<second_line_number>\d*)/i;

export function safeSlice<T extends string | Array<any>>(input: T, length: number): T {
	return <T>(input.length > length ? input.slice(0, length) : input);
}
