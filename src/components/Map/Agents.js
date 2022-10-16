import React, {Fragment, useState} from 'react'
import AgentsDetail from './AgentsDetail'
import './Agents.css'

const Agents = () => {
    const [details, setDetail]= useState(AgentsDetail)

    return (
        <Fragment>
            <section className='agents'>

                <div className='agents-heading'>
                    <span>Agents</span>
                    <h2>Our Agents</h2>

                </div>

                <div className='agents-row'>
                    {
                        details.map((detail)=>{
                            return(
                                <div className='agents-column'>
                                    <div className='agents-card'>
                                    <div className='agent-thumb'>
                                    <img src={detail.Image} alt="" />
                                    <div className="social-link">
                                        <ul>
                                            <li>
                                               <a href='#'><i class="fa-brands fa-facebook-f"></i></a> 
                                               
                                               
                                            </li>
                                            <li>
                                            <a href='#'><i class="fa-brands fa-twitter"></i></a> 
                                            </li>
                                            <li>
                                            <a href='#'><i class="fa-brands fa-instagram"></i></a> 
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                    <div className="agent-info">
                                        <h3>{detail.name}</h3>
                                        <p>{detail.info}</p>
                                    </div>

                                    

                                    </div>


                                </div>
                            )

                        })
                    }

                </div>

            </section>
        </Fragment>
    )
}
export default Agents;