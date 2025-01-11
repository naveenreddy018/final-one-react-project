import React, { useState, useEffect, useContext } from 'react';
import ImageComponent from '../ImageComponent/image.jsx';
import { assets } from '../../assets/assets';
import './slide.css';
import { recent_context } from '../context/cont.jsx';
import { Array } from '../reponse_bar/response.jsx';


function SlideBar() {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { Recent_items } = useContext(recent_context)
  const arr = Array.join('')
  console.log(arr)


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const getMinWidth = () => {
    if (windowWidth <= 468) {
      return menu ? '55vw' : '0vw';
    } else if (windowWidth <= 768) {
      return menu ? '25vw' : '0vw';
    } else {
      return menu ? '15vw' : '0vw';
    }
  };

  return (
    <div className='slide_container'>
      <div className='top' style={{ minWidth: getMinWidth() }}>
        <ImageComponent
          src={assets.menu_icon}
          style={{
            width: 30,
            margin: 10,
          }}
          onClick={() => setMenu((prev) => !prev)}
        />

        <div className='top-section'>
          <div className='top-middle-layer'>
            <div className='plus-icon'>
              <ImageComponent
                src={assets.plus_icon}
                style={{
                  width: 30,
                  margin: 5
                }}
              />
              {menu && <p>New Chat</p>}
            </div>
          </div>

          <div className='top-bottom-layer'>
            <div className='recent-items'>
              {/* <ImageComponent
                src={assets.message_icon}
                style={{
                  width: 30,
                  margin:5
                }}
              /> */}
              {/* {menu && Recent_items.length>0 ? 
                
                  Recent_items.map((item,index)=> (
                    <div key={index}>
                    <h1>{item}</h1>
                    </div>
                  ))
                
               : null} */}


              {
                menu && Array.length > 0 ? (
                  <div className="recent-history">
                    {
                      Array.map((item, index) => (
                        <>
                          <p key={index}>{item}</p>
                        </>

                      ))
                    }
                  </div>
                ) : null

              }
            </div>
          </div>
        </div>
      </div>

      <div className='bottom'>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.history_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <p>History</p>}
        </div>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.question_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <p>Help</p>}
        </div>
        <div className='bottom-entry-item'>
          <ImageComponent
            src={assets.setting_icon}
            style={{
              width: 30,
            }}
          />
          {menu && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default SlideBar;

