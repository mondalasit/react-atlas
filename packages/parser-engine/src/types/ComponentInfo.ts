export interface ComponentInfo {
  id: string;
  name: string;
  type: "FunctionDeclaration" | "ArrowFunction";
  filePath: string;

  imports: string[];
  children: string[];
}