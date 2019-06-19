import { Component, Vue, Emit, Prop} from 'vue-property-decorator';
@Component
export default class GetCode extends Vue{

    @Prop({type: String, default: ''}) phoneNumber!: string;

    public codeText: string = '获取验证码';
    public intervalCode: number = 0;
    public count: number = 60;
    public codeFlag: boolean = true;

    @Emit('getCode')
    handleEvent(code:string) {}

    public getCode() {
        if(!this.codeFlag || !this.checkPhoneNumber()) return;
        this.mockData({
            codeId: 'test1'
        }).then((res:any) => {
            this.handleEvent(res);
            this.$message({
                message: '验证码已发送',
                type: 'success'
              });
            this.count = 60;
            this.codeFlag = false;
            clearInterval(this.intervalCode);
            this.intervalCode = setInterval(() => {
                this.count --;
                if(this.count <= 0) {
                    this.codeText = `获取验证码`;
                    clearInterval(this.intervalCode);
                } else {
                    this.codeText = `${this.count}s`;
                }
            }, 1000)
        })
    }
    
    public checkPhoneNumber() {
        if(this.phoneNumber == '') {
            this.$message({
                type: 'warning',
                message: '请输入电话号码'
            });
            return false
        } else if(!(/^1[3456789]\d{9}$/.test(this.phoneNumber))) {
            this.$message.error('请输入正确的电话号码');
            return false
        }
        return true
    }
    
    public mockData(data: any) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data)
            }, 500)
        })
    }

    public destroyed (): void {
        clearInterval(this.intervalCode)
    }

    render(h: Function) {
        return (
            <div>
                <b class="get-code" onClick={this.getCode}>{this.codeText}</b>
            </div>
        )
    }
}

