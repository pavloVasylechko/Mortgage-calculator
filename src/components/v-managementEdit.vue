<template>
  <div class="v-management-edit">
      <div class="edit__popup">
          <div class="edit__popup-header">
              <h1 class="edit__popup-title">Edit bank</h1>
              <button 
              class="edit__popup-close"
              @click="closePopup"
              >
                  <i class="fa-solid fa-circle-xmark"></i>
              </button>
          </div>
          <div class="edit__popup-main">
              <form action="" class="edit__popup-form">
                  <input type="text" class="edit__popup-input" v-model="bankList.bankName">
                  <input type="text" class="edit__popup-input" v-model="bankList.interestRate">
                  <input type="text" class="edit__popup-input" v-model="bankList.maximumLoan">
                  <input type="text" class="edit__popup-input" v-model="bankList.minimumDownPayment">
                  <input type="text" class="edit__popup-input" v-model="bankList.loanTerm">
              </form>
          </div>
          <div class="edit__popup-footer">
              <button class="edit__popup-change" @click="saveNewСhanges(bankList)">Сhange</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'v-management-edit',
    methods:{
        closePopup(){
            this.$emit('closeEditPopup')
        },
        saveNewСhanges(data){
            this.$emit('editNewData',data)
        }
    },
    props:{
        bank:{
            type:Object,
            default:()=>({})
        }
    },
    data:()=>({
        
    }),
    computed:{
        bankList(){
            const bankList ={...this.bank}
            return bankList
        }
    }
}
</script>

<style>
.v-management-edit{
    padding: 40px;
    position: absolute;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.38); 
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.38);
}
.edit__popup-form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
}
.edit__popup-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.edit__popup-close{
    background-color: inherit;
    border: none;
    cursor: pointer;
}
.edit__popup-close i{
    font-size: 24px;
    transition: color .5s ease;
}
.edit__popup-close i:hover{
    color: red;
}
.edit__popup-change{
    background-color: rgb(104, 207, 1);
    border: none;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    transition: all .5s ease;
    color: #fff;
    text-transform: uppercase;
    font-weight: 700;
}
.edit__popup-change:hover{
    background-color: rgb(80, 158, 1);
}
.edit__popup-main{
    margin-bottom: 20px;
}
.edit__popup-input{
    height: 20px;
    border-radius: 15px;
    border: 1px solid #6195ED;
    padding: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
}
.edit__popup-input:last-child{
    grid-column: span 2;
}
</style>