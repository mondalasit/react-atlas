interface Props {
  component: any;
}

export default function ComponentDetails({
  component
}: Props) {

  if (!component) {

    return (
      <div
        style={{
          padding: "20px"
        }}
      >
        <h2>
          Component Details
        </h2>

        <p>
          Click a component node.
        </p>
      </div>
    );

  }

  return (
    <div
      style={{
        padding: "20px"
      }}
    >

      <h2>
        {component.name}
      </h2>

      <hr />

      <p>
        <strong>
          File
        </strong>
      </p>

      <p>
        {component.filePath}
      </p>

      <hr />

      <h3>
        Imports
      </h3>

      <ul>
        {
          component.imports?.map(
            (
              item: string
            ) => (
              <li key={item}>
                {item}
              </li>
            )
          )
        }
      </ul>

      <hr />

      <h3>
        Children
      </h3>

      <ul>
        {
          component.children?.map(
            (
              item: string
            ) => (
              <li key={item}>
                {item}
              </li>
            )
          )
        }
      </ul>

    </div>
  );
}