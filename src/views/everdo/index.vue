<template>
  <div class="app-container">
    <div class="title">
      <h3>Design</h3>
    </div>
    <div style="padding:0 20px">
      <!-- <v-tabs size="mini" height="30px" >
        <v-tab class="app-tab">Todos</v-tab>
        <v-tab class="app-tab">Notes</v-tab>
        <v-tab class="app-tab">Links</v-tab>
      </v-tabs> -->
      <v-text-field size="mini" label="添加任务，回车即可保存" v-model="content" @keyup.enter.native="addTodo"></v-text-field>
      <div>
        <ul class="app-ul">
          <li v-for="todo in todoList" :key="todo.date">
            <v-checkbox
              @change="stateChange"
              v-model="todo.complete"
              :label="todo.content"
            ></v-checkbox>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
class TodoTask {
  content = ''
  complete = false
  date = null
  constructor(content,date,complete = false){
    this.content = content
    this.date = date || moment().format('YYYY-MM-DD HH:mm:ss')
    this.complete = complete
  }
  toComplete(){
    this.complete = true
  }
}
export default {
  name: '',

  data () {
    return {
      content:'',
      todoList:[]
    }
  },
  mounted(){
    this.initTodo()
    axios.get('http://localhost:10233/').then(res=>{
      console.log(res.data)
      this.content  = res.data.name
    })
  },
  methods:{
    initTodo(){
      let todos = localStorage.getItem('TODO_LIST')
      if(todos){
        todos = JSON.parse(todos)
        this.todoList = todos.map(todo=>new TodoTask(todo.content,todo.date,todo.complete))
      }    
    },
    addTodo(){
      if(!this.content) return
      this.todoList.push(new TodoTask(this.content))
      localStorage.setItem('TODO_LIST',JSON.stringify(this.todoList))
     
      this.content = ''
    },
    stateChange(){
      localStorage.setItem('TODO_LIST',JSON.stringify(this.todoList))
    }
  }
}
</script>

<style scoped>

</style>
