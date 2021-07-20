import React, { Component } from "react";
import './style.css'

import events from '../events.json'

class FutureEvents extends Component {
    state = {
        events
    }

    render () {
        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, 0);
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        var d = new Date();
        var n = d.getDay() - 1;

        const test = n + 3;

        console.log(test)

        let test1 = 0;

        
            if (test > 6) {
                test1 = test - 7;
                console.log(test1)
                console.log(days[test1])
            }


        // dotw = day of the week
        const dotw = days[n]
        const title = events[n].name
        const description = events[n].description
        const funfact = events[n].funfact
        const weblink = events[n].weblink

        const dotw2 = days[n + 1]
        const title2 = events[n + 1].name
        const description2 = events[n + 1].description
        const funfact2 = events[n + 1].funfact
        const weblink2 = events[n + 1].weblink

        // const dotw3 = days[n + 2]
        // const title3 = events[n + 2].name
        // const description3 = events[n + 2].description
        // const funfact3 = events[n + 2].funfact
        // const weblink3 = events[n + 2].weblink

        // const dotw4 = days[n + 3]

        // const title4 = events[n + 3].name
        // const description4 = events[n + 3].description
        // const funfact4 = events[n + 3].funfact
        // const weblink4 = events[n + 3].weblink

        // const dotw5 = days[n + 4]
        // const title5 = events[n + 4].name
        // const description5 = events[n + 4].description
        // const funfact5 = events[n + 4].funfact
        // const weblink5 = events[n + 4].weblink

        // const dotw6 = days[n + 5]
        // const title6 = events[n + 5].name
        // const description6 = events[n + 5].description
        // const funfact6 = events[n + 5].funfact
        // const weblink6 = events[n + 5].weblink

        // const dotw7 = days[n + 6]
        // const title7 = events[n + 6].name
        // const description7 = events[n + 6].description
        // const funfact7 = events[n + 6].funfact
        // const weblink7 = events[n + 6].weblink

        return (
            <div className='futureEventGrid'>
                    <div className='futureEventSection'>
                        <p className='dotw'>{dotw}'s Event!</p>
                        <h2 className='eventTitle'>{title}</h2>
                            <p className='eventDescription'>
                            {description}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {funfact}
                            </p>
                            <p className='checkout'>
                                Find out more about {title} <a href={weblink}>here</a>!
                            </p>
                    </div>
                    <div className='futureEventSection'>
                        <p className='dotw'>{dotw2}'s Event!</p>
                        <h2 className='eventTitle'>{title2}</h2>
                            <p className='eventDescription'>
                            {description2}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {funfact2}
                            </p>
                            <p className='checkout'>
                                Find out more about {title2} <a href={weblink2}>here</a>!
                            </p>
                    </div>
                    <div className='futureEventSection'>
                        <p className='dotw'>{dotw}'s Event!</p>
                        <h2 className='eventTitle'>{title}</h2>
                            <p className='eventDescription'>
                            {description}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {funfact}
                            </p>
                            <p className='checkout'>
                                Find out more about {title} <a href={weblink}>here</a>!
                            </p>
                    </div>
                    <div className='futureEventSection'>
                        <p className='dotw'>{dotw}'s Event!</p>
                        <h2 className='eventTitle'>{title}</h2>
                            <p className='eventDescription'>
                            {description}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {funfact}
                            </p>
                            <p className='checkout'>
                                Find out more about {title} <a href={weblink}>here</a>!
                            </p>
                    </div>
                    <div className='futureEventSection'>
                        <p className='dotw'>{dotw}'s Event!</p>
                        <h2 className='eventTitle'>{title}</h2>
                            <p className='eventDescription'>
                            {description}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {funfact}
                            </p>
                            <p className='checkout'>
                                Find out more about {title} <a href={weblink}>here</a>!
                            </p>
                    </div>
                    <div className='futureEventSection'>
                        <p className='dotw'>{dotw}'s Event!</p>
                        <h2 className='eventTitle'>{title}</h2>
                            <p className='eventDescription'>
                            {description}
                            </p>
                        <h3 className='funFactHeader'>FunFact:</h3>
                            <p className='funFact'>
                                {funfact}
                            </p>
                            <p className='checkout'>
                                Find out more about {title} <a href={weblink}>here</a>!
                            </p>
                    </div>
            </div>
            );
    }
};

export default FutureEvents;