/* eslint-disable react-refresh/only-export-components */
import React from 'react'

function Count({text, count}) {
	console.log(`Count 컴포넌트 ${text}`)
	return <div>{text} - {count}</div>
}

export default React.memo(Count)