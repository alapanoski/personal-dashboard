import Link from "next/link"

export default function Sidebar() {
  return (
    <div className="h-full w-72 bg-black text-gray-200">
      <div className="w-full p-4 flex justify-start items-center">
        <p className=" text-3xl font-bold">Dashboard</p>
      </div>
      <div className="h-full w-full p-4 flex flex-col justify-start items-start">
        <button className="h-10">
          <p>Analytics</p>
        </button>
        <button className="h-10">
          <p>Resources</p>
        </button>
        <button className="h-10">
          <Link href="/dashboard/sitedata">
            <p>Site Data</p>
          </Link>
        </button>
      </div>
    </div>
  )
}
