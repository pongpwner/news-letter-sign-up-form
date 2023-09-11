export default function Heading({ children }: headingProps) {
  return <h1 className="text-blue-950 text-4xl font-bold">{children}</h1>;
}

type headingProps = {
  children: string;
};
