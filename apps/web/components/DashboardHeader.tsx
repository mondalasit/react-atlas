interface Props {
  onReset: () => void;
}

export default function DashboardHeader({
  onReset,
}: Props) {

  return (

    <div
      className="
        flex
        justify-end
        mb-6
      "
    >

      <button
        onClick={onReset}
        className="
          px-4
          py-2
          rounded-lg
          bg-slate-800
          hover:bg-slate-700
          transition
        "
      >
        Analyze Another Project
      </button>

    </div>

  );

}