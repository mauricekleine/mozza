import invariant from "tiny-invariant";

invariant(process.env.TODOIST_API_TOKEN, "TODOIST_API_TOKEN env var not set");

type CreateTaskArgs = {
  content: string;
  description: string;
  dueString: string;
  priority: number;
};

type Todoist = {
  createTask: (data: CreateTaskArgs) => Promise<Response>;
};

export const todoist: Todoist = {
  createTask: async function createTask({ dueString, ...data }) {
    return fetch("https://api.todoist.com/rest/v2/tasks", {
      body: JSON.stringify({ due_string: dueString, ...data }),
      headers: {
        Authorization: `Bearer ${process.env.TODOIST_API_TOKEN}`,
        "Content-Type": "application/json",
        "X-Request-Id": crypto.randomUUID(),
      },
      method: "POST",
    });
  },
};
