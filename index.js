function johnLennonFacts(array)
{
  var m;
  
  for (m=0;m<array.length;m++)
  
  {
    array[m]=array[m]+"!!!"
  }
  
  return array
}

function iLoveTheBeatles(s)
{
  var s1= []
  do
  {
    s1.push("I love the Beatles!")
    s=s+1
  }while(s<15)
  
    return s1
}

function theBeatlesPlay(m,I)

{
  var k=[]
  var i
  var string = m[0] + I[0]
  k.push(string)
  
  for (i=0;i<m.length;m++)
  {
    k.push(m[i])
    k.push(I[i])
  }
  return k
}