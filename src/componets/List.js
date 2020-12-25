import React, { Component } from 'react'
import axios from 'axios'
export class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             emp:[],
             errormsg:''
        }
    }
     
    componentDidMount()
    {
        // https://jsonplaceholder.typicode.com/posts
        
        axios.get('  https://www.reddit.com/r/reactjs.json').then((response)=>
        {
   console.log(response)
   console.log(response.data.data.childern[0])
   this.setState({emp:response.data})
        }).catch((error)=>
        {
 //  console.log(error)
 this.setState({errormsg:'error while feacthing data'})
        })
           
    }
    
    render() {
        const{emp,errormsg}=this.state;
        return (
            <div>
                <h2>list of Item</h2>
                {
                    emp.length?emp.map(e=>
                        {
               return <div key={e.id} >{e.id} {e.data.data.childern[0]}  </div>
                        }):null
                }

            {errormsg?<div>{errormsg}</div>:null}
            </div>
        )
    }
}

export default List
