export default function Button({
  children,
  form,
  type,
  handleClick = () => {
    return;
  },
}: buttonProps) {
  return (
    <button
      type={type}
      form={form}
      className=" text-sm rounded-md bg-blue-950 text-white px-5 py-2
        active:bg-gradient-to-r active:from-rose-400 active:to-orange-500
        "
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}
type buttonProps = {
  children: String;
  form?: string;
  type: "button" | "submit";
  handleClick?: Function;
};
