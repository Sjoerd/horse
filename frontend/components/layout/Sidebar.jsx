import Link from 'next/link'

export function SidebarItem(props) {
  return (
    <Link href={props.path}>
      <a href="#" className="text-green-100 hover:bg-green-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        {/* Current: "bg-green-900 text-white", Default: "text-green-300 hover:bg-green-700 hover:text-white" */}
        <svg className="text-green-200 group-hover:text-green-300 mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.icon} />
        </svg>
        {props.text}
      </a>
    </Link>
  )
}

export function MobileSidebarItem(props) {
  return (
    <Link href={props.path}> 
      <a href="#" className="text-green-100 hover:bg-green-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md">
        {/* Current: "bg-green-900 text-white", Default: "text-green-300 hover:bg-green-700 hover:text-white" */}
        <svg className="text-green-200 group-hover:text-green-300 mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={props.icon} />
        </svg>
        {props.text}
      </a>
    </Link>
  )
} 