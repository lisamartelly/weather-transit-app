
function BusStop(props) {

    if (props.busStopData) {
      const realTimeDepartures = props.busStopData.realTimeDepartures;
      const scheduledDepartures = props.busStopData.scheduledDepartures;
    
      return(<div>
        <h2>{props.stopName} </h2>
  
        <div className="BusStop">
        <div className="DepartureList">
          
          <h2>Real Time Departures:</h2>
  
          { realTimeDepartures.length > 0 ? (
          <table>
              <tr>
                <th>Route</th>
                <th>ETA</th>
              </tr>
          {realTimeDepartures.map(function(realTimeDepartureObj) {
                  return (
                    <tr>
                      <td>{realTimeDepartureObj.route_id} {realTimeDepartureObj.direction_text}</td> 
                      <td>{realTimeDepartureObj.departure_text}</td>
                    </tr>
                    )
                  })}
            </table>
           ) : ( "None incoming" )}
          </div>
  
          <div className="departureList">
            <h2>Sheduled Departures:</h2>
  
            { scheduledDepartures.length > 0 ? (
              <table>
              <tr>
                <th>Route</th>
                <th>ETA</th>
              </tr>
            {scheduledDepartures.map(function(scheduledDepartureObj) {
                  return (
                    <tr>
                      <td>{scheduledDepartureObj.route_id} {scheduledDepartureObj.direction_text}</td> 
                      <td>{scheduledDepartureObj.departure_text}</td>
                    </tr>
                    )
                  })}
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