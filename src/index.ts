import { autoQuote } from "@roziscoding/grammy-autoquote";
import { Bot } from "grammy";
import { onStart } from "./extra";
import { githubComposer } from "./github";

const TOKEN = process.env.TOKEN;
const client = new Bot(TOKEN);

client.use(autoQuote());
client.use(githubComposer);

client.start({ drop_pending_updates: true, onStart });
