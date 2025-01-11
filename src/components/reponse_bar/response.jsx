import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import ImageComponent from '../ImageComponent/image';
import "./response.css"

import TypingEffect from './typingeffect';
import { recent_context } from '../context/cont';
import FormModal from './modal';
// import  SpeechRecognition ,{ useSpeechRecognition } from 'react-speech-recognition';

export const Array = []
const input_value = (name) => {

    Array.push(name)
}

function Response_Bar() {
    const [Display, setdisplay] = useState(false)
    const [prompt, setprompt] = useState("");
    const [sendrequest, setsendrequest] = useState(" ")
    const [response, setresponse] = useState("")
    const [loading, setloading] = useState(null)
    const { setRecent_items } = useContext(recent_context)
    const [toggle, settoggle] = useState(false)
    const [user_ModalBody,setuser_modal] = useState(false)

    input_value(prompt)

    useEffect(() => {
        const fetch_data = async () => {

            try {
                const res = await fetch("http://localhost:3004/prompt", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ prompt: sendrequest })
                })

                const response_data = await res.json()
                setresponse(response_data.response)

                console.log(" response ", typeof response_data.response)



                setloading(false)
            } catch (error) {
                console.log(error.message)
                console.log({ error: "An error occured " })
            }

        }

        fetch_data()
    }, [sendrequest])


    const Handle_toggle = () => {
        settoggle(prev => !prev)


        document.body.style.backgroundColor = toggle ? "white" : "black";
        document.body.style.color = toggle ? "black" : "white";
    }

    return (
        <div className='response-container'>
            <div className='header'>

                <div className='logo'>
                    <ImageComponent
                        src={assets.Gemini_Advanced_logo}
                        style={{
                            width: 150
                        }}
                    />

                </div>
                <div className="nav">
                    <div className='nav-name'>
                        <a href="https://one.google.com/explore-plan/gemini-advanced?utm_source=g1&utm_medium=paid_media&utm_campaign=sem_gemini_g1_sl&gad_source=1&gclid=CjwKCAiAp4O8BhAkEiwAqv2UqMzHjs04CxKR7HG8uySaCqdi-LLQvAZlU7qjV_7odhwoyLCVVPnDURoCoLkQAvD_BwE&g1_landing_page=65">Try advanced Gemini</a>
                    </div>
                    <div className="toggle_bar">
                        <button style={{
                            backgroundColor : toggle ? "black" : "white",
                           color: toggle ? "white" : "black"
                        }} onClick={Handle_toggle} >
                            {toggle ? "Light" : "Dark"}
                        </button>
                        {/* <ImageComponent 
                         src="https://cdn-icons-png.flaticon.com/512/5720/5720465.png"
                         width="50px"
                         onClick={()=>settoggle((prev) => (!prev))}
                        /> */}
                    </div>
                    <div className='nav-hamburger'>
                        {/* <ImageComponent
                            src="https://e7.pngegg.com/pngimages/530/733/png-clipart-goggle-playstore-icon-google-play-computer-icons-android-play-button-angle-rectangle-thumbnail.png"
                            style={{
                                width: 40,
                                borderRadius: '50%'
                            }}
                        /> */}
                        <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.bard&hl=en_IN&pli=1">
                        
                        <ImageComponent
                            src="https://e7.pngegg.com/pngimages/530/733/png-clipart-goggle-playstore-icon-google-play-computer-icons-android-play-button-angle-rectangle-thumbnail.png"
                            style={{
                                width: 35,
                                borderRadius: '0%'
                            }}
                        />
                        
                        </a>
                    </div>

                    <div className='nav-user-icon'>
                        <ImageComponent
                            src={assets.user_icon}
                            style={{
                                width: 40,
                                borderRadius: '50%'
                            }}
                            onClick={()=>setuser_modal(prev => !prev)}
                        />
                    </div>
                   {
                    user_ModalBody ?  <FormModal className="pos" /> : null
                   }
                </div>
            </div>
            {
                Display ? (
                    <>
                        <div className='dialog-box'>
                            <div>{
                                loading ? (
                                    <div className="loader">
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                        <div className="bar"></div>
                                    </div>

                                ) : <div > <TypingEffect text={response} queryt={prompt} delay={30} /></div>
                            }</div>
                        </div>
                    </>
                ) : <div className='main'>
                    <div className="greet">
                        <p><span>hello naveen</span> </p>
                        <p>how can i help you</p>
                    </div>
                    <div className="cards">
                        <div className="card" >
                            <p>suggest beautiful places to see on an upcoming road trip</p>
                            <ImageComponent className="card_image" src={assets.compass_icon} />
                        </div>
                        <div className="card">
                            <p>brief summarize this concept</p>
                            <ImageComponent className="card_image" src={assets.bulb_icon} />
                        </div>
                        <div className="card">
                            <p>five habits to follow daily</p>
                            <ImageComponent className="card_image" src={assets.message_icon} />
                        </div>
                        <div className="card">
                            <p>imporove the readibility of the code </p>
                            <ImageComponent className="card_image" src={assets.code_icon} />
                        </div>
                    </div>

                </div>
            }
            <div className='footer'>
                <div className='input-bar'>
                    <input type='text' style={{
                        backgroundColor: toggle ? "black" : "white",
                        color: toggle ? "white" : "back"
                    }} onChange={(e) => setprompt(e.target.value)} value={prompt} placeholder='Enter ur prompt' />
                </div>

                <div className='additonal-icons'>
                    <div className='mic-icon'>
                        <ImageComponent
                            src={assets.mic_icon}
                            style={{
                                width: 30
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            id="file-input"
                            style={{
                                display: "none",
                            }}
                            onChange={(e) => setprompt(e.target.value)}
                        />
                        <label
                            htmlFor="file-input"
                            style={{
                                display: "inline-block",
                                width: 30,
                                height: 30,
                                backgroundImage: `url(${assets.gallery_icon})`,
                                backgroundSize: "cover",
                                cursor: "pointer",
                            }}
                        ></label>
                    </div>
                    <div className='send-icon'>
                        <ImageComponent
                            src={assets.send_icon}
                            style={{
                                width: 30
                            }}
                            onClick={() => {
                                setsendrequest(prompt);
                                setloading(true);
                                setdisplay(prev => !prev);
                                setRecent_items(prompt);
                            }}
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Response_Bar;
