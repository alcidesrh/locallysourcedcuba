(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{3043:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function i(e,t,n,i,c,a){const l=Object(o["K"])("q-icon"),r=Object(o["K"])("q-td"),s=Object(o["K"])("BaseTable"),d=Object(o["K"])("q-page");return Object(o["C"])(),Object(o["h"])(d,{padding:""},{default:Object(o["T"])((()=>[Object(o["l"])(s,{title:"Provinces",columns:e.columns,rows:e.items,loading:e.loading,"rows-per-page-options":[0],"hide-pagination":"",createRoute:"CreateProvince"},{"body-cell-icon":Object(o["T"])((t=>[Object(o["l"])(r,{key:"icon",props:t},{default:Object(o["T"])((()=>[Object(o["l"])(l,{class:"q-mr-sm",name:"edit",color:"teal",style:{"font-size":"20px",cursor:"pointer"},onClick:n=>e.edit(t.row)},null,8,["onClick"]),Object(o["l"])(l,{name:"delete",color:"negative",style:{"font-size":"20px",cursor:"pointer"},onClick:n=>e.remove(t.row)},null,8,["onClick"])])),_:2},1032,["props"])])),_:1},8,["columns","rows","loading"])])),_:1})}var c=n("f621"),a=n("6c02"),l=n("1840"),r=n("8b19"),s=n("7b9e"),d=n("b3fe");const u=[{name:"name",label:"Name",field:"name",align:"left"},{name:"icon"}];var b=Object(o["m"])({setup(){const e=Object(a["d"])(),t=Object(d["a"])();let{list:n,items:o}=Object(c["a"])(),{loading:i}=n();const{mutate:b,onError:m,onDone:p}=Object(l["d"])(r["deleteMutation"],(()=>({update:(e,{data:{deleteProvince:{province:{id:t}}}})=>{let n=e.readQuery({query:r["listQuery"]});n&&(o.value=n.provinces.filter((e=>e.id!=t)),e.writeQuery({query:r["listQuery"],data:{provinces:o.value}}))}})));return m((e=>{Object(s["b"])(e)})),p((()=>{Object(s["c"])({message:"The item have been deleted."})})),{items:o,columns:u,loading:i,router:e,deleteProvince:b,edit(t){const{item:n}=Object(c["a"])();n.value=Object.assign({},t),e.push({name:"EditProvince",params:{id:t._id}})},remove(e){t.dialog({title:"Confirm",message:"Would you like to delete this item?",cancel:!0,persistent:!0}).onOk((()=>{b({input:{id:e.id}})}))}}}}),m=n("9989"),p=n("db86"),O=n("0016"),j=n("eebe"),v=n.n(j);b.render=i;t["default"]=b;v()(b,"components",{QPage:m["a"],QTd:p["a"],QIcon:O["a"]})}}]);