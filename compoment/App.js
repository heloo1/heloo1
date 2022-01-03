import html from '../core.js';
import {connect} from '../stores.js'
import Header from'../compoment/Header.js'
import TodoList from '../compoment/TodoList.js'
import Footer from '../compoment/Footer.js'

function App({todos}){
    return html `
    <section class="todoapp">
        ${Header()}
        ${todos.length >0 && TodoList()}
        ${todos.length >0 && Footer()}
    </section>
    `
}
export default connect()(App)