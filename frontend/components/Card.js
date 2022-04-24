import { useRouter } from "next/router"

export default function Card({ children }) {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        { children }
      </div>
    </div>
  )
}

export function CardTitle({ children, ...props}) {

  const router = useRouter();

  return (
    <h1 className="my-0 mb-4 pl-2 max-w-3xl text-3xl font-bold leading-none lg:leading-none md:leading-none align-middle text-zinc-700 flex">
      {props.showBackbutton ? (
        <span className="pr-2" onClick={() => router.back()}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </span>
      ) : ''}
      
      { children }
    </h1>
  )
}