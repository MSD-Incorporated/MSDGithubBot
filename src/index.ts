import { autoQuote } from "@roziscoding/grammy-autoquote";
import { Bot } from "grammy";
import { onStart } from "./extra";
import { githubComposer } from "./github";

const client = new Bot(process.env.TOKEN, { client: { apiRoot: process.env.LOCAL_API ?? "https://api.telegram.org" } });

client.use(autoQuote());
client.use(githubComposer);

client.start({ drop_pending_updates: true, onStart });
