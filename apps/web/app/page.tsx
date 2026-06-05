import GraphViewer
from "../components/GraphViewer";

import {
sampleGraph
} from "../data/sampleGraph";

export default function Home() {

return ( <GraphViewer
   graph={sampleGraph}
 />
);
}
