import React, { Component } from "react";
import './style.css';
import sortEvents from '../utils/sortEvents';

import events from '../events'

class FutureEvents extends Component {
    state = {
        events: events
    }
    componentDidMount(){
        const sorted= sortEvents(this.state.events)
        this.setState({events:sorted})
    }

    render () {

       
        return (
            <div>
                {this.state.events.map(event=>{
                    const dotw= event.id===1 
                        ? 'Monday'
                        : event.id===2
                        ? 'Tuesday'
                        : event.id===3
                        ? 'Wednesday'
                        : event.id===4
                        ? 'Thursday'
                        : event.id===5
                        ? 'Friday'
                        : event.id===6
                        ? 'Saturday'
                        : 'Sunday'
                    return(
                        <div>
                           <p className='dotw'>{dotw}'s Event!</p>
                        <h2 className='eventTitle'>{event.name}</h2>
                            <p className='eventDescription'>
                            {event.description}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {event.funfact}
                            </p>
                            <p className='checkout'>
                                Check out the Maps page to find the event 
                                location, or find out more about {event.name} <a href={event.weblink}>here</a>!
                            </p> 
                        </div>
                    )
                })}
                   
            </div>
            );
    }
};

export default FutureEvents;