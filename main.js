
const fs=require('fs');
if(process.argv[2]=="add"){
    let data=  JSON.parse( fs.readFileSync('users.text','utf-8'));
    let _id;
    if(data.length ==0){
       _id=1
    }else{
         _id=data.length+1  
    }
    data.push({id:_id ,name: process.argv[3] ,grade: process.argv[4]});
    fs.writeFileSync('users.text' ,JSON.stringify(data));


}else if(process.argv[2]=="list"){
     data=  JSON.parse( fs.readFileSync('users.text','utf-8'));
     console.log(data)
}else if(process.argv[2]=="edit"){
    data=  JSON.parse( fs.readFileSync('users.text','utf-8'));
    let id = process.argv[4];
    let index = data.findIndex(el=>el.id ==id)
     console.log(index);
     data[index].grade=process.argv[3];
     fs.writeFileSync('users.text' ,JSON.stringify(data));

}else if(process.argv[2]=="del"){
    data=  JSON.parse( fs.readFileSync('users.text','utf-8'));
     let id = process.argv[3];
         let index = data.findIndex(el=>el.id ==id)
       console.log(index);
     data.splice(index,1);
     fs.writeFileSync('users.text' ,JSON.stringify(data));

}else if(process.argv[2]=="sum"){
    data=  JSON.parse( fs.readFileSync('users.text','utf-8'));
    let sum=0
    data.forEach(element => {
        return sum+=parseInt(element.grade)
        
    });
console.log(sum)

}