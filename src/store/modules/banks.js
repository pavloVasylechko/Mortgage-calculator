import Vue from "vue";


const banksList = {
    namespaced: true,
    state:{
        list:{
            
        }
    },
    getters:{
        banksList:({list}) => Object.values(list)
    },
    mutations:{
        ADD_NEW_BANK(state,bank){
            Vue.set(state.list,bank.id,bank)
        },
        REMOVE_BANK_FROM_LIST(state,data){
            Vue.delete(state.list,data)
        },
        EDIT_LIST(state,data){
            const changes = Object.values(state.list).find(item=>{
                return item.id == data.id
            })
            changes.bankName = data.bankName
            changes.interestRate = data.interestRate
            changes.maximumLoan = data.maximumLoan
            changes.minimumDownPayment = data.minimumDownPayment
            changes.loanTerm = data.loanTerm
            
        }
    },
    actions:{
        addNewBank({commit},bank){
            const newBank = {...bank,id:String(Math.random())}
            commit('ADD_NEW_BANK',newBank)
        },
        removeBanlFromList({commit},data){
            commit('REMOVE_BANK_FROM_LIST',data)
        },
        editList({commit},data){
            commit('EDIT_LIST',data)
        }
    },
}

export default banksList;