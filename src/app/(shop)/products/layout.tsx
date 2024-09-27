export default function ProductsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="flex flex-row justify-between">
            <aside>
                <p>Hello</p>
            </aside>
            {children}
            <aside>
                Hello
            </aside>
        </div>
    )
  }