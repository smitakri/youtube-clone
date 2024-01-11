
import Button from './Button'
import { useState, useRef } from "react";
import gsap from "gsap";

export default function ButtonList() {
  const buttons=["All","Taarak Mehta Ka Ooltah Chasma", "Drama","Comedy","Music","Thriller","Seminar","Mantra","Ritual","Bhajan","Lecture","API","Movies","News","Bollywood","Motivation"];
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <div className="btn-list">
      {scrollX !== 0 && (
        <button
          className="scroller-btn-btnlist-lt"
          onClick={() => slide(-50)}
        >
         <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z"/></svg>
        </button>
      )}
      <ul ref={scrl} onScroll={scrollCheck} className="ul-btnlist">
        {
            buttons.map((button, index) => {
            if(index===0)
              return <Button text={button} active={true}/>
              return <Button text={button}/>
          })
        }
      </ul>
      {!scrolEnd && (
        <button
          className="scroller-btn-btnlist-rt"
          onClick={() => slide(+50)}
        >
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
        </button>
      )}
    </div>
  );
}
