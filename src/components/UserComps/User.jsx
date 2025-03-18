import React, { useState } from 'react';

// function increaseCount() {
  
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);
//   const [count3, setCount3] = useState(0);
//   const [count4, setCount4] = useState(0);
//   const [count5, setCount5] = useState(0);
//   const [count6, setCount6] = useState(0);
//   const [count7, setCount7] = useState(0);
//   const [count8, setCount8] = useState(0);
//   const [count9, setCount9] = useState(0);
//   const [count10, setCount10] = useState(0);

//   return (

//     <div>
//         User Functional component
//         <div>Name : Name1</div>
//         <div>id : 12345</div>
    
//       <p>Count 1: {count1}</p>
//       <button onClick={() => setCount1(count1 + 1)}>increaseCount</button>
//       <p>Count 2: {count2}</p>
//       <button onClick={() => setCount2(count2 + 1)}>increaseCount</button>
//       <p>Count 3: {count3}</p>
//       <button onClick={() => setCount3(count3 + 1)}>increaseCount</button>
//       <p>Count 4: {count4}</p>
//       <button onClick={() => setCount4(count4 + 1)}>increaseCount</button>
//       <p>Count 5: {count5}</p>
//       <button onClick={() => setCount5(count5 + 1)}>increaseCount</button>
//       <p>Count 6: {count6}</p>
//       <button onClick={() => setCount6(count6 + 1)}>increaseCount</button>
//       <p>Count 7: {count7}</p>
//       <button onClick={() => setCount7(count7 + 1)}>increaseCount</button>
//       <p>Count 8: {count8}</p>
//       <button onClick={() => setCount8(count8 + 1)}>increaseCount</button>
//       <p>Count 9: {count9}</p>
//       <button onClick={() => setCount9(count9 + 1)}>increaseCount</button>
//       <p>Count 10:{count10}</p>
//       <button onClick={() =>setCount10(count10 + 1)}>increaseCount</button>
//     </div>
//   );
// }




function increaseCount() {
  const [counts, setCounts] = useState(Array(10).fill(0));

  const incrementCount = (index) => {
    const c = counts.map((count, i) => i === index ? count + 1 : count);
    setCounts(c);
  };

  return (
    <div>
      {counts.map((count, index) => (
        <div key={index}>
          <p>Count {index + 1}: {count}</p>
          <button onClick={() => incrementCount(index)}>Increment count</button>
        </div>
      ))}
    </div>
  );
}

export default increaseCount;




























// import React, { useState } from 'react';

// function CounterComponent() {
 
//   const [counters, setCounters] = useState({
//     count1: 0,
//     count2: 0,
//     count3: 0,
//     count4: 0,
//     count5: 0,
//     count6: 0,
//     count7: 0,
//     count8: 0,
//     count9: 0,
//     count10: 0,
//   });

  
//   const incrementCount = (countKey) => {
//     setCounters((prevCounters) => ({
//       ...prevCounters,
//       [countKey]: prevCounters[countKey] + 1,
//     }));
//   };

//   return (
//     <div>
//       User Functional component
//       <div>Name: Name1</div>
//       <div>id: 12345</div>

//       {Object.keys(counters).map((key, index) => (
//         <div key={index}>
//           <p>{key.charAt(0).toUpperCase() + key.slice(1)}: {counters[key]}</p>
//           <button onClick={() => incrementCount(key)}>Increase {key}</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CounterComponent;





