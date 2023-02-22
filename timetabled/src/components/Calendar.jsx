import React from "react";
import Event from "./Event";

const Calendar = () => {
  return(
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event='Sensō-ji' color ='pink' location = 'Asakusa, Tokyo'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Mount Fuji' color ='blue' location = 'Honshū'/>
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> 
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Jingu' color ='pink' location = 'Hokkaido, Japan'/>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <Event event='Tokyo Tower' color ='green' location = 'Asakusa, Tokyo'/>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Himeji Castle' color ='blue' location = 'Hyōgo, Japan'/>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <Event event='Goshikinuma' color ='blue' location = 'Fukushima, Japan'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Ghibli Museum' color ='pink' location = 'Inokashira Park in Mitaka'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <Event event='Tokyo Tower' color ='blue' location = 'Minato, Tokyo'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <Event event='Azuma-kofuji' color ='green' location = 'Fukushima, Japan'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;