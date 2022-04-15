<template>
   <div class="v-management-list">
       <h1 class="list__title">{{title}}</h1>
       <template v-if="list.length">
           <div class="list__item" v-for="item in list " :key="item.id">
                <div class="list__content">
                    <h2 class="list__item-title">Name of Bank: {{item.bankName}}</h2>
                    <span>Interest Rate: {{item.interestRate}}%</span>
                    <span>Мaximum Loan: {{item.maximumLoan}},USD</span>
                    <span>Minimum Down: Payment {{item.minimumDownPayment}}%</span>
                    <span>Loan Term {{item.loanTerm}}/months</span>
                </div>
                <button 
                class="list__remove" 
                @click="removeBank(item.id)"
                >Remove</button>
                <button 
                class="list__edit"
                @click="editBank(item)"
                >Edit</button>
            </div>
       </template>
       <template v-else>
           <h2 class="list__empty">List is empty</h2>
       </template>
   </div>
</template>

<script>
export default {
    name:'v-management-list',
    data:()=>({
        title:'Banks list',
    }),
    props:{
        list:{
            type:Array,
            default:()=>([])
        }
    },
    methods:{
        removeBank(index){
            this.$emit('removeOneBank',index)
        },
        editBank(data){
            this.$emit('showEditPopup',data)
        }
    }
}
</script>

<style>
span{
    display: block;
    margin-bottom: 5px;
}
.list__title{
    text-align: center;
}
.list__item{
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid rgb(27, 26, 26);
    border-radius: 15px;
    margin-bottom: 20px;
}
.list__content{
    margin-right: auto;
}
.list__edit,
.list__remove{
    border: none;
    border-radius: 15px 20px;
    padding: 15px;
    cursor: pointer;
    transition: all .5s ease;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
}
.list__edit{
    background-color: rgb(104, 207, 1);
}
.list__remove{
    margin-right: 20px;
    background-color: rgb(201, 52, 52);
}
.list__edit:hover{
    background-color: rgb(80, 158, 1);
    border-radius: 20px 15px;
}
.list__remove:hover{
    background-color: rgb(148, 39, 39);
    border-radius: 20px 15px;
}
.list__empty{
    text-align: center;
    padding: 20px;
    background-color: rgb(230, 230, 230);
    border-radius: 15px;
}
</style>