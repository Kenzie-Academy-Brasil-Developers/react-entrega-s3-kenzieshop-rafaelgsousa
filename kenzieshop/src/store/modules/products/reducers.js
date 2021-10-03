const estoque = [{id:3,name:"óculos",price:150.00},
                {id:15,name:"colxão de ar",price:300.00},
                {id:60,name:"celular",price:1800.00}]

const estoqueReducer=(state=estoque,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default estoqueReducer