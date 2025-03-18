import React, { Component } from 'react';

// class IncreaseClassCount extends Component {
//   constructor(props) {
//     super();

//     this.state = {
//         count1: 0,
//         count2: 0,
//         count3: 0,
//         count4: 0,
//         count5: 0,
//         count6: 0,
//         count7: 0,
//         count8: 0,
//         count9: 0,
//         count10: 0
//     };
//   }

//   increaseClassCount = (key) => {
//     this.setState(prevState => ({
//       [key]: prevState[key] + 1
//     }));
//   };

//   render() {
//     const { count1, count2, count3, count4, count5,count6, count7, count8,count9, count10 } = this.state;

//     return (
//       <div>
//          User Class component
//         <div>Name : Name2</div>
//         <div>id : 67890</div>
        
//         <p>Count 1: {count1}</p>
//         <button onClick={() => this.increaseClassCount('count1')}>increaseClassCount</button>
//         <p>Count2: {count2}</p>
//         <button onClick={() => this.increaseClassCount('count2')}>increaseClassCount</button>
//         <p>Count 3: {count3}</p>
//         <button onClick={() => this.increaseClassCount('count3')}>increaseClassCount</button>
//         <p>Count 4: {count4}</p>
//         <button onClick={() => this.increaseClassCount('count4')}>increaseClassCount</button>
//         <p>Count 5: {count5}</p>
//         <button onClick={() => this.increaseClassCount('count5')}>increaseClassCount</button>
//         <p>Count 6: {count6}</p>
//         <button onClick={() => this.increaseClassCount('counte6')}>increaseClassCount</button>
//         <p>Count 7: {count7}</p>
//         <button onClick={() => this.increaseClassCount('count7')}>increaseClassCount</button>
//         <p>Count 8: {count8}</p>
//         <button onClick={() => this.increaseClassCount('count8')}>increaseClassCount</button>
//         <p>Count 9: {count9}</p>
//         <button onClick={() => this.increaseClassCount('count9')}>increaseClassCount</button>
//         <p>Count 10: {count10}</p>
//         <button onClick={() => this.increaseClassCount('count10')}>increaseClassCount</button>
       
//       </div>
//     );
//   }
// }


class UserClass extends Component {
      constructor(props) {
      super();
      this.state = {
        counts: Array(10).fill(0)
      };
    }
  
    incrementCount = (index) => {
      this.setState((ps) => {
        const newCounts = [...ps.counts];
        newCounts[index] += 1;
        //console.log(newCounts)
        return { counts: newCounts };
        
      });
    };
  
    render() {
      const { counts } = this.state;
  
      return (
        <div>
          {counts.map((count, index) => (
            <div key={index}>
              <p>Count {index + 1}: {count}</p>
              <button onClick={() => this.incrementCount(index)}>Increment count </button>
            </div>
          ))}
        </div>
      );
    }
  }
  
   export default UserClass;














   

















//    import React, { Component } from 'react';

// class IncreaseClassCount extends Component {
//   constructor(props) {
//     super(props);

    
//     this.state = {
//       counts: {
//         count1: 0,
//         count2: 0,
//         count3: 0,
//         count4: 0,
//         count5: 0,
//         count6: 0,
//         count7: 0,
//         count8: 0,
//         count9: 0,
//         count10: 0,
//       },
//     };
//   }

  
//   increaseCount = (key) => {
//     this.setState(prevState => ({
//       counts: {
//         ...prevState.counts,
//         [key]: prevState.counts[key] + 1,
//       }
//     }));
//   };

//   render() {
//     const { counts } = this.state;

//     // Generate UI elements dynamically based on the counts object
//     return (
//       <div>
//         User Class Component
//         <div>Name : Name2</div>
//         <div>id : 67890</div>
        
//         {Object.keys(counts).map(key => (
//           <div key={key}>
//             <p>{key.replace('count', 'Count ')}: {counts[key]}</p>
//             <button onClick={() => this.increaseCount(key)}>Increase {key.replace('count', 'Count ')}</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default IncreaseClassCount;







