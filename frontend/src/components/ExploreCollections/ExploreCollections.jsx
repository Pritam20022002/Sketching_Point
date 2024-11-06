import React from 'react'
import './ExploreCollections.css'
import { collections_list } from '../../assets/assets'

const ExploreCollections = ({category,setCategory}) => {
  return (
    <div className='explore-collections' id='explore-collections'>
        <h1>Explore our collections</h1>
        <p className='explore-collections-text'>Explore a unique collection of hand-drawn sketches, crafted with passion and precision. Each piece tells a story and captures the essence of creativity. Our mission is to bring art into your life, one beautiful sketch at a time.</p>
        <div className="explore-collections-list">
            {collections_list.map((item,index)=>{
                    return(
                        <div onClick={()=>setCategory(prev=>prev===item.collections_name?"All":item.collections_name)} key={index} className="explore-collections-list-item">
                            <img className={category===item.collections_name?"active":""} src={item.collections_image} alt="" />
                            <p>{item.collections_name}</p>
                        </div>
                    )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreCollections