import LogoS from '../../../assets/images/logo-s.png'
// import { useEffect, useRef } from 'react'
// import gsap from 'gsap-trial'
// import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import './index.scss'

const Logo = () => {
  // const bgRef = useRef()
  // const outlineLogoRef = useRef()
  // const solidLogoRef = useRef()

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap.timeline().to(bgRef.current, {
  //     duration: 1,
  //     opacity: 1,
  //   })
  //   gsap.fromTo(
  //     outlineLogoRef.current,
  //     {
  //       drawSVG: '0',
  //     },
  //     {
  //       delay: 1,
  //       duration: 11,
  //       drawSVG: '100%',
  //     }
  //   )

  //   gsap.fromTo(
  //     solidLogoRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 3.4,
  //       duration: 2,
  //     }
  //   )
  // }, [])

  return (
    // <div className="logo-container" ref={bgRef}>
    //   <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="P" />
    //   <svg
    //     width="557pt"
    //     height="882pt"
    //     viewBox="0 0 557 882"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <g className="svg-container" fill="none">
    //       <path
    //         ref={outlineLogoRef}
    //         d="M256.5 558.659V881.659H193M256.5 558.659C459.3 554.659 534 433.992 546 374.159C565.6 308.959 554.167 231.659 546 201.159C522.8 98.7589 409.5 38.3333 355 16C193.4 -17.6 51.1667 11.159 1 34.659V881.659H193M256.5 558.659L193 555.659V881.659M192.5 374.159C214.479 377.141 234.068 378.188 251.5 377.665M192.5 374.159L193.5 374.218M192.5 374.159V165.659M253.5 164.159C296.667 162.159 382.5 181.159 382.5 273.159C385.086 309.935 360.331 374.398 251.5 377.665M253.5 164.159C253.5 334.91 252.167 377.642 251.5 377.665M253.5 164.159H250H192.5V165.659M251.5 377.665L193.5 374.218M193.5 374.218C193.5 354.171 192.833 226.826 192.5 165.659"
    //       />
    //     </g>
    //   </svg>
    // </div>
    <div className="logo-container">
      <img className="solid-logo" src={LogoS} alt="P" />
    </div>
  )
}

export default Logo
