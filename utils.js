const updateObjAttr=(arr,id,newObj)=>{
    return arr.map(obj=>obj.id==id ? {...obj,...newObj} : obj)
}
const insertItemInArr=(arr,item)=>{
    return [...arr,item]
}
const delItemFromArr=(arr,id)=>{
    return arr.filter(item=>item.id!=id)
}