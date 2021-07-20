
const sortEvents= (eventData)=>{
    let today= new Date().getDay()
    today= today===7 ? 0 : today
    console.log(today) 
    const sorted= []
    for(let i=today; i < eventData.length; i++){
        sorted.push(eventData[i])
    }
    if(today>0){
        for(let i=0; i<today; i++){
            sorted.push(eventData[i])
        }
    }
    return sorted;
}
export default sortEvents;