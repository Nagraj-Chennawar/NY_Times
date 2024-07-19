import React, { useState } from 'react'
import useFetchArticles from './useFetchArticles.hook'
function Home() {
    const data = useFetchArticles();
  return (
    <div>Home.component</div>
  )
}

export default Home