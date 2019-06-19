import { Component, Vue} from 'vue-property-decorator';
import {VNode} from 'vue'
import './style/app.style.scss'
@Component
export default class Login extends Vue{

    render(h: Function):VNode {
        return (
            <div class="main">
                <header class="header">
                </header>
                <router-view class="router-view"></router-view>
                <footer class="footer">
                </footer>
            </div>
        )
    }
    
}


