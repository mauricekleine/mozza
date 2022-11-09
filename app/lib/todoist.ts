import { TodoistApi } from "@doist/todoist-api-typescript";
import invariant from "tiny-invariant";

invariant(process.env.TODOIST_API_TOKEN, "TODOIST_API_TOKEN env var not set");

export const todoist = new TodoistApi(process.env.TODOIST_API_TOKEN);
