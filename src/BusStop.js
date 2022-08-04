
import "./BusStop.scss";

function BusStop(props) {

    if (props.busStopData) {
      const realTimeDepartures = props.busStopData.realTimeDepartures;
      const scheduledDepartures = props.busStopData.scheduledDepartures;
    
      return(<div className="busStopBlock">
        <h2 className ="busStopName"> {props.stopName} </h2>
  
        <div className="BusStop">
        <div className="DepartureList realTimeDepartureList">
          <h3 className="departureListHeader" >Real Time</h3>
  
          { realTimeDepartures.length > 0 ? (
          <table>
          {realTimeDepartures.map(function(realTimeDepartureObj) {
                  return (
                    <tr>
                      <td> <p className="routeNumber">{realTimeDepartureObj.route_id}{realTimeDepartureObj.terminal}</p> </td> 
                      <td className="departureText">{realTimeDepartureObj.departure_text}</td>
                    </tr>
                    )
                  })}
            </table>
           ) : ( "None incoming" )}
          </div>
  
          <div className="DepartureList scheduledDepartureList">
            <h3 className="departureListHeader">Sheduled</h3>
  
            { scheduledDepartures.length > 0 ? (
              <table>
            {scheduledDepartures.map(function(scheduledDepartureObj) {
                  return (
                    <tr>
                      <td><p className="routeNumber">{scheduledDepartureObj.route_id}{scheduledDepartureObj.terminal}</p> </td> 
                      <td className="departureText">{scheduledDepartureObj.departure_text}</td>
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