<template>
  <div class="v-calculator-item">
      <details class="calculator__accordion"> 
          <summary class="calculator__accordion-title">{{oneBank.bankName}}</summary>
           <div class="calculator__accordion-content">
               <form action="" @submit.prevent="calcCredit">
                   <span class="calculator__accordion-subtitle">Enter the loan amount, USD</span>
                    <input 
                    class="calculator__accordion-credit" 
                    type="text" 
                    v-model="sum" 
                    placeholder="Credit Sum"
                    :class="{invalid: ($v.sum.$dirty && !$v.sum.required)}"
                    >
                    <small v-if="$v.sum.$dirty && !$v.sum.required" class="helper-text invalid">This field must be filled</small>
                    <span class="calculator__accordion-subtitle">Enter minimum down payment, %</span>
                    <input 
                    class="calculator__accordion-credit" 
                    type="text" 
                    v-model="payment" 
                    placeholder="Minimum down payment"
                    :class="{invalid: $v.payment.$dirty && !$v.payment.required}"
                    >
                    <small v-if="$v.sum.$dirty && !$v.sum.required" class="helper-text invalid">This field must be filled</small>
                    <button class="form__btn">Calculate</button>
               </form>
                <template v-if="isVisibleCredit">
                    <template v-if="isCreditGive">
                    <p>Monthly mortgage payment {{monthlyPaymentCredit}} USD</p>
                    </template>
                    <template v-else>
                        <p class="calculator__accordion-error">Loan denied</p>
                    </template>
                </template>
           </div>
      </details>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {required}  from 'vuelidate/lib/validators'
export default {
    mixins:[validationMixin],
    name:'v-calculator-item',
    props:{
        oneBank:{
            type:Object,
            default:()=>({})
        }
    },
    data:()=>({
        sum:0,
        payment:0,
        creditSum:null,
        downPayment:null,
        isVisibleCredit:false
    }),
    computed:{
        monthlyPaymentCredit(){
            const toPercent= this.oneBank.interestRate / 100
            const monthlyPayment = (((this.creditSum - this.downPayment) *(toPercent/12))*Math.pow(1+(toPercent/12),this.oneBank.loanTerm)) / (Math.pow(1+(toPercent/12),this.oneBank.loanTerm)-1)
           return monthlyPayment.toFixed(2)
        },
        isCreditGive(){
            return  this.creditSum <= this.oneBank.maximumLoan && this.downPayment > this.oneBank.minimumDownPayment
        },
        // maximum(){
        //     const maximumLoan = this.oneBank.maximumLoan
        //     return maximumLoan
        // }
    },
    methods:{
        calcCredit(){
            if(this.$v.$invalid){
                this.$v.$touch()
                return
            }
            this.creditSum = this.sum
            this.downPayment = this.payment
            this.isVisibleCredit = true
        }
    },
    validations:{
        sum:{
            required,
        },
        payment:{required}
    },
}
</script>

<style>
summary::-webkit-details-marker{
    display: none;
}
summary::marker{
    display: none;
    font-size: 0px;
}
.calculator__accordion-title{
    cursor: pointer;
    outline: none;
    padding: 20px;
    border: 1px solid ;
    border-radius: 15px;
}
.calculator__accordion-content{
    padding: 20px;
    background-color: rgb(230, 230, 230);
    border-radius: 15px;
    margin-top: 20px;
}
.calculator__accordion{
    margin-bottom: 20px;
}
.calculator__accordion-credit{
    border: 1px solid #6195ED;
    padding: 20px 20px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 15px;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    outline: #6195ED;
    display: block;
}
.calculator__accordion-subtitle{
    display: block;
    margin-bottom: 20px;
    font-size: 20px;
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
.calculator__accordion-error{
    color: red;
}
.invalid{
    color: red;
    margin-bottom: 10px;
    padding-left: 10px;
    display: block;
}
</style>