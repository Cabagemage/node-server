

type TodoStatus = "created" |  "inProgress" | "done"

type Todo = {
    id: number;
    title: string;
    description: string;
    status: TodoStatus
}