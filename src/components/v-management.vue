<template>
    <div class="v-management">
        <h1 >Mortgage calculator</h1>
        <v-management-form
        @newBank = 'newBankList'
        />
        <v-management-list 
        :list=banksList
        @removeOneBank = 'removeBank'
        @showEditPopup='showEditPopup'
        />
        <v-management-edit 
        v-if="isEditPopupVisible"
        @closeEditPopup='closeEditPopup'
        @editNewData='editNewData'
        :bank='editData'
        />
        <router-link :to="{name:'calculator'}">
            <button class="wrapper__btn">Calculator</button>
        </router-link>
    </div>
</template>

<script>
import vManagementForm from './v-managementForm.vue'
import vManagementList from './v-managementList.vue'
import vManagementEdit from './v-managementEdit.vue'
import  {mapGetters} from 'vuex'
import  {mapActions} from 'vuex'
export default {
    name:'v-management',
    components:{
        vManagementForm,
        vManagementList,
        vManagementEdit,
    },
    data:()=>({
        editData:null,
        isEditPopupVisible:false
    }),
    computed:{
        ...mapGetters('banksList',['banksList'])
    },
    methods:{
        ...mapActions('banksList',['addNewBank','removeBanlFromList','editList']),
        newBankList(value){
            this.addNewBank(value)
        },
        removeBank(data){
            this.removeBanlFromList(data)
        },
        showEditPopup(data){
            this.isEditPopupVisible=true
            this.editData = {...data}
        },
        closeEditPopup(){
            this.isEditPopupVisible=false
        },
        editNewData(data){
            this.isEditPopupVisible=false
            this.editList(data)
        }
          
    }
}
</script>

<style scoped>
.v-management{
    position: relative;
}
.wrapper__btn{
    background-color: #2e73e9;
    position: absolute;
    border: none;
    border-radius: 15px;
    top: -20px;
    right: -20px;
    cursor: pointer;
    padding: 10px 20px;
    font-weight: 700;
    color:#fff;
}
</style>