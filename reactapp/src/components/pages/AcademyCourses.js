import React from 'react'
import Card from '../UI/Card'

function AcademyCourses() {
  return (<div className='p-2 '>
      <Card>
          <div className='col'>
          <table>
              <tbody>
                  <tr>
                      <td>Course name :</td>
                      <td>.net</td>
                  </tr>
                  <tr>
                      <td>Course Duration:</td>
                      <td>.net</td>
                  </tr>
                  <tr>
                      <td>Course Available time :</td>
                      <td>.net</td>
                  </tr>
              </tbody>
          </table>
          </div>
          <div className='col'>
          <table>
              <tbody>
                  <tr>
                      <td>Course name :</td>
                      <td>.net</td>
                  </tr>
                  <tr>
                      <td>Course Duration:</td>
                      <td>.net</td>
                  </tr>
                  <tr>
                      <td><button>Enroll Course</button></td>
                      
                  </tr>
              </tbody>
          </table>
          </div>
      </Card>
  </div>
   
  )
}

export default AcademyCourses
