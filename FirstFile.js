console.log("Hello JavaScript") 
var marks=[30,40,50,60,70]
 let len=marks.length
 console.log(len)
 marks.push(60)
 console.log(marks.length)

 //reduce function is used when we  need to perform opertation on all the elements of the array
 
 let sum=marks.reduce((sum,totalMarks)=>sum+totalMarks,0)
  console.log(sum)
 //filter 
 let modified=marks.filter(score=>score%2==0) 
 console.log(modified)

