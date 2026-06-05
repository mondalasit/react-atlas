export async function getGraph() {

  const response =
    await fetch(
      "http://localhost:4000/analyze",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          projectPath:
            "E:/Project/project/frontend"
        })
      }
    );

  return response.json();
}