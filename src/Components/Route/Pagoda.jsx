import React,{useState} from 'react'

import { Input } from '../Input/Input'
import { CardList } from '../CardList/index'
import '../../App.css'
  
export const  Pagoda=()=>{
    const [citieList, setCitieList]=useState([])
  return (
    <div>
         <Input setcitieList={setCitieList} />
         <CardList citieList={citieList}/>
    </div>
  )
}
