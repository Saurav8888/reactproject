import React, { Component } from 'react'
import axios from 'axios'
import {Card,Row,Col} from 'react-bootstrap'
import logo from '../componets/nature.jpg'

export class Final extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             emp:[],
             errormsg:''
        }
    }
     
    componentDidMount()
    {
        axios.get('https://www.reddit.com/r/reactjs.json').then((response)=>
        {
   console.log(response)
   this.setState({emp:response.data.data.children})
        }).catch((error)=>
        {
 
 this.setState({errormsg:'error while feacthing data'})
        })
           
    }
    


  
    render() {
        const{emp,errormsg}=this.state;
        return ( 
            
            <div className='container '  style={{display:'flex',position:'absolute',height:'100%',width:'100%'}}>
               

                  <div className='container-fluid d-flex justify-content-center'>
                <div className='row ' style={{margin:'75px',padding:'5px'}}>
                    <div>
              
               
            <div className="row valign-wrapper">
            <div className="col s6 offset-s3 valign">
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">

               
                <b style={{margin:'15px'}}><img src={logo} style={{width:'220px',height:'175px'}}></img></b>
               
                   <h1 style={{textAlign:'center' ,color:'blue',marginTop:'5px'}}>Challenge Title</h1>
                 
                  <Row>
                    {emp.map((emp,index)=>(
                        <Col key={index} className='col-md-6' >
                        <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Title:{emp.data.title}</Card.Title>
                        <Card.Text>
                           Score:{emp.data.score}
                        </Card.Text>
                        <Card.Text>
                            Url:{emp.data.url}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                    ))}
                </Row> 
                

                </div>
                
              </div>
            </div>


            
          </div>
           </div>
          
           </div>
            </div>
           </div>
           
           
           
           
        )
    }
}

export default Final





