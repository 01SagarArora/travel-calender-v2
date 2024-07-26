interface Props{
    icon: React.ReactNode,
    label: string,
    content:string
}
const IconWithContent = (props:Props) => {
    
  return (
    <div className='flex flex-row gap-3 align-center'>
        
        {props.icon}
       
        <div className='flex flex-col'>
            <div className="text-secondary fs-14"><p>{props.label}</p></div>
            <div className="fs-18">{props.content}</div>
        </div>
    </div>
  )
}

export default IconWithContent