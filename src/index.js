module.exports = 
function longestConsecutiveLength(array) {
  if(array.length == 0) return 0;
  array = array.sort((a,b) => a-b)
  let last_val = array[0], max_count=1,count = 1;

  for(let num = 1; num < array.length;num++)
  {
  	if(array[num]-1 == last_val )//|| array[num] == last_val)
  	{
  		last_val = array[num];
  		count++;
  	}
  	else
  	{
  		last_val = array[num];
  		if(count > max_count)
  			max_count = count;
  		count = 1;
  	}
  }
  return max_count;

}
