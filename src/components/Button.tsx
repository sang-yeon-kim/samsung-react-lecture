export default function Button({
  children,
  ...restProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}) {
  return <button {...restProps}>{children}</button>
}
