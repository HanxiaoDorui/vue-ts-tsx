import { Component, Vue} from 'vue-property-decorator';
import {VNode} from 'vue'
import './style.scss';

@Component
export default class Login extends Vue{

    render(h: Function):VNode {
        return (
            <div class="home">
                登陆成功
            </div>
        )
    }
    
}


