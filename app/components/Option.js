export default Option = ({title, values, onAppend}) => {
  return (
	<div>
              <h3 className='font-bold text-sm mb-4 mt-6'>{title}</h3>
              <div className='grid-flow-row'>
			  		{values.map(value  => {
						return (
							<button className='py-2 px-6 bg-gray-600 rounded-3xl text-xs uppercase m-2'
								key= {value}
								onClick={
									() => {
										appendPrompt(value)
									}
								}>
								{value}
							</button>
						);
					})}
                  	</div>
    </div>
  )
}

