'use strict';

// console.log("zapros dannih....");


// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Podgotovka dannih....")
      
//         const product = {
//             name: "TV",
//             price: 2000
//         };
//       resolve(product);
//       }, 2000)
// })

// req.then((product) =>{
//   return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         product.status = "order";
//         console.log(product);
//         resolve(product);
//         // reject();
//     }, 2000);
//   });
// }).then(data =>{
//     data.modify = true;
//     return data;
// }).then(data =>{
//     console.log(data);
// }).catch(() =>{
//     console.error("Proizoshla oshibka");
// }).finally(() => {
//     console.log("Finally");
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });

};
// test(3000).then(() => console.log("3000 ms"));
// test(1000).then(() => console.log("1000 ms"));
// test(1000).then(() => console.log("2000 ms"));

// Promise.all([test(1000), test(2000)]).then(() =>{
//     console.log("All")
// })

Promise.race([test(1000), test(2000)]).then(() =>{
    console.log("First")
})

Promise.all([test(1000), test(2000)]).then(() =>{
    console.log("All")
})


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
  .then(response => response.json())
  .then(json => console.log(json))


  fetch('https://my-json-server.typicode.com/typicode/demo/posts', {
    method: "GET",
    // body: JSON.stringify({title: 'Post 2'}),
    // headers: {
    //     'Content-type': 'application/json'
    // }
})
  .then(response => response.json())
  .then(json => console.log(json))

//filter

//   const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

//   const shortNames = names.filter( (name) =>{
//       return name.length < 5
//   });

//   console.log(shortNames)

  // map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLocaleLowerCase());
// console.log(result)

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLocaleLowerCase());
// console.log(answers)

//every/some

// const some = [4, 'ewe', 'dfsdf'];

// // console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


//reduce

// const arr =[4, 5, 1, 3, 2, 6];
//                             // 0  4
//                             // 4  5
//                             // 9  1
//                             // 10 3

// const res = arr.reduce((sum, current)=> sum + current);

// console.log(res)

// const arr =['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current)=> `${sum}, ${current}`, 'SOMETHING');

// console.log(res)


const obj = {
    ivan: 'persone',
    ann:  'persone',
    dog:  'animal',
    cat:  'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr)


const invDcV = [
    {
      '2017-10-20T00:00:00+05': '',
      '2017-10-20T01:00:00+05': '',
      '2017-10-20T02:00:00+05': '',
      '2017-10-20T03:00:00+05': '',
      '2017-10-20T04:00:00+05': '',
      '2017-10-20T05:00:00+05': '',
      '2017-10-20T06:00:00+05': '',
      '2017-10-20T07:00:00+05': '200.4',
      '2017-10-20T08:00:00+05': '320.25',
      '2017-10-20T09:00:00+05': '420.4',
      '2017-10-20T10:00:00+05': '520.2',
      '2017-10-20T11:00:00+05': '520.2',
      '2017-10-20T12:00:00+05': '520.2',
      '2017-10-20T13:00:00+05': '580.2',
      '2017-10-20T14:00:00+05': '580.2',
      '2017-10-20T15:00:00+05': '420.4',
      '2017-10-20T16:00:00+05': '320.25',
      '2017-10-20T17:00:00+05': '220.25',
      '2017-10-20T18:00:00+05': '0',
      '2017-10-20T19:00:00+05': '',
      '2017-10-20T20:00:00+05': '',
      '2017-10-20T21:00:00+05': '',
      '2017-10-20T22:00:00+05': '',
      '2017-10-20T23:00:00+05': '',
      '2017-10-20T24:00:00+05': '',
    },
    {
      '2017-10-20T00:00:00+05': '',
      '2017-10-20T01:00:00+05': '',
      '2017-10-20T02:00:00+05': '',
      '2017-10-20T03:00:00+05': '',
      '2017-10-20T04:00:00+05': '',
      '2017-10-20T05:00:00+05': '',
      '2017-10-20T06:00:00+05': '',
      '2017-10-20T07:00:00+05': '200.4',
      '2017-10-20T08:00:00+05': '320.25',
      '2017-10-20T09:00:00+05': '420.4',
      '2017-10-20T10:00:00+05': '520.2',
      '2017-10-20T11:00:00+05': '520.2',
      '2017-10-20T12:00:00+05': '520.2',
      '2017-10-20T13:00:00+05': '520.2',
      '2017-10-20T14:00:00+05': '520.2',
      '2017-10-20T15:00:00+05': '420.4',
      '2017-10-20T16:00:00+05': '320.25',
      '2017-10-20T17:00:00+05': '220.25',
      '2017-10-20T18:00:00+05': '0',
      '2017-10-20T19:00:00+05': '',
      '2017-10-20T20:00:00+05': '',
      '2017-10-20T21:00:00+05': '',
      '2017-10-20T22:00:00+05': '',
      '2017-10-20T23:00:00+05': '',
      '2017-10-20T24:00:00+05': '',
    },
    {
      '2017-10-20T00:00:00+05': '',
      '2017-10-20T01:00:00+05': '',
      '2017-10-20T02:00:00+05': '',
      '2017-10-20T03:00:00+05': '',
      '2017-10-20T04:00:00+05': '',
      '2017-10-20T05:00:00+05': '',
      '2017-10-20T06:00:00+05': '',
      '2017-10-20T07:00:00+05': '200.4',
      '2017-10-20T08:00:00+05': '440.25',
      '2017-10-20T09:00:00+05': '320.4',
      '2017-10-20T10:00:00+05': '420.2',
      '2017-10-20T11:00:00+05': '420.2',
      '2017-10-20T12:00:00+05': '420.2',
      '2017-10-20T13:00:00+05': '420.2',
      '2017-10-20T14:00:00+05': '420.2',
      '2017-10-20T15:00:00+05': '320.4',
      '2017-10-20T16:00:00+05': '220.25',
      '2017-10-20T17:00:00+05': '120.25',
      '2017-10-20T18:00:00+05': '0',
      '2017-10-20T19:00:00+05': '',
      '2017-10-20T20:00:00+05': '',
      '2017-10-20T21:00:00+05': '',
      '2017-10-20T22:00:00+05': '',
      '2017-10-20T23:00:00+05': '',
      '2017-10-20T24:00:00+05': '',
    },
    {
      '2017-10-20T00:00:00+05': '',
      '2017-10-20T01:00:00+05': '',
      '2017-10-20T02:00:00+05': '',
      '2017-10-20T03:00:00+05': '',
      '2017-10-20T04:00:00+05': '',
      '2017-10-20T05:00:00+05': '',
      '2017-10-20T06:00:00+05': '',
      '2017-10-20T07:00:00+05': '200.4',
      '2017-10-20T08:00:00+05': '580.25',
      '2017-10-20T09:00:00+05': '580.4',
      '2017-10-20T10:00:00+05': '520.2',
      '2017-10-20T11:00:00+05': '520.2',
      '2017-10-20T12:00:00+05': '520.2',
      '2017-10-20T13:00:00+05': '520.2',
      '2017-10-20T14:00:00+05': '520.2',
      '2017-10-20T15:00:00+05': '420.4',
      '2017-10-20T16:00:00+05': '320.25',
      '2017-10-20T17:00:00+05': '220.25',
      '2017-10-20T18:00:00+05': '0',
      '2017-10-20T19:00:00+05': '',
      '2017-10-20T20:00:00+05': '',
      '2017-10-20T21:00:00+05': '',
      '2017-10-20T22:00:00+05': '',
      '2017-10-20T23:00:00+05': '',
      '2017-10-20T24:00:00+05': '',
    }
  ];
  
  const sysProps = {
    inverters: [
      {
        refV: 500
      }, {
        refV: 500
      }, {
        refV: 400
      }, {
        refV: 500
      }
    ]
  }
  
  const logEl = document.getElementById('foo');
  const result = doCalc(sysProps, [], [], [], invDcV, []);
  logEl.innerText = JSON.stringify(result);
  
  function doCalc (sysProps, sysPower, sysEnergy, invPower, invDcV, invAcVoltage) {
    const result = invDcV.map((invData, idx) => calcInvIntResLevel(sysProps.inverters[idx].refV, invData));
    return result;
  }
  
  function calcInvIntResLevel(refV, invDcV) {
    const halfDayVals = Object.values(invDcV)
      .slice(0, 10)
      .filter(val => val !== '')
      .map(val => parseInt(val, 10)); 
    const maxVoltageFirstHalfDay = Math.max(...halfDayVals);
    const medianVoltageDay = median(Object.values(invDcV));
    
    console.log(maxVoltageFirstHalfDay, medianVoltageDay);
    const ratio1 = maxVoltageFirstHalfDay / medianVoltageDay;
    const ratio2 = maxVoltageFirstHalfDay / refV;
    
    console.log(ratio1, ratio2);
    
    if (ratio1 > 1.1 && ratio2 > 1.1) {
      return "fail";
    } else if (ratio1 > 1.07 && ratio2 > 1.07) {
      return "check";
    }  else {
      return "ok";
    }
  }
  
  function median() {
    const values = rawValues.filter(val => val !== '')
    .map(val => parseFloat(val))
    .sort( (a,b) => (a - b) );
    const half = Math.floor(values.length/2);
  
    if(values.length % 2)
      return values[half];
    else 
      return (values[half-1] + values[half]) / 2.0;
  }
  

function foo(){
    function bar(){
        setTimeout(
            () => console.log('Curly',
            1000)
        )
    }
    console.log('Larry')
    return bar
}

let x = foo()
x()
console.log('Moe')


x = { 'foo' : 'bar'}
y = { 'baz': x}
z = y['baz']['foo']
console.log(z)


function findMax(nums) {
  let maxNum = -Infinity;
  nums.forEach(num => {
    if(num > maxNum){
      num = maxNum
    }
  })
  return maxNum;
}

findMax([1, 5, 78, 13])