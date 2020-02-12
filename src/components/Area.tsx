import React, {useState, useEffect} from 'react'
import {AreaType} from '../utils/types'

const Area = (props: {areaTree:AreaType []})=>{

    console.log('area...', props.areaTree);
    return <>
        <div>
            <h3>国内病例</h3>
        </div>
        <div>
            <h3>海外国家</h3>
        </div>
    </>
}

// export default Area
// <div>
// <h3>国内病例</h3>
//     <div className="countryIn">
//        <div className="listTitle">
//             <p>地区</p>
//             <p>新增确诊</p>
//             <p>累计确诊</p>

//             <p>治愈</p>
//             <p>死亡</p>
//        </div>
//         <div className="listData">
//             {
//                 props.areaTree&&props.areaTree.map((item,index)=><div  key={index}>
//                     {
//                        item.children&& item.children.map((item2: any,index2: any)=><div className="everyData" key={index2}>
//                             <p >{item2.name}</p>
//                             {
//                                 item2.index==0?{}:''
//                             }
//                             <p>{item2.today.confirm}</p>
//                             <p>{item2.total.confirm}</p>
//                             <p>{item2.total.heal}</p>
//                             <p>{item2.total.dead}</p>    
//                        </div>)
//                     }

                     
//                 </div>)
//             }
//         </div>  
//     </div>


// </div>

// <div>
// <h3>海外国家<span>确诊例</span><span>死亡例</span></h3>
// <div>
//     <div className="countryOut">
//        <div className="listTitle">
//             <p>地区</p>
//             <p>确诊</p>
//             <p>治愈</p>
//             <p>死亡</p>
//        </div>
//         <div className="listData">
//             {
//                 props.areaTree&&props.areaTree.map((item,index)=><div className="everyData" key={index}>
//                     <p className="countryName">{item.name}</p>
//                     <p>{item.total.confirm}</p>
//                      <p>{item.total.heal}</p>
//                      <p>{item.total.dead}</p>                         
//                 </div>)
//             }
//         </div>  
//     </div>

   
// </div>
// </div>