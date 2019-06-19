import { Component, Vue} from 'vue-property-decorator';
import {VNode} from 'vue'
import './style.scss';
import GetCode from './getcode';

@Component
export default class Login extends Vue{

    public form: any = {
        phoneNumber: '' ,
        code: ''
    }

    public codeId: string = '';

    public getCode({codeId}: any) {
        this.codeId = codeId
    }
    
    public submit() {
        if(!this.codeId) {
            this.$message({
                type: 'warning',
                message: '请先获取验证码'
            });
            return
        } else if(!this.form.code) {
            this.$message.error('请输入验证码');
            return
        }

        this.mockData({
            code: 200,
            status: 'success'
        }).then(data => {
            if(data.code == 200) {
                this.$message({
                    message: '登陆成功',
                    onClose: () => {
                        this.$router.replace('/home')
                    }
                })
            } else {
                this.$message.error('登录失败')
            }
        })
    }

    public mockData(data: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 500)
        })
    }

    render(h: Function):VNode {
        return (
            <div class="login-wrap">
                <el-form ref="form" label-width="80px">
                    <el-form-item label="手机号">
                        <el-input vModel={this.form.phoneNumber} size="small" type="tel"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码">
                        <el-input vModel={this.form.code} size="small" type='password'></el-input>
                        <GetCode on-getCode={this.getCode} phoneNumber={this.form.phoneNumber} class="get-code"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button onClick={this.submit}>提交</el-button>
                    </el-form-item> 
                </el-form>
            </div>
        )
    }
    
}


