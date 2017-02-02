$('#fetchName').ready(function(){
console.log("inside fetchName contact function");
$.ajax({
url:'fetchName',
datatype:'json',
type:'post',
cache:false,
success:function(data){
console.log("inside ajax");
console.log(data);
}
});//ajax end
});//function end