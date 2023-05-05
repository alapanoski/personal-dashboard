import Sidebar from "@/components/dashboard/sidebar"

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-screen">
        <div className="w-full h-full flex flex-row ">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  )
}
