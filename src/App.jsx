
import React, { useState } from 'react';
import "./App.scss" 

const App = () => {
  const Birthday = [
    {
      name: "Bertie Yates",
      age:29,
      img:"https://d1nslcd7m2225b.cloudfront.net/Pictures/480xAny/2/1/8/1423218_evayates_121588.jpg"
    },
    {
      name: "Hester Hogan",
      age:32,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6SOfRoP3dWhG8m9dATJeisZ3b6N6e8iuXA&s"
    },
    {
      name: "Larry Little",
      age:36,
      img:"https://www.athletespeakers.com/storage/celebrities/1532532837_larry-little.jpg"
    },
    {
      name: "Sean Walsh",
      age:34,
      img:"https://www.thesun.co.uk/wp-content/uploads/2022/10/NINTCHDBPICT000766635761.jpg?crop=0px%2C264px%2C2142px%2C1427px&resize=1920%2C1440"
    },
    {
      name: "Lola Gardner",
      age:29,
      img:"https://image.maxpreps.io/careers/2/8/0/2802a165-54f4-ea11-80ce-a444a33a3a97/thumbnail.jpg?version=638300672503231363"
    },
    {
      name: "Sudesh Gowda",
      age:26,
      img:"https://avatars.githubusercontent.com/u/112839296?v=4"
    }
  ]
  const [data, setData] = useState(Birthday);
  return (
    <div className='main'>

      <div className='section-top'>
      <h1>Today's Birthday: {data.length}</h1>
      </div>

      <div className='section-mid'>
        {data.map((item, index) => {
          return (
            <div id='test1'>
              <div id='test2'>
              <img src={item.img}/>
              </div>

              <div id='test3'>
                {item.name}
                <br />
                <div style={{ fontWeight: '300' }}>{item.age} years</div>
              </div>
            </div>
          )
        })}
      </div>

      <div id='section-buttom'>
      <button onClick={()=> setData([])}>Clear All</button>

      </div>

    </div>
  )
}

export default App
