export function Input(props) {
  return (
   <div className="mb-3 w-full">
      { props.label ? (<Label for={props?.inputName}>{ props?.label }</Label>) : '' }
      <div className="mt-1">
        <input type={ props?.type || "text" } name={props.inputName} id={props.inputName} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 px-4 rounded-full" placeholder={props?.placeholder} />
      </div>
    </div>
  )
}

export function Textarea(props) {
  return (<div></div>)
}

export function Button({ children, ...props}) {
  if (props.large) {
    return <button type={ props?.type || "button" } className="inline-flex items-center px-6 py-3 border border-transparent text-md leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">{ children }</button>
  }

  return <button type={ props?.type || "button" } className="inline-flex items-center px-3.5 py-2 border border-transparent text-md leading-4 font-medium rounded-full shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">{ children }</button>
}

export function Checkbox(props) {
  return (
  <div className="relative flex items-start">
    <div className="flex items-center h-5">
      <input id={props?.inputName} name={props?.inputName} type="checkbox" className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 rounded" />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor={props?.inputName} className="font-medium text-gray-700">{props.text}</label>
      {props.description ? (<p id={`${props?.inputName}-description`} className="text-gray-500">{props.description}</p>) : ''}
    </div>
  </div>
  )
}

export function Label({ children, ...props }) {
  return <label htmlFor={props?.for }  className={`ml-px pl-2 block text-sm font-medium ${props.muted ? 'text-gray-400' : 'text-gray-700'}`}>{ children }</label>
}