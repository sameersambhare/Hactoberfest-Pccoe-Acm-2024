// import React, { useEffect, useRef } from 'react';
// import image from '../images/black.jpg'
// import './Timeline.css'
// const Timeline = () => {
//   const containersRef = useRef([]); 
//   const arr = [
//     {
//       heading: "Heading 1",
//       date: "01/01/2024",
//       des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis molestias corrupti asperiores minus aliquam dolorem odit a."
//     },
//     {
//       heading: "Heading 2",
//       date: "02/02/2024",
//       des: `Assumenda dolor quibusdam ullam dolorum sunt? Nulla quaerat excepturi doloribus provident.`
//     },
//     {
//       heading: "Heading 3",
//       date: "03/03/2024",
//       des: "Yet another description to elaborate on the content of this timeline event."
//     },
//     {
//       heading: "Heading 4",
//       date: "04/04/2024",
//       des: `voluptatibus, rem vel! Incidunt aspernatur est ducimus molestiae, quod quia sapiente?`
//     },
//     {
//       heading: "Heading 5",
//       date: "05/05/2024",
//       des: "Description to highlight important aspects of the timeline."
//     },
//     {
//       heading: "Heading 6",
//       date: "06/06/2024",
//       des: "Final description for this timeline, rounding out the event summary."
//     },
//   ];

//       useEffect(() => {
//         const observer = new IntersectionObserver(
//           (entries) => {
//             entries.forEach((entry) => {
//               if (entry.isIntersecting) {
//                 entry.target.classList.add('appear');
//               } else {
//                 entry.target.classList.remove('appear');
//               }
//             });
//           },
//           { threshold: 0.7 }
//         );

//         const observedContainers = [...containersRef.current]; 

//         observedContainers.forEach((container) => {
//           if (container) observer.observe(container);
//         });

//         return () => {
//           observedContainers.forEach((container) => {
//             if (container) observer.unobserve(container);
//           });
//         };
//       }, []);

//   return (
//     <div className="timeline max-w-[1200px] my-[100px] mx-auto relative after:content-[' '] after:absolute after:w-[2px] after:h-[100%] after:bg-[#65ff23] after:top-0 after:transform after:translate-x-[-50%]">
//       {arr.map((item, index) => (
//         <div
//           ref={(el) => (containersRef.current[index] = el)}
//           className={`container relative py-[10px] px-[50px] ${index % 2 === 0 ? 'left-container left-0' : 'right-container left-[50%]'} opacity-0`}
//           style={{ animationDelay: `${index * 2}s` }}
//           key={index}
//         >
//           <img src={image} className={`img ${index % 2 !== 0 ? 'left-img' : 'right-img'}`} alt="banner" />
//           <div 
//             data-target="card-skew.shine" 
//             className={` ${index % 2 === 0 ? 'left-container hover:skew-y-3 hover:translate-x-2 ' : 'right-container hover:-skew-y-3 hover:-translate-x-2 '} scrollbar-none text-box relative h-[45vh] py-[20px] text-wrap px-[30px] m-0 rounded-lg bg-[#1f3829] text-white transition-all duration-300 ease-in-out transform hover:scale-[1.05] hover:bg-[#00120e] `}
//           > 
//             <h2 className="font-bold m-2 text-4xl">{item.heading}</h2>
//             <small className='m-2'>{item.date}</small>
//             <div className='w-full bg-green-500 h-[2px] m-2'></div>
//             <p className='m-2'>{item.des}</p>
//           </div>
//             {/* <span className={`${index % 2 === 0 ? 'right-arrow' : 'left-arrow'} absolute top-[28px] ${index % 2 === 0 ? 'right-[-15px] border-l-[15px]' : 'left-[35px] border-r-[15px]'} z-[1] w-0 h-0 border-t-[15px] border-b-[15px] border-t-transparent border-b-transparent border-l-[#00FF00] border-r-[#00FF00]`}></span> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;
