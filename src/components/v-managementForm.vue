<template>
   <div class="v-management-form">
       <form action="" class="form" @submit.prevent="addNewBank($event)">
           <input 
           type="text" 
           class="form__input" 
           placeholder="Bank name" 
           v-model.trim="list.bankName"
           :class="{invalid: $v.list.bankName.$dirty && !$v.list.bankName.required}"
           >
           <small v-if="$v.list.bankName.$dirty && !$v.list.bankName.required" class="helper-text invalid">This field must be filled</small>
           <input 
           type="text" 
           class="form__input" 
           placeholder="Interest rate,%" 
           v-model.number="list.interestRate"
           :class="{invalid: ($v.list.interestRate.$dirty && !$v.list.interestRate.required)|| ($v.list.interestRate.$dirty && !$v.list.interestRate.numeric)}"
           >
           <small v-if="$v.list.interestRate.$dirty && !$v.list.interestRate.required" class="helper-text invalid">This field must be filled</small>
           <small v-else-if="$v.list.interestRate.$dirty && !$v.list.interestRate.numeric" class="helper-text invalid">The value must be number</small>
           <input 
           type="text" 
           class="form__input" 
           placeholder="Maximum loan,USD" 
           v-model.number="list.maximumLoan"
           :class="{invalid: ($v.list.maximumLoan.$dirty && !$v.list.maximumLoan.required)|| ($v.list.maximumLoan.$dirty && !$v.list.maximumLoan.numeric)}"
           >
           <small v-if="$v.list.maximumLoan.$dirty && !$v.list.maximumLoan.required" class="helper-text invalid">This field must be filled</small>
           <small v-else-if="$v.list.maximumLoan.$dirty && !$v.list.maximumLoan.numeric" class="helper-text invalid">The value must be number</small>
           <input 
           type="text" 
           class="form__input" 
           placeholder="Minimum down payment,%"
           v-model.number="list.minimumDownPayment"
           :class="{invalid: ($v.list.minimumDownPayment.$dirty && !$v.list.minimumDownPayment.required)|| ($v.list.minimumDownPayment.$dirty && !$v.list.minimumDownPayment.numeric)}"
           >
           <small v-if="$v.list.minimumDownPayment.$dirty && !$v.list.minimumDownPayment.required" class="helper-text invalid">This field must be filled</small>
           <small v-else-if="$v.list.minimumDownPayment.$dirty && !$v.list.minimumDownPayment.numeric" class="helper-text invalid">The value must be number</small>
           <input 
           type="text" 
           class="form__input" 
           placeholder="Loan term/months"
           v-model.number="list.loanTerm"
           :class="{invalid: ($v.list.loanTerm.$dirty && !$v.list.loanTerm.required)|| ($v.list.loanTerm.$dirty && !$v.list.loanTerm.numeric)}"
           >
           <small v-if="$v.list.loanTerm.$dirty && !$v.list.loanTerm.required" class="helper-text invalid">This field must be filled</small>
           <small v-else-if="$v.list.loanTerm.$dirty && !$v.list.loanTerm.numeric" class="helper-text invalid">The value must be number</small>
           <button 
           class="form__btn" 
           type="submit"
           
           >Add</button>
       </form>
   </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {required,numeric}  from 'vuelidate/lib/validators'
export default {
    mixins:[validationMixin],
    name:'v-management-from',
    data:()=>({
        list:{
            bankName :'',
            interestRate: null,
            maximumLoan:null,
            minimumDownPayment:null,
            loanTerm:'',
        }
    }),
    methods:{
        addNewBank(event){
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }
            this.$emit('newBank',this.list)
            event.target.reset()
        },
    },
    validations:{
        list:{
            bankName:{required},
            interestRate:{required,numeric},
            maximumLoan:{required,numeric},
            minimumDownPayment:{required,numeric},
            loanTerm:{required,numeric},
        },
    },
    
}
</script>

<style scoped>
.form{
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}
.form__input{
    border: 1px solid #6195ED;
    padding: 20px 20px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 15px;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
}
.form__input::placeholder{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
}
.form__btn{
    width: 200px;
    box-sizing: border-box;
    background-color: #6195ED;
    border: none;
    border-radius: 15px;
    padding: 10px 20px;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    transition: background-color .5s ease;
}
.form__btn:hover{
    background-color: #236be9;
}
.invalid{
    color: red;
    margin-bottom: 10px;
    padding-left: 10px;
}
.form__text{
    font-size: 18px;
    font-weight: 700;
    display: inline-block;
    margin-bottom: 10px;
    padding-left: 20px;
    text-transform: uppercase;
}
</style>