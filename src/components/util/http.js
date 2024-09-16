import { getAuthToken} from "../auth/util/auth";

export async function addTodo({todo, completed}) {

   const response = await fetch("http://localhost:8080/todo/add-todo", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getAuthToken()
    },
    body: JSON.stringify({todo, completed})
   })

   const resData = await response.json();

   if(response.status !== 200) {
    console.log(resData);
   }

   return true;
}

export async function retrieveAllTodos() {

    const response = await fetch("http://localhost:8080/todo/get-todos", {
        headers: {
            Authorization: "Bearer " + getAuthToken()
        }
    });

    const resData = await response.json();

    return resData.todos;
    
}

export async function updateTodo(id) {
    const response = await fetch(" http://localhost:8080/todo/update-todo", {
        method: "PATCH",
        headers: {
            "Content-Type" : "application/json",
            Authorization: "Bearer " + getAuthToken()
        },
        body: JSON.stringify({todoId: id})
    })

    const resData = await response.json()

    console.log(resData);

    return true;
}