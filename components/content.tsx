import { ScriptProps } from "next/script";

export default function Content(props: ScriptProps) {
  return <main className="px-4 md:px-20 xl:px-32 my-16">{props.children}</main>;
}
