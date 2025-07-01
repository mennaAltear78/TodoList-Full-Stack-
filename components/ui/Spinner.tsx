'use client'

import React from 'react'

function Spinner() {
  return (
<div className="flex items-center justify-center">
  <div className="h-2 w-2 animate-spin rounded-full  border-[2px] border-solid border-[white] border-t-transparent"></div>
</div>
  )
}

export default Spinner