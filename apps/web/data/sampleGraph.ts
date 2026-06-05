export const sampleGraph = {
nodes: [
{
id: "App",
label: "App"
},
{
  id: "Auth",
  label: "Auth"
},

{
  id: "DepartmentMain",
  label: "DepartmentMain"
},

{
  id: "DeliveryAgentMain",
  label: "DeliveryAgentMain"
}

],

edges: [
{
source: "App",
target: "Auth"
},

{
  source: "App",
  target: "DepartmentMain"
},

{
  source: "App",
  target: "DeliveryAgentMain"
}

]
};
