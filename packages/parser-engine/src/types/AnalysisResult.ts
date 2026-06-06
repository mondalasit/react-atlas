export interface ComponentDetails {

  id: string;

  name: string;

  filePath: string;

  imports: string[];

  children: string[];

}

export interface AnalysisResult {

  graph: {
    nodes: any[];
    edges: any[];
  };

  components: ComponentDetails[];

}