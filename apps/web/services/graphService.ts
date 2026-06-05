export async function getGraph() {

  const response =
    await fetch(
      "http://localhost:4000/graph"
    );

  return response.json();
}