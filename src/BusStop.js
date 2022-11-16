
import "./BusStop.scss";


function BusStop({busStopData, stopName}) {

    if (busStopData) {
      const realTimeDepartures =busStopData.realTimeDepartures;
      const scheduledDepartures = busStopData.scheduledDepartures;
    
      return(<div className="busStopBlock">
        <h2 className ="busStopName"> {stopName} </h2>
  
        <div className="BusStop">
        <div className="DepartureList realTimeDepartureList">
          <h3 className="departureListHeader" >Real Time</h3>
  
          { realTimeDepartures.length > 0 ? (
          <table>
            <tbody>
          {realTimeDepartures.map(function(realTimeDepartureObj, index) {
                  return (
                    <tr key={index}>
                      <td> <p className="routeNumber">{realTimeDepartureObj.route_id}{realTimeDepartureObj.terminal}</p> </td> 
                      <td className="departureText">{realTimeDepartureObj.departure_text}</td>
                    </tr>
                    )
                  })}
              </tbody>
            </table>
           ) : ( "None incoming" )}
          </div>
  
          <div className="DepartureList scheduledDepartureList">
            <h3 className="departureListHeader">Sheduled</h3>
  
            { scheduledDepartures.length > 0 ? (
              <table>
                <tbody>
            {scheduledDepartures.map(function(scheduledDepartureObj, index) {
                  return (
                    <tr key={index}>
                      <td><p className="routeNumber">{scheduledDepartureObj.route_id}{scheduledDepartureObj.terminal}</p> </td> 
                      <td className="departureText">{scheduledDepartureObj.departure_text}</td>
                    </tr>
                    )
                  })}
              </tbody>
            </table>
            ) : (
              "None scheduled")}
          </div>
          </div>
      </div>)
    } else {
      return(<div>
        Loading...
      </div>)
    };    
  }

export default BusStop;