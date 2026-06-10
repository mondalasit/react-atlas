interface Props {
  data: any;
}

export default function ExportButton({
  data,
}: Props) {

  function exportJson() {

    const blob =
      new Blob(
        [
          JSON.stringify(
            data,
            null,
            2
          )
        ],
        {
          type:
            "application/json"
        }
      );

    const url =
      URL.createObjectURL(
        blob
      );

    const a =
      document.createElement(
        "a"
      );

    a.href = url;

    a.download =
      "react-atlas-analysis.json";

    a.click();

    URL.revokeObjectURL(
      url
    );
  }

  return (
    <button
      onClick={exportJson}
    >
      Export JSON
    </button>
  );
}